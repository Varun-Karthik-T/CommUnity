from flask import request, jsonify
from .. import app
from .. import db as d
import datetime

@app.post('/invest')
def invest():
    try:
        data = request.json
        
        if not all(key in data for key in ('id', 'shg_id', 'amount')):
            return jsonify({'error': 'Missing required fields'}), 400
        
        investor_id = data['id']
        shg_id = data['shg_id']
        amount = data['amount']
        investment_type = data['investment_type']
        frequency = data['frequency']


        investors_collection = d.db['investors']
        shgs_collection = d.db['SHGs']

        investment_data = {
            'id': investor_id,
            'shg_id': shg_id,
            'amount': amount,
            'investment_type': investment_type,
            'frequency': frequency,
            'date': datetime.datetime.now()
        }
        # investors_collection.insert_one(investment_data)

        result = investors_collection.update_one(
            {'id': investor_id},
            {'$addToSet': {'investments': investment_data}}
        )
        result = shgs_collection.update_one(
            {'shg_id': shg_id},
            {'$addToSet': {'investors': investor_id}}
        )
        if result.matched_count == 0:
            return jsonify({'error': 'SHG not found'}), 404

        return jsonify({'success': True}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500
