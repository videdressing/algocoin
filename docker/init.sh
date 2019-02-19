#!/bin/bash
FILE="/code/package.json"

if [ -f "$FILE" ]; then
     echo "Starting project"
     # npm install
     # npm run dev
else
    echo "$DIR is Empty"
    cd /code
    # todo
fi
