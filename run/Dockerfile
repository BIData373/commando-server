FROM registry.access.redhat.com/ubi9/nodejs-22

USER root

ARG APP_DIR=/home/app

WORKDIR $APP_DIR

COPY server.tar.gz .

RUN tar -xzf server.tar.gz

RUN rm -rf server.tar.gz

RUN cp -a tmp/archive/* . && rm -rf tmp/archive

RUN npm run build

EXPOSE 8080

ENTRYPOINT ["tail", "-f", "/dev/null"]