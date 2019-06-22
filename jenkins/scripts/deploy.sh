!usr/bin/env sh

echo 'Hello, this script will going build your app'
npm run build
ls -al
sleep 1
echo $! > .pidfile