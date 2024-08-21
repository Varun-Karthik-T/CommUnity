from .. import app
from .. import db as d
from flask import jsonify

@app.get('/fetchAllSHG')
def fetchAllSHG():
    collection = d.db['SHGs']

    # Fetch all documents from the collection
    data = collection.find()
    for data in data:
        if '_id' in data:
            data.pop('_id')

    return jsonify(data)