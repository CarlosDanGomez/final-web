from fastapi import APIRouter,Depends,HTTPException,status
from database.db import db_client
from bson.objectid import ObjectId
from models.order import Order
from typing import List




router = APIRouter()

@router.post("/orders/")
async def products(order: Order):
    collection = db_client.business

  
    collection.orders.insert_one(order.dict())
    return 201
