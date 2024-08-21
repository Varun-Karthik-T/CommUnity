from flask import request, jsonify
from .. import app
from .. import db as d

@app.post('/updateProduct')
def updateProduct():
    try:
        # Fetch the request body
        
        data = request.json
        
        # Ensure '_id' and 'price' fields are provided in the request data
        if 'shg_id' not in data or 'price' not in data:
            return jsonify({'error': 'Missing required fields'}), 400

        # Extract the SHG ID and price from the request data
        shg_id = data['shg_id']
        product_name=data['product_name']
        new_price = data['price']

        # Ensure price is a valid number
        try:
            new_price = float(new_price)
        except ValueError:
            return jsonify({'error': 'Invalid price value'}), 400

        # Fetch the collection
        collection = d.db['products']

        # Update the document
        result = collection.update_one(
            {'shg_id': shg_id},
            {'product_name': product_name},
            {'$set': {'price': new_price}}
        )

        if result.matched_count == 0:
            return jsonify({'error': 'Document not found'}), 404

        # Return a success response
        return jsonify({'success': True}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500
