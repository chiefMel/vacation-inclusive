#!/bin/bash

cd "$(dirname "$0")"

echo "Adding changes..."
git add .

echo "Committing..."
read -p "Enter commit message (or press Enter for 'update'): " msg

if [ -z "$msg" ]; then
  msg="update"
fi

git commit -m "$msg" || echo "No changes to commit"

echo "Pushing to GitHub..."
git push origin main

echo "Done!"
