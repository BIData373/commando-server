if ! docker info >/dev/null 2>&1; then
    echo "Error: Docker daemon is not running (or you don't have permission to take to it)" >&2
    exit 1
fi

REPO_NAME=commando-server
IMAGE_NAME=server
CONTAINER_NAME=temp_server
CONTAINER_FILE_PATH="/home/app/server.tar.gz"

rm -rf $REPO_NAME

git clone git@github.com:BIData373/$REPO_NAME.git --depth=1
cd $REPO_NAME
git checkout dev

cp ../zip.dockerfile .

docker rm -f $CONTAINER_NAME
docker rmi -f $IMAGE_NAME
docker build -f zip.dockerfile -t $IMAGE_NAME --platform linux/amd64 .
docker run -d --name $CONTAINER_NAME $IMAGE_NAME
docker cp $CONTAINER_NAME:$CONTAINER_FILE_PATH ../
docker rm -f $CONTAINER_NAME
docker rmi -f $IMAGE_NAME

rm -rf ../$REPO_NAME
