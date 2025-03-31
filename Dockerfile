# Use Node.js to build the React app
FROM node:18 AS build

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire app and build it
COPY . .
RUN npm run build

# Use Apache as the web server
FROM httpd:2.4

# Copy React build files to Apache's web root
COPY --from=build /app/build /usr/local/apache2/htdocs/

# Expose port 80 for Apache
EXPOSE 80

# Start Apache in the foreground
CMD ["httpd", "-D", "FOREGROUND"]

