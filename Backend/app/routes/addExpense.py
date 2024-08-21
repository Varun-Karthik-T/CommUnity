from .. import app
from .. import db as d
from flask import jsonify, request

@app.post('/addExpense')
def addExpense():
    try:
        data = request.json

        collection = d.db['expenses']

        result = collection.insert_one(data)
        
        if result.inserted_id:
            return jsonify({'success': True}), 200
        else:
            return jsonify({'error': 'Failed to add expense'}), 500

    except Exception as e:
        return jsonify({'error': str(e)}), 500