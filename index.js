import toArray from 'lodash.toarray';

export default function spliceString(string, index, count, insert) {
	const array = toArray(string);
	array.splice(index, count, insert);
	return array.join('');
}
