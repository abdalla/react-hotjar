const hotjarLib = require('./src/react-hotjar');

const hj = (...params) => {
	if (!window.hj) {
		throw new Error('Hotjar is not initialized');
	}
	window.hj(...params);
};

module.exports = {
	hotjar: {
		initialize: function initialize({id, sv, debug, nonce}) {
			hotjarLib({id, sv, debug, nonce});
		},
		initialized: function initialized() {
			return typeof window !== 'undefined' && typeof window?.hj === 'function';
		},
		identify: function identify(userId, properties) {
			hj('identify', userId, properties);
		},
		event: function event(event) {
			hj('event', event);
		},
		stateChange: function stateChange(relativePath) {
			hj('stateChange', relativePath);
		}
	},
};
