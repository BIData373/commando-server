docker rm -f server
docker rmi server

docker build -t server --platform linux/amd64 .
docker run --env-file .env --name server -d -p 3000:3000 server
