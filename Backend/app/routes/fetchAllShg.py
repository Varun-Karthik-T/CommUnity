from flask import jsonify
from .. import app
from .. import db as d

@app.get('/fetchAllShg')
def fetchAllShg():
    collection = d.db['SHGs']

    cursor = collection.find()

    documents = []
    for document in cursor:
        if '_id' in document:
            document['_id'] = str(document['_id']) 
        documents.append(document)

    return jsonify(documents)