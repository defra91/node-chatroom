#!/bin/bash

echo "start db"
sudo docker run --name test-db -d mongo:3.3.8 -p 27017:27017
