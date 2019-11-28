# dpkg-package-viewer (demo)
Browse dpkg packages found **/var/lib/dpkg/status**

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


Client is listening on http://localhost:8080

Server is listening on http://localhost:8081


```
docker-compose down
```
Stops the containers.
