from flask import request, jsonify
from .. import app
from .. import db as d

@app.post('/updateProduct')
def updateProduct():
    try:
        collection = d.db['products']
        data = request.json

        # existing_data = 
        if 'shg_id' not in data or 'price' not in data:
            return jsonify({'error': 'Missing required fields'}), 400

        shg_id = data['shg_id']
        product_name=data['product_name']
        new_price = data['price']
        new_availability = data['availability']
        image = data['image']

        cursor = collection.find({'shg_id': shg_id, 'product_name': product_name})
        if cursor.count() == 0:
            collection.insert_one({ 
                'shg_id': shg_id,
                'product_name': product_name,
                'price': new_price,
                'availability': new_availability,
                'image':image,
                'quantity_sold':0
            })
        try:
            new_price = float(new_price)
        except ValueError:
            return jsonify({'error': 'Invalid price value'}), 400

        

        result = collection.update_one(
            {'shg_id': shg_id},
            {'product_name': product_name},
            {'$set': {'price': new_price}}
        )

        if result.matched_count == 0:
            return jsonify({'error': 'Document not found'}), 404

        return jsonify({'success': True}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500