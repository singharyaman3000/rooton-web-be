#!/bin/bash
set -e
cp /home/deploy/codedeploy/be/.env /home/deploy/codedeploy/be/v1/
sudo chown -R deploy.deploy /home/deploy/codedeploy/be/v1/
