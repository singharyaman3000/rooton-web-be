#!/bin/bash
set -e
pm2 ls
/usr/bin/sudo /usr/bin/systemctl restart codedeploy-agent.service
