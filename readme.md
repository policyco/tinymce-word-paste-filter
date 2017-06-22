## TinyMCE Word Paste Filter (standalone)

[![npm version](https://badge.fury.io/js/tinymce-word-paste-filter.svg)](https://badge.fury.io/js/tinymce-word-paste-filter) [![Build Status](https://travis-ci.org/jasonphillips/tinymce-word-paste-filter.svg?branch=master)](https://travis-ci.org/jasonphillips/tinymce-word-paste-filter)

### What?

This project provides a standalone version of the filter function used by TinyMCE to clean up pasted MS Word content. 

### Why?

TinyMCE has one of the best implementations of Word cleanup around; they have tackled pernicious problems like restoring list items to actual lists when these arrive as `<p>` tags with a lot of odd styles and bullet characters. However, TinyMCE is no tiny library, and does not export that capability by itself. 

This repo will remain an up-to-date fork of TinyMCE that builds only the Word Filter function (and its internal dependencies) into a standalone library much smaller ([~50k](https://cost-of-modules.herokuapp.com/?p=tinymce-word-paste-filter@0.5.1)) than the full TinyMCE ([~500k](https://cost-of-modules.herokuapp.com/?p=tinymce@4.6.4)), published on npm as `tinymce-word-paste-filter` for easy incorporation into other projects.

### How?

```js
import wordFilter from 'tinymce-word-paste-filter';

// if you have incoming pasted Word data in your program...
const awfulWordHTML = '...'; // content here

// clean it up in one step
const cleaned = wordFilter(awfulWordHTML); 
```

Please note that this is intended to be bundled into browser applications; if running in a node environment for some reason, you'll need to have browser / dom globals (document, navigator, etc) available.

See the brief test under `./standalone/test/` and its fixtures.

### Installation

The easiest way to use tinymce-word-paste-filter is to install it from npm and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

```shell
npm install tinymce-word-paste-filter --save
```

### Building from source, testing

```shell
npm install
npm run build
npm run test
```
