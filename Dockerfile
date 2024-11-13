# Etapa 1: Compilar la aplicación Angular
FROM node:20 AS build

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Compila la aplicación Angular para producción
RUN npm run build --prod

# Etapa 2: Configurar Nginx para servir la aplicación
FROM nginx:alpine

# Copia los archivos compilados de Angular desde la etapa anterior
COPY --from=build /app/dist/[Front_project] /usr/share/nginx/html

# Copia un archivo de configuración personalizado para Nginx (opcional)
# Si tienes un archivo nginx.conf, descomenta la siguiente línea y modifícalo según sea necesario
# COPY nginx.conf /etc/nginx/nginx.conf

# Expone el puerto donde Nginx servirá la aplicación
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
