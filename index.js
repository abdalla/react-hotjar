var hotjar = require('./src/react-hotjar');

function hj() {
	var params = Array.prototype.slice.call(arguments);
	if (!window.hj) {
		throw new Error('Hotjar is not initialized');
	}

	window.hj.apply(undefined, params);
}

module.exports = {
	hotjar: {
		initialize: function initialize(id, sv) {
			hotjar(id, sv);
		},
		initialized: function initialized() {
			return typeof window.hj === 'function';
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
	}
};
