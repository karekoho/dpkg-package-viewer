# Debian package browser (demo)
Browse Debian packages and dependencies listed in **/var/lib/dpkg/status**

## Requirements
- Docker

## Usage
### Clone the repository
```
git clone https://github.com/karekoho/dpkg-package-viewer.git
cd dpkg-package-viewer
```
### Run the demo in two containers
```
docker-compose up -d
```
Pulls down two images from Docker Hub and starts the containers.


Vue.js client is listening on http://localhost:8080

Angular client is listening on http://localhost:8081

Server is listening on http://localhost:5000


```
docker-compose down
```
Stops the containers.
