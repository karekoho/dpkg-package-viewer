# dpkg-package-viewer (demo)
Browse dpkg packages found **/var/lib/dpkg/status**

## Requirements
- Docker
- Node.js version 8.9 or above, if building from source

## Usage
### Clone the repository
```
git clone https://github.com/karekoho/dpkg-package-viewer.git
```
### Run the demo in two containers
Run command
```
docker-compose up -d
```
This pulls down two images from Docker Hub and starts the containers.

Client is listening on http://localhost:8080
Server is listening on http://localhost:8081

Run command
```
docker-compose down
```
to stop the containers
