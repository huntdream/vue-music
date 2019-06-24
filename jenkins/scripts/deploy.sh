#!bin/sh

echo 'Hello, this script will going build your app'
npm run build
pwd
ls -al
sleep 1
echo $! > .pidfile