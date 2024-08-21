from flask import jsonify
from .. import app
from .. import db as d

@app.get('/fetchExpenses/<id>')
def fetchExpenses(id):
    collection = d.db['expenses']

    cursor = collection.find({"shg_id": id})

    documents = []
    for document in cursor:
        if '_id' in document:
            document.pop('_id')
        documents.append(document)

    if not documents:
        return jsonify({"error": "No expenses found for the given SHG ID"}), 404

    return jsonify((documents))
