from flask import request, jsonify
from .. import app
from .. import db as d

@app.post('/invest')
def invest():
    try:
        # Fetch the request body
        data = request.json
        
        # Validate required fields
        if not all(key in data for key in ('id', 'shg_id', 'amount', 'date')):
            return jsonify({'error': 'Missing required fields'}), 400
        
        # Extract fields from the request data
        investor_id = data['id']
        shg_id = data['shg_id']
        amount = data['amount']
        date = data['date']

        # Fetch the collections
        investors_collection = d.db['investors']
        shgs_collection = d.db['SHGs']

        # Insert the document into the 'investors' collection
        investment_data = {
            'id': investor_id,
            'shg_id': shg_id,
            'amount': amount,
            'date': date
        }
        investors_collection.insert_one(investment_data)

        # Update the corresponding SHG document to add the new investor ID
        result = shgs_collection.update_one(
            {'shg_id': shg_id},
            {'$addToSet': {'investors': investor_id}}
        )

        if result.matched_count == 0:
            return jsonify({'error': 'SHG not found'}), 404

        # Return a success response
        return jsonify({'success': True}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500
