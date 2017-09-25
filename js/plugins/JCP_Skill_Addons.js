var JPC = JPC || {};
JPC._loaded = false;

JPC.DM_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
	if (!JPC.DM_isDatabaseLoaded.call(this)) return false;
	if (!JPC._loaded) {

		if (window.Yanfly && Yanfly.SLS)
			this.processGroupNotetags($dataClasses, $dataSkills);

		JPC._loaded = true;
	}
}

DataManager.processGroupNotetags = function(classes, skills) {
	var classGroupTag = /<learn skill group: *(\S+)>/i;
	var skillGroupTag = /<skill group: *(\S+)>/i;
	var groupSkills = {};

	// add skill IDs to groupSkills object with the key being their group name
	skills.forEach(function(skl) {

		var tags = skl.note.split(/[\r\n]+/);

		tags.forEach(function(line) {

			var match = line.match(skillGroupTag);
			if (match) {
				var group = match[1];
				if (!groupSkills[group]) groupSkills[group] = [];
				groupSkills[group].push(skl.id);
			}
		});

	});

	// apply all skills to classes requesting the group
	classes.forEach(function(cls) {

		var tags = cls.note.split(/[\r\n]+/);
		cls.learnSkills = cls.learnSkills || [];

		tags.forEach(function(line) {

			var match = line.match(classGroupTag);
			if (match) {
				var group = match[1];
				if (!groupSkills[group])
					JPC.error('Skill Group does not exist: "' + group + '"');
				else
					cls.learnSkills = cls.learnSkills.concat(groupSkills[group]);
			}
		});

	});
}