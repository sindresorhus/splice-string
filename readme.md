# splice-string

> Remove or replace part of a string like `Array#splice`

It correctly handles slicing strings with emoji.

## Install

```
$ npm install splice-string
```

## Usage

```js
import spliceString from 'splice-string';

spliceString('unicorn', 3, 4, 'verse');
//=> 'universe'

spliceString('❤️🐴🐴', 1, 1, '🦄');
//=> '❤️🦄🐴'
```

## API

### spliceString(string, index, count, insert?)

#### string

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
