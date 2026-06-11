docker rm -f bundled-server
docker rmi bundled-server

docker build -t bundled-server --platform linux/amd64 .
docker run --env-file .env --name bundled-server -d -p 3000:3000 bundled-server
