FROM mcr.microsoft.com/playwright:v1.37.1-focal

WORKDIR /app

# Copy files
COPY package*.json ./
RUN npm ci

COPY . .

# Create reports directory
RUN mkdir -p test-results

# Run tests and keep reports
CMD ["sh", "-c", "npm test && echo 'Tests completed'"]