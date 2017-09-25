var JCP = JCP || {};
JCP._loaded = false;

JCP.DM_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
	if (!JCP.DM_isDatabaseLoaded.call(this)) return false;
	if (!JCP._loaded) {

		if (window.Yanfly && Yanfly.SLS) {
			this.processGroupNotetags($dataClasses, $dataSkills);
		}

		this.processPassiveNotetags($dataSkills);

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
				var group = match[1];
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
				var group = match[1];
				if (!JCP.groupSkills[group])
					JCP.error('Skill Group does not exist: "' + group + '"');
				else
					cls.learnSkills = cls.learnSkills.concat(JCP.groupSkills[group]);
			}
		});

	});
};

DataManager.processPassiveNotetags = function(skills) {
	var passiveTag = /<(?:passive +(?:skill|trait)s?|trait)>/;

	skills.slice(1).forEach(function(skl) {
		skl.isPassive = skl.note.split("\n").some(function(line) {
			return passiveTag.test(line);
		});
		if (skl.isPassive) skl.name += " (P)";
	});
};