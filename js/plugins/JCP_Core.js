var JPC = JPC || {};

JPC.debug = function(msg) {
	console.log("[JPC Debug]", msg);
}

JPC.error = function(msg) {
	throw "[JPC Error] " + msg;
};