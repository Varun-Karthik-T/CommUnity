from flask import request
from .. import app
from .. import db as d
import datetime

@app.post('/applyLoan')
def applyLoan():
    data = request.json

    if not all(key in data for key in ('member_id', 'purpose', 'loan_amount')):
        return {'error': 'Missing required fields'}, 400
    try:

        member_id = data['member_id']
        purpose = data['purpose']
        loan_amount = data['loan_amount']
        date = datetime.datetime.now()
        repayment_status = 'pending'

        collection = d.db['loans']

        loan_data = {
            'member_id': member_id,
            'purpose': purpose,
            'loan_amount': loan_amount,
            'date': date,
            'repayment_status': repayment_status
        }

        collection.insert_one(loan_data)

        return {'success': True}
    except Exception as e:
        return {'error': str(e)}, 500
    
