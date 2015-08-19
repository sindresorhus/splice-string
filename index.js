'use strict';
module.exports = function (str, i, count, insert) {
	return str.slice(0, i) + (insert || '') + str.slice(i + count);
};
