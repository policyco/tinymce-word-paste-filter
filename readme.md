## TinyMCE Word Paste Filter (standalone)

### What?

This project provides a standalone version of the filter function used by TinyMCE to clean up pasted MS Word content. 

### Why?

TinyMCE has one of the best implementations of Word cleanup around; they have tackled pernicious problems like restoring list items to actual lists when these arrive as `<p>` tags with a lot of odd styles and bullet characters. However, TinyMCE is no tiny library, and does not export that capability by itself. 

This repo will remain an up-to-date fork of TinyMCE that builds only the Word Filter function (and its internal dependencies) into a standalone library much smaller (~50k) than the full TinyMCE, published on npm as `tinymce-word-paste-filter` for easy incorporation into other projects.

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

### Building from source, testing

```shell
npm install
npm run build
npm run test
```
