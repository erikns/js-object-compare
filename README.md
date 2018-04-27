# js-object-compare - Compare and diff JavaScript Objects

[![Build Status](https://travis-ci.org/erikns/js-object-compare.svg?branch=master)](https://travis-ci.org/erikns/js-object-compare)

Small, simple library to compare to JavaScript objects. 

## Installation

Install via NPM like this: `npm install --save https://github.com/erikns/js-object-compare/tarball/v0.1.1`
To install the HEAD-version, replace version tag with `master``

## Use

The library is exposed by one single function. Simply use like this:

```js
compare({a: 3, b: 'b', c: '4'}, {a: 3, b: 'b', c: '42'})
```
Be default, it returns true or false.

If you include a third options object with `{diff: true}`, it returns an ANSI-color-coded diff that can be
printed to the console.
