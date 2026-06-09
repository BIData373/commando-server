IMAGE_NAME=server
CONTAINER_NAME=temp_server

docker rm -f $CONTAINER_NAME
docker rmi -f $IMAGE_NAME

docker build -t $IMAGE_NAME .
docker run --name $CONTAINER_NAME --env-file .env $IMAGE_NAME