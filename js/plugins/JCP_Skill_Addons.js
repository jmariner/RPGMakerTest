var JCP = JCP || {};
JCP._loaded = false;
JCP._overridden = function(){};

JCP._overridden = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
	if (!JCP._overridden.call(this)) return false;
	if (!JCP._loaded) {

		if (window.Yanfly && Yanfly.SLS) {
			this.processGroupNotetags($dataClasses, $dataSkills);
		}

		this.processEffectNotetags($dataSkills);

		JCP._loaded = true;
	}
	return true;
};

DataManager.processGroupNotetags = function(classes, skills) {
	var classGroupTag = /<learn skill group: *(\S+)>/i;
	var skillGroupTag = /<skill group: *(\S+)>/i;
	JCP.groupSkills = JCP.groupSkills || {};

	// add skill IDs to groupSkills object with the key being their group name
	skills.slice(1).forEach(function(skl) {

		skl.note.split("\n").forEach(function(line) {

			var match = line.match(skillGroupTag);
			if (match) {
				var group = match[1].trim();
				if (!JCP.groupSkills[group]) JCP.groupSkills[group] = [];
				JCP.groupSkills[group].push(skl.id);
				skl.name += " (" + group + ")";
			}
		});

	});

	// apply all skills to classes requesting the group
	classes.slice(1).forEach(function(cls) {

		cls.learnSkills = cls.learnSkills || [];

		cls.note.split("\n").forEach(function(line) {

			var match = line.match(classGroupTag);
			if (match) {
				var group = match[1].trim();
				if (!JCP.groupSkills[group]) {
					var msg = 'Skill Group does not exist: "' + group + '"';
					if (JCP.Settings.debug) JCP.warn(msg);
					else JCP.error(msg);
				}
				else
					cls.learnSkills = cls.learnSkills.concat(JCP.groupSkills[group]);
			}
		});

	});
};

DataManager.processEffectNotetags = function(skills) {
	var skillEffectTag = /<(?:skill|passive) effect: *(.+)>/i;

	skills.slice(1).forEach(function(skl) {

		skl.note.split("\n").forEach(function(line) {

			var match = line.match(skillEffectTag);
			if (match) {
				skl.effectExpressions = skl.effectExpressions || [];
				skl.effectExpressions.push(match[1].trim());
			}
		});

	});
};