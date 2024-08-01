from flask import Flask, jsonify, request
from db import db
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

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
    
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
