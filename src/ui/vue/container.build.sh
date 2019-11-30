# Remove symlink or whatever
rm -rv ./src/common
# Copy sources   
cp -rv ../../common src   

# Build the container
docker build -t karek/dpkg-viewer:client-vue .

# Remove copies
rm -rfv ./src/common
# Restore symlink
ln -s $(pwd)/../../common src/common