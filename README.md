# Smile

Redirects to Amazon Smile from normal Amazon site

# Setup

* In Chrome:

1. Go to `chrome://extensions` and enable developer mode
2. Load the `chrome` directory as an unpacked extension

* In Firefox:

1. Install [web-ext](https://github.com/mozilla/web-ext): `npm install --global web-ext`
2. Get an API key from the [add-on developer hub](https://addons.mozilla.org/en-US/developers/addon/api/key/)
3. Use the credentials from the previous step to run `web-ext build --api-key <JWT issuer/API key> --api-secret <JWT secret/API secret>` inside the `firefox` directory
4. Go to `about:addons` and load the XPI file in the `web-ext-artifacts` directory as an add-on from the settings drop down menu

# License

See LICENSE.md for the full license under which this software is provided
