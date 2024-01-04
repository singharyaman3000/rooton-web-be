#!/bin/bash
set -e
source /home/deploy/.profile
/usr/bin/sudo /bin/chown -R deploy.deploy /home/deploy/codedeploy/be/v1/
cd /home/deploy/codedeploy/be/v1/
rm -rf node_modules
npm install
echo "install completed."
npm run build
echo "build completed."

