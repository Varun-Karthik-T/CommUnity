from flask import request
from .. import app
from .. import db as d

@app.post('/applyLoan')
def applyLoan():
    data = request.json

    collection = d.db['loans']

    collection.insert_one(data)

    return {'success': True}
