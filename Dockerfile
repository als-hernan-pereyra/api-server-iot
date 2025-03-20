# Use the official Node.js image as a base
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json (if it exists) to the working directory
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the rest of the application files into the container
COPY . .

# Expose the port that the app will run on
EXPOSE 3000

# Define the command to run the application
CMD ["node", "index.js"]
