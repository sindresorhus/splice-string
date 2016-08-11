'use strict';
var from = require('array-from');

module.exports = function (str, i, count, insert) {
	var arr = from(str);
	var processed = arr.slice(0, i);
	if (insert && (insert.length > 0)) {
		processed.push(insert);
	}
	processed.push(arr.slice(i + count).join(''));
	var res = processed.join('');
	return res;
};
