#!/usr/bin/env bash

# abort on errors
set -e

# build
npm run build:pwa

# navigate into the build output directory
cd www
touch .nojekyll

# publish
git init
git checkout -b main
git add -A
git commit -m 'deploy'
git push -f git@github.com:noeldemartin/ionic-router-swipe-poc.git main:gh-pages

cd -
