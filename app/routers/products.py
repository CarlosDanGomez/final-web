from fastapi import APIRouter,Depends,HTTPException,status
from database.db import db_client
from bson.objectid import ObjectId
from models.product import ProductModel
from typing import List




router = APIRouter()

@router.get("/products/")
async def products():
    collection = db_client.business
    products = await collection["products"].find().to_list(1000)

    result = []

    for index,elem in enumerate(products):
        obj = {}
        obj["key"] = index
        obj["name"] = elem["name"]
        obj["price"] = elem["price"]
        obj["image"] = elem["image"]
        result.append(obj)

    return result

@router.post("/products/")
async def product(product: ProductModel):
    collection = db_client.business
    collection.products.insert_one(product.dict())
    return 201
    