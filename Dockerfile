# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React app (if needed)
RUN npm run build

# Expose port 80 for serving the app
EXPOSE 80

# Specify the command to run when the container starts
CMD ["npm", "start"]
