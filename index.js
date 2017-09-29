var hotjar = require('./src/react-hotjar');

function initialize(id, sv) {
	hotjar(id, sv);
}

module.exports = { initialize: initialize };
