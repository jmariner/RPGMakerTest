var JCP = JCP || {};

JCP.debug = function(msg) {
	console.log("[JCP Debug]", msg);
}

JCP.error = function(msg) {
	throw "[JCP Error] " + msg;
};