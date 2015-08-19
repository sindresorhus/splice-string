'use strict';
var test = require('ava');
var fn = require('./');

test(function (t) {
	t.assert(fn('foobar', 3, 3, 'foo') === 'foofoo');
	t.assert(fn('foobar', 5, 3, '1') === 'fooba1');
	t.assert(fn('unicorn', 3, 4, 'verse') === 'universe');
	t.end();
});
