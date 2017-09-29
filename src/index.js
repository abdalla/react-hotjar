var hotjar = require('./react-hotjar');

function initialize(id, hjsv) {
	hotjar(id, hjsv);
}

module.exports = initialize;
