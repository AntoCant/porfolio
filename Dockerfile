# Imagen base de Node.js
FROM node:18-alpine AS builder

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el package.json y el package-lock.json para instalar las dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código fuente de tu proyecto al contenedor
COPY . .

# Construye el proyecto Astro
RUN npm run build

# Fase 2: Servidor para servir el contenido estático
FROM nginx:alpine

# Copia el contenido generado en la fase anterior al directorio de nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponemos el puerto 80
EXPOSE 80

# Inicia el servidor nginx
CMD ["nginx", "-g", "daemon off;"]
