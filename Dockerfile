# Use the official Node.js LTS (Long Term Support) image as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose the port on which the React app will be running
EXPOSE 3000

# Start the React app using serve (or your preferred server)
CMD ["npx", "serve", "-s", "build"]