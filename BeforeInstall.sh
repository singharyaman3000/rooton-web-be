#!/bin/bash
set -e
cp /home/deploy/codedeploy/be/.env /home/deploy/codedeploy/be/v1/
echo "Executing script as: $(whoami)"
sudo chown -R deploy.deploy /home/deploy/codedeploy/be/v1/
