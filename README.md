# CheckPLS

[![npm version](https://img.shields.io/npm/v/check-pls.svg?style=flat-square)](https://www.npmjs.com/package/check-pls)
[![Build Status](https://img.shields.io/travis/blivesta/check-pls/master.svg?style=flat-square)](https://travis-ci.org/blivesta/check-pls)

For find out if the target is 'Portrait' 'Landscape' or 'Square'.

## Install

npm

```html
$ npm install check-pls
```

CDN
```html
<script src="https://unpkg.com/check-pls/check-pls.min.js"></script>
```


## Usage


```js
checkPls(element) // => string ['portrait'||'landscape'||'square']
checkPls(element, 'portrait') // => boolean
checkPls(element, 'landscape') // => boolean
checkPls(element, 'square') // => boolean

```

### Example

html
```html
<img src="image-portrait.jpg" />
<img src="image-landscape.jpg" />
<img src="image-square.jpg" />
```
use [`imagesLoaded`](http://imagesloaded.desandro.com/) `$ npm install imagesloaded`

```js
import imagesLoaded from 'imagesloaded'
import checkPls from 'check-pls'

const elements = document.querySelectorAll('img')
const el = Array.apply(null, elements)
imagesLoaded(el, () => {
  el.map((node) => {
    const str = checkPls(node)
    const bool = checkPls(node, 'landscape')
    console.log(str)
    console.log(bool)
  })
})
```

Result:

```js
// image-portrait.jpg
str => portrait
bool => false

// image-landscape.jpg
str => landscape
bool => true

// image-square.jpg
str => square
bool => false
```


## License
Released under the MIT license.
