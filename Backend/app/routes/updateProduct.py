from flask import request, jsonify
from .. import app
from .. import db as d

@app.post('/updateProduct')
def updateProduct():
    try:
        collection = d.db['products']
        data = request.json

        if 'shg_id' not in data or 'price' not in data:
            return jsonify({'error': 'Missing required fields'}), 400
        new_availability = None
        new_price = None
        shg_id = data['shg_id']
        product_name=data['product_name']
        if 'price' in data:
            new_price = data['price']
        if 'availability' in data:
            new_availability = data['availability']

        try:
            new_price = float(new_price)
        except ValueError:
            return jsonify({'error': 'Invalid price value'}), 400
        if new_price is not None:
            result = collection.update_one(
                {'shg_id': data['shg_id'], 'product_name': data['product_name']},
                {'$set': {'price': new_price}}
            )
        if new_availability is not None:
            result = collection.update_one(
                {'shg_id': data['shg_id'], 'product_name': data['product_name']},
                {'$set': {'availability': new_availability}}
            )
        if result.matched_count == 0:
                return jsonify({'error': 'Product not found'}), 404

        return jsonify({'success': True}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500