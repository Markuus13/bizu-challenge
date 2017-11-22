# Bizu Challenge

> A Vue.js project that communicates with GitHub REST API

## Run Project

``` bash
# install dependencies
npm install

# start gatekeeper server (run before 'npm run dev')
npm run gatekeeper

# serve with hot reload at localhost:8080
npm run dev

# run unit tests
npm run unit
```

## Why gatekeeper is necessary?

Because of some security-related limitations, Github prevents you from implementing the OAuth Web Application Flow on a client-side only application. Without gatekeeper we'll get [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) problems.

## So, what is gatekeeper?

It's just a node server that runs in same domain as Bizu Challenge application that  is configured with CORS headers to allow cross origin access. More info on [gatekeeper repository](https://github.com/prose/gatekeeper).
