/* ========================
 * */
let changeView = function (view, variable) {
		variable = variable || 'currentView';
		this[variable] = view;	
	}

export default {changeView};