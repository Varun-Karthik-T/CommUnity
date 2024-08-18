from flask import Flask, jsonify, request
from db import db
import xgboost as xgb
import numpy as np
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

model = xgb.XGBRegressor()
model.load_model('model/xgb_model.json')
print("Model loaded successfully")

@app.route('/')
def hello_world():
    return 'Vanakam from Binary Potatoes!'


@app.route('/data', methods=['POST'])
def insert_data():
    #data = request.json  # Get the JSON data from the request

    data={"name":"sai","age":23}
    if not data:
        return jsonify({"error": "No data provided"}), 400

    collection = db['sample']
    try:
        result = collection.insert_one(data)  # Insert the data into the collection
        return jsonify({"message": "Data inserted successfully", "id": str(result.inserted_id)}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.get('/fetchSHG')
def fetch_data():
    collection = db['user-details']
    
    # Fetch all data
    data = collection.find()
    
    # Process the data to remove '_id' from each document
    result = []
    for document in data:
        document.pop('_id', None)  # Remove the '_id' field safely
        result.append(document)
    print(result)
    return jsonify(result)

@app.get('/fetchProfit')
def fetch_profit_by_id():
    collection = db['shg-profit']

    # Fetch data by ID
    data = collection.find_one()
    res=[]
    if data:
        # Ensure 'profit-percent' exists and add it to the result list
        if 'profit-percent' in data:
            res.append(data['profit-percent'])
    print(res)
    return res


@app.post('/add')
def add_data():
    data = request.json
    collection = db['user-details']

    try:
        result = collection.insert_one(data)
        print(result)
        return jsonify({"message": "Data inserted successfully", "id": str(result.inserted_id)}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    

@app.route('/performance', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    
    # Extract the required fields from the input JSON
    initial_capital = data.get('initial_capital')
    total_revenue = data.get('total_revenue')
    gross_profit = total_revenue - initial_capital
    profit_margins = (gross_profit / total_revenue) * 100
    attendance = data.get('attendance')
    loan_repayments = data.get('loan_repayments')
    
    # Prepare the input data in the correct format
    user_data = pd.DataFrame({
        'initial_capital': [initial_capital],
        'gross_profit': [gross_profit],
        'profit_margins': [profit_margins],
        'attendance': [attendance],
        'loan_repayments': [loan_repayments]
    })

    # Predict the performance score
    predicted_score = model.predict(user_data)
    
    return jsonify({'prediction': predicted_score.tolist()})


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
