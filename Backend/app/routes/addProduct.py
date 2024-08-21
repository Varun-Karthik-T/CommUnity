from flask import request
from .. import app
from .. import db as d

@app.post('/addProduct')
def addProduct():
    # Fetch the request body
    data = request.json

    # Fetch the collection
    collection = d.db['products']

    # insert the document
    collection.insert_one(data)

    # Return a success response
    return {'success': True}