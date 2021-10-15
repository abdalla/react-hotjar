var hotjar = require('./src/react-hotjar');

function hj(...params) {
	if (!window.hj) {
		throw new Error('Hotjar is not initialized');
	}

	window.hj(...params);
}

module.exports = {
	hotjar: {
		initialize: function initialize(id, sv) {
			hotjar(id, sv);
		},
		identify: function identify(userId, properties) {
			hj('identify', userId, properties);
		},
		event: function event(events) {
			hj('event', events);
		},
		stateChange: function stateChange(relativePath) {
			hj('stateChange', relativePath);
		}
	}
};
