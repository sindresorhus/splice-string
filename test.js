import test from 'ava';
import spliceString from './index.js';

test('main', t => {
	t.is(spliceString('foobar', 3, 3, 'foo'), 'foofoo');
	t.is(spliceString('foobar', 5, 3, '1'), 'fooba1');
	t.is(spliceString('unicorn', 3, 4, 'verse'), 'universe');
	t.is(spliceString('unicorn', 3, 4, 'verse'), 'universe');
	t.is(spliceString('example', 0, 0, 'a'), 'aexample');
	t.is(spliceString('exam\nple', null, null, 'a'), 'aexam\nple');
	t.is(spliceString('example', 2, 0, 'a'), 'exaample');
	t.is(spliceString('\u0024example', 3, 1, ''), '$exmple');
	t.is(spliceString('🐴🐴🐴', 1, 1, '🦄'), '🐴🦄🐴');
	t.is(spliceString('🐴🐴🐴', 999, 1, '🦄'), '🐴🐴🐴🦄');
	t.is(spliceString('🐴🐴🐴', 0, 999, '🦄'), '🦄');
	t.is(spliceString('🐴🐴🐴', 0, 999, ''), '');
	t.is(spliceString('❤️🐴🐴', 1, 1, '🦄'), '❤️🦄🐴');
});
