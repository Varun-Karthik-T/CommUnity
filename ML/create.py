import pandas as pd
import numpy as np

# Set seed for reproducibility
np.random.seed(42)

# Number of SHGs
n_shgs = 500

# Define weights for features
weights = {
    'Number_of_Members': 0.1,
    'Annual_Revenue': 0.3,
    'Annual_Profit': 0.2,
    'Expenses': -0.2,
    'Loan_Amount': -0.1,
    'Loan_Repayment_Status': {'Paid': 1, 'Pending': -0.5, 'Default': -1},
    'Projects_Completed': 0.1,
    'Success_Rate': 0.2,
    'Geographical_Area': {'Urban': 0.1, 'Rural': -0.1},
    'Market_Reach': {'Local': -0.1, 'Regional': 0.1, 'National': 0.2},
    'Training_Programs_Attended': 0.1,
    'Community_Impact': {'Low': -0.2, 'Medium': 0, 'High': 0.2},
    'Awards_Recognitions': {'None': -0.1, 'Local': 0.1, 'National': 0.2},
    'Economic_Conditions': {'Poor': -0.3, 'Average': 0, 'Good': 0.3},
    'Government_Support': {'Low': -0.2, 'Medium': 0, 'High': 0.2},
    'Market_Trends': {'Downward': -0.3, 'Stable': 0, 'Upward': 0.3}
}
# weights = {
#     'Number_of_Members': 1/1000,
#     'Annual_Revenue': 750/1000,
#     'Annual_Profit': 900/1000,
#     'Expenses': -250/1000,
#     'Loan_Amount': -450/1000,
#     'Loan_Repayment_Status': {'Paid': 1, 'Pending': -0.5, 'Default': -1},
#     'Projects_Completed': 750/1000,
#     'Success_Rate': 0.93,
#     'Geographical_Area': {'Urban': 0.7, 'Rural': 0.4},
#     'Market_Reach': {'Local': 0.4, 'Regional': 0.7, 'National': 0.9},
#     'Training_Programs_Attended': 0.8,
#     'Community_Impact': {'Low': 0.5, 'Medium': 0.8, 'High': 0.94},
#     'Awards_Recognitions': {'None': -0.1, 'Local': 0.5, 'National': 0.8},
#     'Economic_Conditions': {'Poor': -0.3, 'Average': 0, 'Good': 0.8},
#     'Government_Support': {'Low': -0.2, 'Medium': 0.4, 'High': 0.9},
#     'Market_Trends': {'Downward': -0.3, 'Stable': 0, 'Upward': 0.7}
# }

# Generate synthetic data
data = {
    'SHG_Name': [f'SHG_{i}' for i in range(n_shgs)],
    'Date_of_Establishment': pd.date_range(start='1/1/2000', periods=n_shgs, freq='M'),
    'Number_of_Members': np.random.randint(10, 50, size=n_shgs),
    'Sector': np.random.choice(['Agriculture', 'Handicrafts', 'Services'], size=n_shgs),
    'Annual_Revenue': np.random.randint(10000, 100000, size=n_shgs),
    'Annual_Profit': np.random.randint(1000, 20000, size=n_shgs),
    'Expenses': np.random.randint(5000, 50000, size=n_shgs),
    'Loan_Amount': np.random.randint(0, 20000, size=n_shgs),
    'Loan_Repayment_Status': np.random.choice(['Paid', 'Pending', 'Default'], size=n_shgs),
    'Projects_Completed': np.random.randint(1, 20, size=n_shgs),
    'Success_Rate': np.random.uniform(0.5, 1.0, size=n_shgs),
    'Geographical_Area': np.random.choice(['Urban', 'Rural'], size=n_shgs),
    'Market_Reach': np.random.choice(['Local', 'Regional', 'National'], size=n_shgs),
    'Training_Programs_Attended': np.random.randint(0, 10, size=n_shgs),
    'Community_Impact': np.random.choice(['Low', 'Medium', 'High'], size=n_shgs),
    'Awards_Recognitions': np.random.choice(['None', 'Local', 'National'], size=n_shgs),
    'Economic_Conditions': np.random.choice(['Poor', 'Average', 'Good'], size=n_shgs),
    'Government_Support': np.random.choice(['Low', 'Medium', 'High'], size=n_shgs),
    'Market_Trends': np.random.choice(['Downward', 'Stable', 'Upward'], size=n_shgs),
}

# Convert the dictionary to a DataFrame
df = pd.DataFrame(data)

# Calculate Credit Score based on weighted sum of features
df['Credit_Score'] = (
    df['Number_of_Members'] * weights['Number_of_Members'] +
    df['Annual_Revenue'] * weights['Annual_Revenue'] +
    df['Annual_Profit'] * weights['Annual_Profit'] +
    df['Expenses'] * weights['Expenses'] +
    df['Loan_Amount'] * weights['Loan_Amount'] +
    df['Loan_Repayment_Status'].map(weights['Loan_Repayment_Status']) +
    df['Projects_Completed'] * weights['Projects_Completed'] +
    df['Success_Rate'] * weights['Success_Rate'] +
    df['Geographical_Area'].map(weights['Geographical_Area']) +
    df['Market_Reach'].map(weights['Market_Reach']) +
    df['Training_Programs_Attended'] * weights['Training_Programs_Attended'] +
    df['Community_Impact'].map(weights['Community_Impact']) +
    df['Awards_Recognitions'].map(weights['Awards_Recognitions']) +
    df['Economic_Conditions'].map(weights['Economic_Conditions']) +
    df['Government_Support'].map(weights['Government_Support']) +
    df['Market_Trends'].map(weights['Market_Trends'])
)

# Normalize Credit Score to be within 100 to 1000
df['Credit_Score'] = 1 + 9 * (df['Credit_Score'] - df['Credit_Score'].min()) / (df['Credit_Score'].max() - df['Credit_Score'].min())
df['Credit_Score'] = df['Credit_Score'].astype(int)

# Save to CSV
df.to_csv('new_synthetic_shg_data.csv', index=False)

# Display the first few rows of the DataFrame
print(df.head())
