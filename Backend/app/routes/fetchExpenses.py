# from .. import app
# from .. import db as d
# from flask import jsonify

# @app.get('/fetchExpenses/<id>')
# def fetchExpenses(id):
#     collection = d.db['expenses']

#     # Fetch all documents from the collection
#     data = collection.find( { "shg_id": id } )
#     for data1 in data:
#         if '_id' in data1:
#             data.pop('_id')
#     if data is None:
#         return jsonify({"error": "None"}), 404
#     print(data)
#     return jsonify(data)

# # from flask import jsonify
# # from bson.json_util import dumps
# # from .. import app
# # from .. import db as d

# # @app.get('/fetchExpenses/<id>')
# # def fetchExpenses(id):
# #     collection = d.db['expenses']

# #     # Fetch the document with the specific 'shg_id' field
# #     cursor = collection.find({"shg_id": id})

# #     # Convert cursor to a list and handle special types
# #     data = list(cursor)
    
# #     # Convert MongoDB's ObjectId and other BSON types to JSON serializable format
# #     json_data = dumps(data)

# #     return jsonify(json_data)


from flask import jsonify
from bson.json_util import dumps
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
