var hotjar = require('./src/react-hotjar');

module.exports = {
	hotjar: {
		initialize: (initialize = (id, sv) => {
			hotjar(id, sv);
		})
	}
};
