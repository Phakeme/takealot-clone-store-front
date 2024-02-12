# Use an official Node.js image as the base
FROM node:14-alpine

# Copy package.json and package-lock.json to the working directory
COPY package*.json /app/

# Copy the entire project to the working directory
COPY . /app/

# Set the working directory in the container
WORKDIR /app

# Install dependencies
RUN npm install

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run the React app
CMD ["npm", "start"]
