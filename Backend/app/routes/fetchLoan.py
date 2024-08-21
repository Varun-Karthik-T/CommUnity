from flask import jsonify
from .. import app
from .. import db as d

@app.get('/fetchLoan/<id>')
def fetchLoan(id):
    collection = d.db['loans']

    cursor = collection.find( { "member_id": id } )

    documents = []
    for document in cursor:
        if '_id' in document:
            document['_id'] = str(document['_id']) 
        documents.append(document)

    return jsonify(documents)