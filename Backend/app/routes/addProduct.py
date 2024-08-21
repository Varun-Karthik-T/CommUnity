from flask import request
from .. import app
from .. import db as d

@app.post('/addProduct')
def addProduct():
    data = request.json
    data['quantity_sold'] = 0

    collection = d.db['products']

    collection.insert_one(data)

    return {'success': True}