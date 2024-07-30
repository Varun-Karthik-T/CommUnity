from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import os
from dotenv import load_dotenv

load_dotenv(".env")

db = None

# Load the MongoDB URI from the .env file
db_url = os.getenv("MONGODB_URI")

# Ensure db_url is not None
if db_url is None:
    raise ValueError("No MONGODB_URI found in environment variables")

# Connect to MongoDB
client = MongoClient(db_url, server_api=ServerApi('1'))

# Select the database
db = client['face-db']

# Test the connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(f"Error connecting to MongoDB: {e}")
