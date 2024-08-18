from .. import app
from .. import db as db
# from flask import jsonify

@app.get('/fetchProfit')
def fetch_profit_by_id():
    collection = db['shg-profit']

    # Fetch data by ID
    data = collection.find_one()
    res=[]
    if data:
        # Ensure 'profit-percent' exists and add it to the result list
        if 'profit-percent' in data:
            res.append(data['profit-percent'])
    print(res)
    return res