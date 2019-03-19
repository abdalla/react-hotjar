var hotjar = require('./src/react-hotjar');

module.exports = {
	hotjar: {
		initialize: (initialize = function(id, sv){
			hotjar(id, sv);
		})
	}
};
