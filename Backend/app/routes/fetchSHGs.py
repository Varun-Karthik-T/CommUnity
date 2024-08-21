from .. import app
from .. import db as d
from flask import jsonify

@app.get('/fetchSHGs/<id>')
def fetchSHGs(id):
    collection = d.db['SHGs']

    # Fetch all documents from the collection
    data = collection.find( { "shg_id": id } )
    for data in data:
        if '_id' in data:
            data.pop('_id')

    return jsonify(data)