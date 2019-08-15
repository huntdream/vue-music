#!/bin/sh

echo 'Hello, this script will going build your app'
npm run build
rm -rf /root/server/music
mv dist /root/server/music