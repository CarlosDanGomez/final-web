# Cómo se corre
Para correr este backend, primero ejecuta
pip install -r requirements.txt
# Dentro del .env se encuentra el connection string para la base de datos de mongo, reemplázalo por el tuyo.
Cuándo ya hayas hecho eso, dirígete a la carpeta app y ejecut el siguiente comando
uvicorn main:app --reload
y tendrás tu backend corriendo en localhost:8000