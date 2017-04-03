# [![math-toolbox](media/header.png)](https://github.com/terkelg/math-toolbox)

> Lightweight and modular collection of JS math functions

[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Travis](https://img.shields.io/travis/terkelg/math-toolbox.svg?maxAge=2592000)](https://travis-ci.org/terkelg/math-toolbox)
[![Coverage Status](https://coveralls.io/repos/github/terkelg/math-toolbox/badge.svg?branch=master)](https://coveralls.io/github/terkelg/math-toolbox?branch=master)
[![David](https://img.shields.io/david/dev/terkelg/math-toolbox.svg?maxAge=2592000)](https://david-dm.org/terkelg/math-toolbox?type=dev)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![npm](https://img.shields.io/npm/v/math-toolbox.svg?maxAge=2592000)](https://www.npmjs.com/package/math-toolbox)


## Documentation

### Full documentation and list of available modules: ###

**https://terkelg.github.io/math-toolbox/**

---

## Install

### Node
Install ```math-toolbox``` from NPM
```
$ npm install math-toolbox --save
```


## Usage
You can import individual modules
```js
import { clamp, map } from 'math-toolbox'
```

or the entire package
```js
import * as MT from 'math-toolbox'
```


### Browser
To use in browser, grab the ```math-toolbox.umd.min.js``` file and add it to your page, or use the CDN:
```
https://unpkg.com/math-toolbox/dist/math-toolbox.umd.min.js
```

## Plans
See GitHub Wiki:
https://github.com/terkelg/math-toolbox/wiki


## Build
First clone the project from github:
```
git clone git://github.com/terkelg/math-toolbox.git
cd math-toolbox
```

Install the project dependencies:
```
$ npm install
```

Then, the project can be build by executing the build script via NPM:
```
$ npm run build
```

Build and uglify with:
```
$ npm run build:uglify
```


## Test
[Jest](https://github.com/facebook/jest) is used for unit testing. Test with:
```
$ npm test
```

To watch for changes and test use:

```
$ npm test:watch
```

Get code coverage with
```
$ npm test:coverage
```


## Author
- [Terkel Gjervig](https://github.com/terkelg)


## License
*MIT @ Terkel Gjervig*
