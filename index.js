var hotjar = require('./src/react-hotjar');

module.exports = {
	hotjar: {
		initialize: function initialize(id, sv) {
			hotjar(id, sv);
		},
		identify: function identify(userId, properties) {
			if (!window.hj) {
				throw new Error('Hotjar must be initialized before calling identify');
			}

			window.hj('identify', userId, properties);
		}
	}
};
