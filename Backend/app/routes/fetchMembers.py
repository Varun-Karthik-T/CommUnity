from .. import app
from .. import db as d
from flask import jsonify

@app.get('/fetchMembers/<id>')
def fetchMembers(id):
    collection = d.db['SHG-members']

    data = collection.find( { "shg_id": id } )
    for data in data:
        if '_id' in data:
            data.pop('_id')

    return jsonify(data)