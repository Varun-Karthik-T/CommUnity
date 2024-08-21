from flask import jsonify
from .. import app
from .. import db as d

@app.get('/fetchExpenses/<id>')
def fetchExpenses(id):
    collection = d.db['expenses']

    # Fetch all documents with the specific 'shg_id' field
    cursor = collection.find({"shg_id": id})

    # Convert cursor to a list of documents
    documents = []
    for document in cursor:
        # Remove the '_id' field from each document
        if '_id' in document:
            document.pop('_id')
        documents.append(document)

    # Check if no documents were found
    if not documents:
        return jsonify({"error": "No expenses found for the given SHG ID"}), 404

    # Convert list of documents to JSON serializable format
    return jsonify((documents))
