echo "Building app..."
npm run build

echo "Deploy to server..."
scp -r build/* poltoratchi@23.88.56.11:/var/www/23.88.56.11/

echo "Done !!!"