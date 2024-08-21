from flask import jsonify
from .. import app
from .. import db as d

@app.get('/fetchAllMembers')
def fetchAllMembers():
    collection = d.db['SHG-members']

    # Fetch all documents from the collection
    cursor = collection.find()

    # Convert the cursor to a list of documents
    documents = []
    for document in cursor:
        # Remove the '_id' field or convert it to a string if needed
        if '_id' in document:
            document['_id'] = str(document['_id'])  # Convert ObjectId to string or remove it
        documents.append(document)

    # Return the list of documents as a JSON response
    return jsonify(documents)