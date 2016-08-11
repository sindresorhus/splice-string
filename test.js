import test from 'ava';
import fn from './';

test(t => {
	t.is(fn('foobar', 3, 3, 'foo'), 'foofoo');
	t.is(fn('foobar', 5, 3, '1'), 'fooba1');
	t.is(fn('unicorn', 3, 4, 'verse'), 'universe');
	t.is(fn('example', 0, 0, 'a'), 'aexample');
	t.is(fn('exam\nple', null, null, 'a'), 'aexam\nple');
	t.is(fn('example', 2, 0, 'a'), 'exaample');
	t.is(fn('\u0024example', 3, 1, ''), '$exmple');
	t.is(fn('🐴🐴🐴', 1, 1, '🦄'), '🐴🦄🐴');
	t.is(fn('🐴🐴🐴', 999, 1, '🦄'), '🐴🐴🐴🦄');
	t.is(fn('🐴🐴🐴', 0, 999, '🦄'), '🦄');
	t.is(fn('🐴🐴🐴', 0, 999, ''), '');
});
