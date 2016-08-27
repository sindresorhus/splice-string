import test from 'ava';
import m from './';

test(t => {
	t.is(m('foobar', 3, 3, 'foo'), 'foofoo');
	t.is(m('foobar', 5, 3, '1'), 'fooba1');
	t.is(m('unicorn', 3, 4, 'verse'), 'universe');
	t.is(m('unicorn', 3, 4, 'verse'), 'universe');
	t.is(m('example', 0, 0, 'a'), 'aexample');
	t.is(m('exam\nple', null, null, 'a'), 'aexam\nple');
	t.is(m('example', 2, 0, 'a'), 'exaample');
	t.is(m('\u0024example', 3, 1, ''), '$exmple');
	t.is(m('🐴🐴🐴', 1, 1, '🦄'), '🐴🦄🐴');
	t.is(m('🐴🐴🐴', 999, 1, '🦄'), '🐴🐴🐴🦄');
	t.is(m('🐴🐴🐴', 0, 999, '🦄'), '🦄');
	t.is(m('🐴🐴🐴', 0, 999, ''), '');
	t.is(m('❤️🐴🐴', 1, 1, '🦄'), '❤️🦄🐴');
});
