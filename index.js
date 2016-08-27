'use strict';
const toArray = require('lodash.toarray');

module.exports = (str, i, count, insert) => {
	const arr = toArray(str);
	arr.splice(i, count, insert);
	return arr.join('');
};
