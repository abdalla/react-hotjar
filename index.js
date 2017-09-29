var hotjar = require('./src/react-hotjar');

module.exports = function hj() {
	function _initialize(id, sv) {
		hotjar(id, sv);
	}
};
