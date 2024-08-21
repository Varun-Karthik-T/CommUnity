from .. import app
from .. import db as d
from flask import jsonify, request
import xgboost as xgb
import pandas as pd
import datetime

model = xgb.XGBRegressor()
model.load_model('Model/xgb_model.json')

@app.post('/addExpense/<id>')
def addExpense(id):
    try:
        data = request.json
        
        initial_capital = data.get('currentBalance')
        gross_profit = data.get('total_revenue')
        profit_margin = (gross_profit / initial_capital) * 100
        attendance = data.get('attendance_percentage')
        loan_repayments = data.get('loan_repayments')

        user_data = pd.DataFrame({
            'initial_capital': [initial_capital],
            'gross_profit': [gross_profit],
            'profit_margins': [profit_margin],
            'attendance': [attendance],
            'loan_repayments': [loan_repayments]
        })
        
        performance = model.predict(user_data)
        data['performance'] = float(performance[0])

        collection = d.db['expenses']

        record = collection.find_one({"shg_id": id})
        if not record:
            return jsonify({'error': 'SHG not found'}), 404

        today_date = datetime.datetime.now().strftime('%Y-%m-%d')
        if 'records' not in record:
            record['records'] = {}
        record['records'][today_date] = data

        result = collection.update_one(
            {"shg_id": id},
            {"$set": {"records": record['records']}}
        )

        if result.modified_count == 0:
            return jsonify({'error': 'Failed to update expense'}), 500

        return jsonify({'success': True}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500