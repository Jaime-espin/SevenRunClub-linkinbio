#!/bin/bash

# Inicia el servidor Python en segundo plano
python3 -m http.server 8000 --bind 0.0.0.0 &

# Espera un par de segundos para que se inicie correctamente
sleep 2

# Lanza ngrok para exponer el puerto 8000
ngrok http 8000
