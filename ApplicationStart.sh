#!/bin/bash
set -e
source /home/deploy/.profile
cd /home/deploy/codedeploy/be/v1/
pm2 delete rooton-be-codedeploy
pm2 start npm --name "rooton-be-codedeploy" -- start
