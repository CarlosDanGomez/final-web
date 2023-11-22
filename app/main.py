from fastapi import FastAPI,Depends
from fastapi.security import OAuth2PasswordBearer
from routers import users,products,orders
from fastapi.middleware.cors import CORSMiddleware

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
app = FastAPI()
app.include_router(users.router)
app.include_router(products.router)
app.include_router(orders.router)
# keep adding new submodules


origins = [
    "http://localhost",
    "http://localhost:3000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return "1"
