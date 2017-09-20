DataManager.processGroupNotetags = function(classes, skills)
{
	var classGroupTag = /<learn skill group: *(\S+)>/i;
	var skillGroupTag = /<skill group: *(\S+)>/i;
	var groupSkills = {};
	for (var l = 1; l < skills.length; l++)
	{
		var obj = skills[l];
		var tags = obj.note.split(/[\r\n]+/);
		for (var i = 0; i < tags.length; i++) 
		{
			var line = tags[i];
			var match = line.match(skillGroupTag);
			if (match)
			{
				var group = match[1];
				if (!groupSkills[group]) groupSkills[group] = [];
				groupSkills[group].push(obj.id);
			}
		}	
	}
	for (var l = 1; l < classes.length; l++)
	{
		var obj = classes[l];
		var tags = obj.note.split(/[\r\n]+/);
		obj.learnSkills = obj.learnSkills || [];
		for (var i = 0; i< tags.length; i++)
		{
			var line= tags[i];
			var match= line.match(classGroupTag);
			if (match)
			{
				var group = match[1];
				if (!groupSkills[group]) throw "you dun goofed! that group does not exist!";
				obj.learnSkills = obj.learnSkills.concat(groupSkills[group]);
			}
		}
    }
	debugger;
}

/*
{
  var note1 = /<(?:LEARN SKILL|learn skills):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
  var note2 =
    /<(?:LEARN SKILL|learn skills):[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/i;
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.learnSkills = [];

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(note1)) {
        var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
        obj.learnSkills = obj.learnSkills.concat(array);
      } else if (line.match(note2)) {
        var range = Yanfly.Util.getRange(parseInt(RegExp.$1),
          parseInt(RegExp.$2));
        obj.learnSkills = obj.learnSkills.concat(range);
      }
    }
  }
};
*/