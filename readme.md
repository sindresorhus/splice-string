# splice-string [![Build Status](https://travis-ci.org/sindresorhus/splice-string.svg?branch=master)](https://travis-ci.org/sindresorhus/splice-string)

> Remove or replace part of a string like `Array#splice`


## Install

```
$ npm install --save splice-string
```


## Usage

```js
const spliceString = require('splice-string');

spliceString('unicorn', 3, 4, 'verse');
//=> 'universe'

spliceString('❤️🐴🐴', 1, 1, '🦄');
//=> '❤️🦄🐴'
```


## API

### spliceString(input, index, count, [insert])

#### input

Type: `string`

#### index

Type: `number`

Index to start splicing.

#### count

Type: `number`

Number of characters to remove.

#### insert

Type: `string`

String to insert in place of the removed substring.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
