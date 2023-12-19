#!/bin/bash
set -e
source /home/deploy/.profile
cp /home/deploy/codedeploy/be/.env /home/deploy/codedeploy/be/v1/
pm2 ls
node -v