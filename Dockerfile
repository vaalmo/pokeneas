# Usa una imagen base oficial de Node.js
FROM node:16

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia el archivo package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto que usará la aplicación (por ejemplo, 3000 para Express)
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
