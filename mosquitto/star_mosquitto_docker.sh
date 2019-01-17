#!/bin/bash
#git@github.com:toke/docker-mosquitto.git
docker run -ti -p 1883:1883 -p 9001:9001 toke/mosquitto
