#!/bin/bash
# iOS
export SAUCE_USERNAME=
export SAUCE_ACCESS_KEY=

curl \
  -F "payload=@../test-apps/com.****.ipa" \
  -F name=com.****.ipa \
  -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY"  \
  'https://api.eu-central-1.saucelabs.com/v1/storage/upload'


