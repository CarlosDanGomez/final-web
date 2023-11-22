from pydantic import BaseModel
from typing import List
from .product import ProductModel


class Order(BaseModel):
    card: str
    address: str
    phone: str
    cvv: str
    cart: List[ProductModel]

    
