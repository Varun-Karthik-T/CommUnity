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

    data={"name":"sai","age":23}
    if not data:
        return jsonify({"error": "No data provided"}), 400

    collection = db['sample']
    try:
        result = collection.insert_one(data)
        return jsonify({"message": "Data inserted successfully", "id": str(result.inserted_id)}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.get('/fetchSHG')
def fetch_data():
    print("Hit")
    collection = db['user-details']
    
    data = collection.find()
    
    result = []
    for document in data:
        document.pop('_id', None)
        result.append(document)
    print(result)
    return jsonify(result)

@app.get('/fetchProfit')
def fetch_profit_by_id():
    collection = db['shg-profit']

    data = collection.find_one()
    res=[]
    if data:
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
    
    initial_capital = data.get('initial_capital')
    total_revenue = data.get('total_revenue')
    gross_profit = total_revenue - initial_capital
    profit_margins = (gross_profit / total_revenue) * 100
    attendance = data.get('attendance')
    loan_repayments = data.get('loan_repayments')
    
    user_data = pd.DataFrame({
        'initial_capital': [initial_capital],
        'gross_profit': [gross_profit],
        'profit_margins': [profit_margins],
        'attendance': [attendance],
        'loan_repayments': [loan_repayments]
    })

    predicted_score = model.predict(user_data)
    
    return jsonify({'prediction': predicted_score.tolist()})


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
