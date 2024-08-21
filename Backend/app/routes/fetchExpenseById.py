from flask import jsonify, request
from .. import app
from .. import db as d

@app.get('/fetchExpenseById/<string:id>')
def fetchExpenseById(id):
    try:
        collection = d.db['expenses']

        expense = collection.find_one({'shg_id': id})
        if expense and '_id' in expense:
            expense.pop('_id')
        return jsonify(expense)
    except Exception as e:
        return {'error': str(e)}, 500