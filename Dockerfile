# Etapa de construcción
FROM node:22-alpine AS build-stage

WORKDIR /app

# Copiar archivos de configuración y dependencias
COPY package*.json ./
COPY nuxt.config.ts ./
COPY tsconfig.json ./

# Instalar dependencias
RUN npm i

# Copiar el resto del código
COPY . .

# Construir la aplicación
RUN npm run build

# Verificar qué se generó (para debugging)
RUN ls -la .output/

# Etapa de producción
FROM node:22-alpine AS production-stage

WORKDIR /app

# Instalar solo dependencias de producción
COPY package*.json ./
RUN npm i

# Copiar SOLO lo necesario desde la etapa de construcción
# Solo copiamos .output (que es lo que realmente necesita Nuxt 3)
COPY --from=build-stage /app/.output ./.output

# NO es necesario copiar /public porque Nuxt 3 lo maneja internamente
# Los archivos estáticos ya están en .output/public si existen

# Variables de entorno
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000
ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=3000

# Exponer puerto
EXPOSE 3000

# Health check (instalar curl si es necesario)
RUN apk add --no-cache curl
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/ || exit 1

# Comando para ejecutar la aplicación
CMD ["node", ".output/server/index.mjs"]