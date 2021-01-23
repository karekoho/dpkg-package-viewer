# Remove symlink or whatever
rm -rv ./src/common
# Copy sources   
cp -rv ../../common src   

# Build the container (Docker Hub)
# docker build -t karek/dpkg-viewer:client-vue .
# docker push karek/dpkg-viewer:client-vue

# Amazon ECR
docker build -t public.ecr.aws/d4p3j5f7/karekoho:dpkg-viewer-client-vue .
# docker push public.ecr.aws/d4p3j5f7/karekoho:dpkg-viewer-client-vue

# Remove copies
rm -rfv ./src/common
# Restore symlink
ln -s $(pwd)/../../common src/common