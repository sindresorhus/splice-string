import test from 'ava';
import fn from './';

test(t => {
	t.is(fn('foobar', 3, 3, 'foo'), 'foofoo');
	t.is(fn('foobar', 5, 3, '1'), 'fooba1');
	t.is(fn('unicorn', 3, 4, 'verse'), 'universe');
});
