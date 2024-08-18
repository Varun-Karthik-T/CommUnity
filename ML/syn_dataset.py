import pandas as pd
import numpy as np

# Set a random seed for reproducibility
np.random.seed(42)

# Number of samples
n_samples = 1000

# Generate synthetic data (as integers)
initial_capital = np.random.randint(5000, 50000, n_samples)  # Initial capital in range 5,000 to 50,000
# total_revenue = np.random.randint(10000, 100000, n_samples)  # Total revenue in range 10,000 to 100,000

# Ensure gross profit produces a realistic profit margin (0-20%)
profit_margins = np.random.uniform(0, 20, n_samples)  # Profit margins in range 0% to 20%
gross_profit = np.round((profit_margins / 100) * initial_capital).astype(int)  # Gross profit calculated from profit margins

attendance = np.random.randint(50, 100, n_samples)  # Attendance in range 50 to 100 weekly meets
loan_repayments = np.random.randint(0, 100, n_samples)  # Loan repayments on time in range 0 to 20

# Generate the performance score based on the given features
performance_score = (
    2 * profit_margins +      # Profit margins have a weight of 20%
    0.2 * attendance +          # Attendance has a weight of 30%
    0.4 * loan_repayments       # Loan repayments have a weight of 50%
)

# Round and ensure performance score is within 0-100
performance_score = np.clip(np.round(performance_score), 0, 100).astype(int)

# Create the DataFrame
data = pd.DataFrame({
    'initial_capital': initial_capital,
    'gross_profit': gross_profit,
    'profit_margins': np.round(profit_margins).astype(int),  # Round profit margins for realism
    'attendance': attendance,
    'loan_repayments': loan_repayments,
    'performance_score': performance_score
})

# Save to CSV
data.to_csv('shg_performance_data.csv', index=False)

print("Dataset generated and saved as 'shg_performance_data.csv'")
