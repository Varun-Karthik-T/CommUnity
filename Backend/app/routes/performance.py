from .. import app
from .. import db as db
from flask import jsonify, request
import xgboost as xgb
import pandas as pd

model = xgb.XGBRegressor()
model.load_model('model/xgb_model.json')
print("Model loaded successfully")

@app.route('/performance', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    
    # Extract the required fields from the input JSON
    initial_capital = data.get('initial_capital')
    total_revenue = data.get('total_revenue')
    gross_profit = total_revenue - initial_capital
    profit_margins = (gross_profit / total_revenue) * 100
    attendance = data.get('attendance')
    loan_repayments = data.get('loan_repayments')
    
    # Prepare the input data in the correct format
    user_data = pd.DataFrame({
        'initial_capital': [initial_capital],
        'gross_profit': [gross_profit],
        'profit_margins': [profit_margins],
        'attendance': [attendance],
        'loan_repayments': [loan_repayments]
    })

    # Predict the performance score
    predicted_score = model.predict(user_data)
    
    return jsonify({'prediction': predicted_score.tolist()})