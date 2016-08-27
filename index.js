'use strict';
var toArray = require('lodash.toarray');

module.exports = function (str, i, count, insert) {
	var arr = toArray(str);
	arr.splice(i, count, insert);
	return arr.join('');
};
