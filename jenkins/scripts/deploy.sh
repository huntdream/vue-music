!usr/bin sh

echo 'Hello, this script will going build your app'
npm run build
dockerid="$(cat /etc/hostname)"
ls -al
docker cp "${dockerid}:./dist /home/project
sleep 1
echo $! > .pidfile