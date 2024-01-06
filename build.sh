#!/usr/bin/env bash

cd "$(git rev-parse --show-toplevel)"
git checkout -B gh-pages
(
  cd app
  npm ci
  npm run build
  cp nb.json.gz build/
)
git add -f app/build
git commit -am "Rebuild website"
git filter-branch -f --prune-empty --subdirectory-filter app/build
git push -f origin gh-pages
git checkout -