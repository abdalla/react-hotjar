var hotjar = require('./src/react-hotjar');

module.exports = {
	hotjar: function _initialize(id, sv) {
		hotjar(id, sv);
	}
};
