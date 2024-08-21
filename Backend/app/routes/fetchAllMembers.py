from flask import jsonify
from .. import app
from .. import db as d

@app.get('/fetchAllMembers')
def fetchAllMembers():
    collection = d.db['SHG-members']

    cursor = collection.find()

    documents = []
    for document in cursor:

        if '_id' in document:
            document['_id'] = str(document['_id'])  
        documents.append(document)

    return jsonify(documents)