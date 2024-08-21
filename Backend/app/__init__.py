from flask import Flask
from flask_cors import CORS

app=Flask(__name__)
CORS(app)

from .routes import hello,fetchSHGs, fetchMembers, fetchExpenses, fetchAllShg, fetchAllMembers, applyLoan, addProduct, updateProduct, updateTest, invest, performance, fetchProducts, fetchLoan, addExpense
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')