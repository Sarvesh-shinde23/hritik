#!/bin/sh

# Clear the npm cache
echo "Cleaning npm cache..."
npm cache clean --force

# Install the dependencies
echo "Installing dependencies..."
npm install
npm run build

# Exit the script
echo "Done."

