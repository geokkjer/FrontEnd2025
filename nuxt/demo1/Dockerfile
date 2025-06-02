# Build stage
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY yarn.lock* ./
COPY pnpm-lock.yaml* ./

# Install dependencies (using npm as fallback)
RUN if [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
    elif [ -f pnpm-lock.yaml ]; then npm install -g pnpm && pnpm install --frozen-lockfile; \
    else npm ci; fi

# Copy source code
COPY . .

# Build the application
RUN if [ -f yarn.lock ]; then yarn build; \
    elif [ -f pnpm-lock.yaml ]; then pnpm build; \
    else npm run build; fi

# Production stage - from scratch
FROM scratch AS runtime

# Copy minimal runtime files from alpine
COPY --from=node:20-alpine /lib/ld-musl-x86_64.so.1 /lib/
COPY --from=node:20-alpine /usr/lib/libstdc++.so.6 /usr/lib/
COPY --from=node:20-alpine /usr/lib/libgcc_s.so.1 /usr/lib/
COPY --from=node:20-alpine /usr/lib/libz.so.1 /usr/lib/
COPY --from=node:20-alpine /usr/bin/node /usr/bin/

# Copy built application
COPY --from=builder /app/.output /app

# Set working directory
WORKDIR /app

# Expose port
EXPOSE 3000

# Set environment
ENV NODE_ENV=production
ENV NITRO_PORT=3000
ENV NITRO_HOST=0.0.0.0

# Start the application
ENTRYPOINT ["/usr/bin/node", "server/index.mjs"]