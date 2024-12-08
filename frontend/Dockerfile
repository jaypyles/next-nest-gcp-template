# builder
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY next.config.ts tsconfig.json /app/
COPY public /app/public
COPY src /app/src

RUN npm run build

# # final
# FROM node:18-alpine

# WORKDIR /app

# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./package.json

EXPOSE 3000