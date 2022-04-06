FROM ubuntu:latest

# Create app directory
WORKDIR /app

RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install curl -y

# Bundle app source
COPY src/common ./src/common/
COPY doc ./doc/

#Build dir
RUN mkdir ./bin

# Install go
RUN curl https://dl.google.com/go/go1.18.linux-amd64.tar.gz -o go1.18.linux-amd64.tar.gz
RUN rm -rf /usr/local/go && tar -C /usr/local -xzf go1.18.linux-amd64.tar.gz
ENV PATH "$PATH:/usr/local/go/bin"

# Build server
RUN go build -v -o ./bin/file-server ./src/common/go.file-server.go

EXPOSE 5000
CMD [ "./bin/file-server", ":8000", "/var/lib/dpkg/status" ]
