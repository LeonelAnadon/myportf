#!/bin/bash

# Ejecutar la construcción con Vite
vite build

# Copiar el archivo robots.txt a la carpeta public/
cp robots.txt public/
cp sitemap.xml public/

echo "LISTORTTI 👍"
