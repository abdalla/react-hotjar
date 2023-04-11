import initHotjar from './src/react-hotjar';

function hj() {
	const params = Array.prototype.slice.call(arguments);
	if (!window.hj) {
		throw new Error('Hotjar is not initialized');
	}
	window.hj.apply(undefined, params);
}

export const hotjar = {
	initialize: function initialize(id, sv) {
		initHotjar(id, sv);
	},
	initialized: function initialized() {
		return typeof window !== 'undefined' && typeof window.hj === 'function';
	},
	identify: function identify(userId, properties) {
		hj('identify', userId, properties);
	},
	event: function event(event) {
		hj('event', event);
	},
	stateChange: function stateChange(relativePath) {
		hj('stateChange', relativePath);
	},
};
