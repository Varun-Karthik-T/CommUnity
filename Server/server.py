from flask import Flask, request, jsonify
from db import db

app = Flask(__name__)

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

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
