from .. import app
from .. import db as db
from flask import jsonify, request
import xgboost as xgb
import pandas as pd

model = xgb.XGBRegressor()
model.load_model('Model/xgb_model.json')
print("Model loaded successfully")

@app.get('/performance/<id>')
def predict(id):
    collection = db.db['SHGs']
    data = collection.find_one({"shg_id": id})
    
    if data:
        initial_capital = data.get('initial_capital')
        gross_profit = data.get('total_revenue')
        profit_margin = (gross_profit / initial_capital) * 100
        attendance = data.get('attendance')
        loan_repayments = data.get('loan_repayment')

        user_data = pd.DataFrame({
            'initial_capital': [initial_capital],
            'gross_profit': [gross_profit],
            'profit_margins': [profit_margin],
            'attendance': [attendance],
            'loan_repayments': [loan_repayments]
        })
        
        print(user_data)

        predicted_score = model.predict(user_data)
        
        return jsonify({'prediction': predicted_score.tolist()})
    else:
        return jsonify({"error": "Data not found"}), 404