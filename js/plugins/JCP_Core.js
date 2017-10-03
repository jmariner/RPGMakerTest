var JCP = JCP || {};

 /*:
 * @plugindesc Justin & Colin Plugins
 * @author Justin and Colin
 *
 * @param Debug Mode
 * @type state
 * @desc If plugin should be ran with debugging options enabled.
 * @default false
 */

var JCP._params = PluginManager.parameters("JCP_Core");
JCP.Settings.debug = JCP._params["Debug Mode"];

JCP.debug = function(msg) {
	console.log("[JCP Debug]", msg);
}

JCP.error = function(msg) {
	throw "[JCP Error] " + msg;
};

JCP.warn = function(msg) {
	console.warn("[JCP Warning]", msg);
};

JCP.paramId = function(paramName) {
	return [
		"MHP", // max hp
		"MMP", // max mp
		"ATK", // attack power
		"DEF", // defence
		"MAT", // magic attack power
		"MDF", // magic defence
		"AGI", // agility
		"LUK", // luck
	].findIndex(function(item) {
		return item.split(/[|, ]+/).indexOf(paramName.toUpperCase()) > -1;
	});
};