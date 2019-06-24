!usr/bin sh

echo 'Hello, this script will going build your app'
npm run build
cat /etc/hostname
pwd
ls -al
sleep 1
echo $! > .pidfile