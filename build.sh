#!/usr/bin/env bash
docker build --tag "$1" .
array=(${1//\// })
len=${#array[*]}
filename=${array[len-1]}
docker save -o "./$filename.tar" $1
docker image rm $1