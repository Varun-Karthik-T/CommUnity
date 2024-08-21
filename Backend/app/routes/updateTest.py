from flask import request, jsonify
from .. import app
from .. import db as d

@app.post('/updateTest')
def updateTest():
    try:
        # Fetch the request body
        
        data = request.json

        # Extract the SHG ID and price from the request data
        name=data['name']
        id=data['id']

        collection = d.db['test']

        # Update the document
        result = collection.update_one(
            {'id': id},
            {'$set': {'name': name}}
        )

        if result.matched_count == 0:
            return jsonify({'error': 'Document not found'}), 404

        # Return a success response
        return jsonify({'success': True}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500