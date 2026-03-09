docker rm -f server
docker rmi server

docker build -t server .
docker run --env-file .env --name server -d -p 3000:3000 server
