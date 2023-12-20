#!/bin/bash
set -e
source /home/deploy/.profile
pm2 delete rooton-be-codedeploy
pm2 start npm --name "rooton-be-codedeploy" -- start