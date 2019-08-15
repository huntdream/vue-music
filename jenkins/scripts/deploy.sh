#!/bin/sh

echo 'Hello, this script will going build your app'
npm run build
npm install -g serve
server -p 4000 dist