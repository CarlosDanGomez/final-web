import motor.motor_asyncio
import os
from dotenv import load_dotenv

load_dotenv()

db_client = motor.motor_asyncio.AsyncIOMotorClient(os.getenv("CONN_STRING"))


