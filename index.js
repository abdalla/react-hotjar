var hotjar = require('./src/react-hotjar');

module.exports = {
	hotjar: {
		initialize: function initialize(id, sv) {
			hotjar(id, sv);
		}
	}
};
