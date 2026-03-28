#!/bin/bash

cd "$(dirname "$0")"

echo "Adding changes..."
git add .

echo "Committing..."

git commit -m update	 

cls
