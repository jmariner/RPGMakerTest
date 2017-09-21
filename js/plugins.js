// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Community_Basic","status":true,"description":"Plugin used to set basic parameters.","parameters":{"cacheLimit":"10","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"EnemyBook","status":true,"description":"Displays detailed statuses of enemies.","parameters":{"Unknown Data":"??????"}},
{"name":"VPS - Blood Mage","status":true,"description":"v1.0 Creates Blood Mage classes, that uses HP instead of MP to pay skill execution.","parameters":{}},
{"name":"YEP_AbsorptionBarrier","status":true,"description":"v1.07 Battlers can be surrounded by an absorption barrier\nthat would mitigate damage dealt to HP.","parameters":{"Barrier State":"0","Barrier Color 1":"13","Barrier Color 2":"5","Barrier Animation":"0","Break Animation":"0","Barrier Popup":"255, 0, 255, 160","Display 0 HP Damage":"false","Clear Per Battle":"true","Clear on Death":"true","Default Penetration Rate":"0","Default Penetration Flat":"0"}},
{"name":"YEP_BattleEngineCore","status":true,"description":"v1.45 Have more control over the flow of the battle system\nwith this plugin and alter various aspects to your liking.","parameters":{"---General---":"","Action Speed":"agi","Default System":"dtb","---Escape---":"","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.10","---Animation---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"0","Physical Animation":"52","Magical Animation":"51","Enemy Attack Animation":"39","Reflect Animation":"42","Motion Waiting":"false","---Frontview---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---Sideview---":"","Home Position X":"screenWidth - 16 - (maxSize + 2) * 32 + index * 32","Home Position Y":"screenHeight - statusHeight - maxSize * 48 + (index+1) * 48 - 32","Side Sprite Priority":"1","---Sprites---":"","Default X Anchor":"0.50","Default Y Anchor":"1.00","Step Distance":"48","Flinch Distance":"12","Show Shadows":"true","---Damage Popups---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Tick-Settings---":"","Timed States":"false","Timed Buffs":"false","Turn Time":"100","AI Self Turns":"true","---Window Settings---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"true","Current Max":"false","---Selection Help---":"","Mouse Over":"true","Select Help Window":"true","User Help Text":"User","Ally Help Text":"Ally","Allies Help Text":"Allies","Enemy Help Text":"Enemy","Enemies Help Text":"Enemies","All Help Text":"All %1","Random Help Text":"%2 Random %1","---Enemy Select---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Show Select Box":"false","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"true","---Battle Log---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"false","Show State Text":"false","Show Buff Text":"false","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"false","Show Critical Text":"false","Show Miss Text":"false","Show Evasion Text":"false","Show HP Text":"false","Show MP Text":"false","Show TP Text":"false"}},
{"name":"YEP_BuffsStatesCore","status":true,"description":"v1.14 Alter the basic mechanics behind buffs and states\nthat aren't adjustable within the RPG Maker editor.","parameters":{"---Turn Indicator---":"","Show Turns":"true","Font Size":"16","Turn Alignment":"right","Turn Buffer X":"-3","Turn Buffer Y":"-6","State Color":"0","Buff Color":"24","Debuff Color":"2","---Enemy Icons---":"","Show Enemy Icons":"true","Enemy Buff Turn":"true","Enemy State Turn":"true","Enemy State Counter":"true","---Buff Settings---":"","Default Limit":"4","Maximum Limit":"8","Buff Formula":"this._buffs[paramId] * 0.25 + 1.0","Show Buff Rate":"false","---State Settings---":"","Reapply Rules":"1","Show Enemy Turns":"true","---Counter Settings---":"","Counter Font Size":"16","Counter Alignment":"center","Counter Buffer X":"0","Counter Buffer Y":"8","Counter Color":"0"}},
{"name":"YEP_ClassChangeCore","status":true,"description":"v1.13 This plugin creates a system where your player\ncan change classes through the main menu.","parameters":{"---General---":"","Class Command":"Class","Auto Add Menu":"true","Show Command":"true","Enable Command":"true","Auto Place Command":"true","Default Icon":"78","Maintain Levels":"false","Unlocked Classes":"1 2 3 4","---Command Window---":"","Class Change Command":"Class","Show Class Change":"true","Enable Class Change":"true","Show Skill Learn":"true","Finish Command":"Finish","Text Alignment":"center","---Window Settings---":"","Current Class Color":"17","Class Level Format":"LV%1","Class Level Font Size":"20"}},
{"name":"YEP_ElementCore","status":true,"description":"v1.02 Manage the way elements work in this game from\nabsorbing elements, reflecting elements, and more!","parameters":{"Multi-Element Rulings":"2"}},
{"name":"YEP_EnemyLevels","status":true,"description":"v1.08 This plugin enables giving your enemies levels and\nparameter changes with those levels.","parameters":{"---General---":"","Show Level":"true","Level Format":"Lv%1 %2","Minimum Level":"1","Maximum Level":"9999","Maximum Cap":"9999","Preserve Rate":"true","---Level Setup---":"","Default Type":"5","Positive Fluctuation":"2","Negative Fluctuation":"2","---MaxHP Growth---":"","MaxHP Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","MaxHP Rate Growth":"0.15","MaxHP Flat Growth":"50.0","---MaxMP Growth---":"","MaxMP Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","MaxMP Rate Growth":"0.10","MaxMP Flat Growth":"10.0","---ATK Growth---":"","ATK Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","ATK Rate Growth":"0.05","ATK Flat Growth":"2.5","---DEF Growth---":"","DEF Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","DEF Rate Growth":"0.05","DEF Flat Growth":"2.5","---MAT Growth---":"","MAT Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","MAT Rate Growth":"0.05","MAT Flat Growth":"2.5","---MDF Growth---":"","MDF Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","MDF Rate Growth":"0.05","MDF Flat Growth":"2.5","---AGI Growth---":"","AGI Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","AGI Rate Growth":"0.05","AGI Flat Growth":"2.5","---LUK Growth---":"","LUK Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","LUK Rate Growth":"0.05","LUK Flat Growth":"2.5","---EXP Growth---":"","EXP Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","EXP Rate Growth":"0.15","EXP Flat Growth":"10.0","---Gold Growth---":"","Gold Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","Gold Rate Growth":"0.15","Gold Flat Growth":"10.0"}},
{"name":"YEP_EnhancedTP","status":true,"description":"v1.07 Gives you more control over how TP is handled in\nyour game in addition to letting players switch TP modes.","parameters":{"---General---":"","Command Name":"TP Mode","Show Command":"true","Enable Command":"true","Change Reset":"true","Equipped Color":"17","Default Mode":"1","Default Unlocks":"1 2 3 4","Crisis HP":"0.25","Crisis MP":"0.25","Dead TP Gain":"false","---Mode 1 Settings---":"","Mode 1 Name":"Stoic","Mode 1 Icon":"160","Mode 1 Help Line 1":"Raise TP by guarding in battle or receiving damage","Mode 1 Help Line 2":"from attacks.","Mode 1 Max TP":"100","Mode 1 Preserve":"true","Mode 1 Initial TP":"0","Mode 1 Regen TP":"100 * user.trg","Mode 1 Take HP DMG":"(50 * value / user.mhp * user.tcr).clamp(5, 20)","Mode 1 Deal HP DMG":"0","Mode 1 Heal HP DMG":"0","Mode 1 Ally HP DMG":"0","Mode 1 Take MP DMG":"0","Mode 1 Deal MP DMG":"0","Mode 1 Heal MP DMG":"0","Mode 1 Ally MP DMG":"0","Mode 1 Deal State":"0","Mode 1 Gain State":"0","Mode 1 Kill Ally":"0","Mode 1 Kill Enemy":"0","Mode 1 Win Battle":"0","Mode 1 Flee Battle":"0","Mode 1 Lose Battle":"0","Mode 1 Crisis HP":"0","Mode 1 Crisis MP":"0","Mode 1 Only Member":"0","Mode 1 Evasion":"0","---Mode 2 Settings---":"","Mode 2 Name":"Comrade","Mode 2 Icon":"84","Mode 2 Help Line 1":"Raise TP whenever allies take damage.","Mode 2 Help Line 2":"","Mode 2 Max TP":"100","Mode 2 Preserve":"true","Mode 2 Initial TP":"0","Mode 2 Regen TP":"100 * user.trg","Mode 2 Take HP DMG":"0","Mode 2 Deal HP DMG":"0","Mode 2 Heal HP DMG":"0","Mode 2 Ally HP DMG":"20 * user.tcr","Mode 2 Take MP DMG":"0","Mode 2 Deal MP DMG":"0","Mode 2 Heal MP DMG":"0","Mode 2 Ally MP DMG":"0","Mode 2 Deal State":"0","Mode 2 Gain State":"0","Mode 2 Kill Ally":"0","Mode 2 Kill Enemy":"0","Mode 2 Win Battle":"0","Mode 2 Flee Battle":"0","Mode 2 Lose Battle":"0","Mode 2 Crisis HP":"0","Mode 2 Crisis MP":"0","Mode 2 Only Member":"0","Mode 2 Evasion":"0","---Mode 3 Settings---":"","Mode 3 Name":"Warrior","Mode 3 Icon":"77","Mode 3 Help Line 1":"Raise TP by attacking and dealing HP damage.","Mode 3 Help Line 2":"","Mode 3 Max TP":"100","Mode 3 Preserve":"true","Mode 3 Initial TP":"0","Mode 3 Regen TP":"100 * user.trg","Mode 3 Take HP DMG":"0","Mode 3 Deal HP DMG":"Math.min(16, value * 100 / target.mhp) * user.tcr","Mode 3 Heal HP DMG":"0","Mode 3 Ally HP DMG":"0","Mode 3 Take MP DMG":"0","Mode 3 Deal MP DMG":"0","Mode 3 Heal MP DMG":"0","Mode 3 Ally MP DMG":"0","Mode 3 Deal State":"0","Mode 3 Gain State":"0","Mode 3 Kill Ally":"0","Mode 3 Kill Enemy":"0","Mode 3 Win Battle":"0","Mode 3 Flee Battle":"0","Mode 3 Lose Battle":"0","Mode 3 Crisis HP":"0","Mode 3 Crisis MP":"0","Mode 3 Only Member":"0","Mode 3 Evasion":"0","---Mode 4 Settings---":"","Mode 4 Name":"Healer","Mode 4 Icon":"72","Mode 4 Help Line 1":"Raise TP by healing HP.","Mode 4 Help Line 2":"","Mode 4 Max TP":"100","Mode 4 Preserve":"true","Mode 4 Initial TP":"0","Mode 4 Regen TP":"100 * user.trg","Mode 4 Take HP DMG":"0","Mode 4 Deal HP DMG":"0","Mode 4 Heal HP DMG":"Math.min(16, value * -100 / target.mhp) * user.tcr","Mode 4 Ally HP DMG":"0","Mode 4 Take MP DMG":"0","Mode 4 Deal MP DMG":"0","Mode 4 Heal MP DMG":"0","Mode 4 Ally MP DMG":"0","Mode 4 Deal State":"0","Mode 4 Gain State":"0","Mode 4 Kill Ally":"0","Mode 4 Kill Enemy":"0","Mode 4 Win Battle":"0","Mode 4 Flee Battle":"0","Mode 4 Lose Battle":"0","Mode 4 Crisis HP":"0","Mode 4 Crisis MP":"0","Mode 4 Only Member":"0","Mode 4 Evasion":"0","---Mode 5 Settings---":"","Mode 5 Name":"Breaker","Mode 5 Icon":"174","Mode 5 Help Line 1":"Raise TP whenever user deals MP damage, receives MP damage,","Mode 5 Help Line 2":"or an ally receives MP damage.","Mode 5 Max TP":"100","Mode 5 Preserve":"true","Mode 5 Initial TP":"0","Mode 5 Regen TP":"100 * user.trg","Mode 5 Take HP DMG":"0","Mode 5 Deal HP DMG":"0","Mode 5 Heal HP DMG":"0","Mode 5 Ally HP DMG":"0","Mode 5 Take MP DMG":"50 * damageRate * user.tcr","Mode 5 Deal MP DMG":"Math.min(16, value / 4) * user.tcr","Mode 5 Heal MP DMG":"0","Mode 5 Ally MP DMG":"20 * user.tcr","Mode 5 Deal State":"0","Mode 5 Gain State":"0","Mode 5 Kill Ally":"0","Mode 5 Kill Enemy":"0","Mode 5 Win Battle":"0","Mode 5 Flee Battle":"0","Mode 5 Lose Battle":"0","Mode 5 Crisis HP":"0","Mode 5 Crisis MP":"0","Mode 5 Only Member":"0","Mode 5 Evasion":"0","---Mode 6 Settings---":"","Mode 6 Name":"Booster","Mode 6 Icon":"166","Mode 6 Help Line 1":"Raise TP whenever user recovers MP for an ally.","Mode 6 Help Line 2":"","Mode 6 Max TP":"100","Mode 6 Preserve":"true","Mode 6 Initial TP":"0","Mode 6 Regen TP":"100 * user.trg","Mode 6 Take HP DMG":"0","Mode 6 Deal HP DMG":"0","Mode 6 Heal HP DMG":"0","Mode 6 Ally HP DMG":"0","Mode 6 Take MP DMG":"0","Mode 6 Deal MP DMG":"0","Mode 6 Heal MP DMG":"Math.min(16, value / -4) * user.tcr","Mode 6 Ally MP DMG":"0","Mode 6 Deal State":"0","Mode 6 Gain State":"0","Mode 6 Kill Ally":"0","Mode 6 Kill Enemy":"0","Mode 6 Win Battle":"0","Mode 6 Flee Battle":"0","Mode 6 Lose Battle":"0","Mode 6 Crisis HP":"0","Mode 6 Crisis MP":"0","Mode 6 Only Member":"0","Mode 6 Evasion":"0","---Mode 7 Settings---":"","Mode 7 Name":"Slayer","Mode 7 Icon":"76","Mode 7 Help Line 1":"Raise TP whenever an enemy is killed.","Mode 7 Help Line 2":"","Mode 7 Max TP":"100","Mode 7 Preserve":"true","Mode 7 Initial TP":"0","Mode 7 Regen TP":"100 * user.trg","Mode 7 Take HP DMG":"0","Mode 7 Deal HP DMG":"0","Mode 7 Heal HP DMG":"0","Mode 7 Ally HP DMG":"0","Mode 7 Take MP DMG":"0","Mode 7 Deal MP DMG":"0","Mode 7 Heal MP DMG":"0","Mode 7 Ally MP DMG":"0","Mode 7 Deal State":"0","Mode 7 Gain State":"0","Mode 7 Kill Ally":"0","Mode 7 Kill Enemy":"25 * user.tcr","Mode 7 Win Battle":"0","Mode 7 Flee Battle":"0","Mode 7 Lose Battle":"0","Mode 7 Crisis HP":"0","Mode 7 Crisis MP":"0","Mode 7 Only Member":"0","Mode 7 Evasion":"0","---Mode 8 Settings---":"","Mode 8 Name":"Avenger","Mode 8 Icon":"1","Mode 8 Help Line 1":"Raise TP whenever an ally is killed.","Mode 8 Help Line 2":"","Mode 8 Max TP":"100","Mode 8 Preserve":"true","Mode 8 Initial TP":"0","Mode 8 Regen TP":"100 * user.trg","Mode 8 Take HP DMG":"0","Mode 8 Deal HP DMG":"0","Mode 8 Heal HP DMG":"0","Mode 8 Ally HP DMG":"0","Mode 8 Take MP DMG":"0","Mode 8 Deal MP DMG":"0","Mode 8 Heal MP DMG":"0","Mode 8 Ally MP DMG":"0","Mode 8 Deal State":"0","Mode 8 Gain State":"0","Mode 8 Kill Ally":"50 * user.tcr","Mode 8 Kill Enemy":"0","Mode 8 Win Battle":"0","Mode 8 Flee Battle":"0","Mode 8 Lose Battle":"0","Mode 8 Crisis HP":"0","Mode 8 Crisis MP":"0","Mode 8 Only Member":"0","Mode 8 Evasion":"0","---Mode 9 Settings---":"","Mode 9 Name":"Winner","Mode 9 Icon":"73","Mode 9 Help Line 1":"Raise TP whenever your party defeats all enemies.","Mode 9 Help Line 2":"","Mode 9 Max TP":"100","Mode 9 Preserve":"true","Mode 9 Initial TP":"0","Mode 9 Regen TP":"100 * user.trg","Mode 9 Take HP DMG":"0","Mode 9 Deal HP DMG":"0","Mode 9 Heal HP DMG":"0","Mode 9 Ally HP DMG":"0","Mode 9 Take MP DMG":"0","Mode 9 Deal MP DMG":"0","Mode 9 Heal MP DMG":"0","Mode 9 Ally MP DMG":"0","Mode 9 Deal State":"0","Mode 9 Gain State":"0","Mode 9 Kill Ally":"0","Mode 9 Kill Enemy":"0","Mode 9 Win Battle":"20 * user.tcr","Mode 9 Flee Battle":"0","Mode 9 Lose Battle":"0","Mode 9 Crisis HP":"0","Mode 9 Crisis MP":"0","Mode 9 Only Member":"0","Mode 9 Evasion":"0","---Mode 10 Settings---":"","Mode 10 Name":"Coward","Mode 10 Icon":"74","Mode 10 Help Line 1":"Raise TP whenever your party escapes from battle or","Mode 10 Help Line 2":"lose a battle.","Mode 10 Max TP":"100","Mode 10 Preserve":"true","Mode 10 Initial TP":"0","Mode 10 Regen TP":"100 * user.trg","Mode 10 Take HP DMG":"0","Mode 10 Deal HP DMG":"0","Mode 10 Heal HP DMG":"0","Mode 10 Ally HP DMG":"0","Mode 10 Take MP DMG":"0","Mode 10 Deal MP DMG":"0","Mode 10 Heal MP DMG":"0","Mode 10 Ally MP DMG":"0","Mode 10 Deal State":"0","Mode 10 Gain State":"0","Mode 10 Kill Ally":"0","Mode 10 Kill Enemy":"0","Mode 10 Win Battle":"0","Mode 10 Flee Battle":"20 * user.tcr","Mode 10 Lose Battle":"20 * user.tcr","Mode 10 Crisis HP":"0","Mode 10 Crisis MP":"0","Mode 10 Only Member":"0","Mode 10 Evasion":"0","---Mode 11 Settings---":"","Mode 11 Name":"Daredevil","Mode 11 Icon":"48","Mode 11 Help Line 1":"Raise TP whenever user ends a turn with low HP.","Mode 11 Help Line 2":"","Mode 11 Max TP":"100","Mode 11 Preserve":"true","Mode 11 Initial TP":"0","Mode 11 Regen TP":"100 * user.trg","Mode 11 Take HP DMG":"0","Mode 11 Deal HP DMG":"0","Mode 11 Heal HP DMG":"0","Mode 11 Ally HP DMG":"0","Mode 11 Take MP DMG":"0","Mode 11 Deal MP DMG":"0","Mode 11 Heal MP DMG":"0","Mode 11 Ally MP DMG":"0","Mode 11 Deal State":"0","Mode 11 Gain State":"0","Mode 11 Kill Ally":"0","Mode 11 Kill Enemy":"0","Mode 11 Win Battle":"0","Mode 11 Flee Battle":"0","Mode 11 Lose Battle":"0","Mode 11 Crisis HP":"16 * user.tcr","Mode 11 Crisis MP":"0","Mode 11 Only Member":"0","Mode 11 Evasion":"0","---Mode 12 Settings---":"","Mode 12 Name":"Caster","Mode 12 Icon":"49","Mode 12 Help Line 1":"Raise TP whenever user ends a turn with low MP.","Mode 12 Help Line 2":"","Mode 12 Max TP":"100","Mode 12 Preserve":"true","Mode 12 Initial TP":"0","Mode 12 Regen TP":"100 * user.trg","Mode 12 Take HP DMG":"0","Mode 12 Deal HP DMG":"0","Mode 12 Heal HP DMG":"0","Mode 12 Ally HP DMG":"0","Mode 12 Take MP DMG":"0","Mode 12 Deal MP DMG":"0","Mode 12 Heal MP DMG":"0","Mode 12 Ally MP DMG":"0","Mode 12 Deal State":"0","Mode 12 Gain State":"0","Mode 12 Kill Ally":"0","Mode 12 Kill Enemy":"0","Mode 12 Win Battle":"0","Mode 12 Flee Battle":"0","Mode 12 Lose Battle":"0","Mode 12 Crisis HP":"0","Mode 12 Crisis MP":"16 * user.tcr","Mode 12 Only Member":"0","Mode 12 Evasion":"0","---Mode 13 Settings---":"","Mode 13 Name":"Tactician","Mode 13 Icon":"79","Mode 13 Help Line 1":"Raise TP whenever user inflicts a status effect on a foe.","Mode 13 Help Line 2":"","Mode 13 Max TP":"100","Mode 13 Preserve":"true","Mode 13 Initial TP":"0","Mode 13 Regen TP":"100 * user.trg","Mode 13 Take HP DMG":"0","Mode 13 Deal HP DMG":"0","Mode 13 Heal HP DMG":"0","Mode 13 Ally HP DMG":"0","Mode 13 Take MP DMG":"0","Mode 13 Deal MP DMG":"0","Mode 13 Heal MP DMG":"0","Mode 13 Ally MP DMG":"0","Mode 13 Deal State":"16 * user.tcr","Mode 13 Gain State":"0","Mode 13 Kill Ally":"0","Mode 13 Kill Enemy":"0","Mode 13 Win Battle":"0","Mode 13 Flee Battle":"0","Mode 13 Lose Battle":"0","Mode 13 Crisis HP":"0","Mode 13 Crisis MP":"0","Mode 13 Only Member":"0","Mode 13 Evasion":"0","---Mode 14 Settings---":"","Mode 14 Name":"Sufferer","Mode 14 Icon":"3","Mode 14 Help Line 1":"Raise TP whenever user receives a status effect from a foe.","Mode 14 Help Line 2":"","Mode 14 Max TP":"100","Mode 14 Preserve":"true","Mode 14 Initial TP":"0","Mode 14 Regen TP":"100 * user.trg","Mode 14 Take HP DMG":"0","Mode 14 Deal HP DMG":"0","Mode 14 Heal HP DMG":"0","Mode 14 Ally HP DMG":"0","Mode 14 Take MP DMG":"0","Mode 14 Deal MP DMG":"0","Mode 14 Heal MP DMG":"0","Mode 14 Ally MP DMG":"0","Mode 14 Deal State":"0","Mode 14 Gain State":"16 * user.tcr","Mode 14 Kill Ally":"0","Mode 14 Kill Enemy":"0","Mode 14 Win Battle":"0","Mode 14 Flee Battle":"0","Mode 14 Lose Battle":"0","Mode 14 Crisis HP":"0","Mode 14 Crisis MP":"0","Mode 14 Only Member":"0","Mode 14 Evasion":"0","---Mode 15 Settings---":"","Mode 15 Name":"Dancer","Mode 15 Icon":"82","Mode 15 Help Line 1":"Raise TP whenever user successfully evades an attack.","Mode 15 Help Line 2":"","Mode 15 Max TP":"100","Mode 15 Preserve":"true","Mode 15 Initial TP":"0","Mode 15 Regen TP":"100 * user.trg","Mode 15 Take HP DMG":"0","Mode 15 Deal HP DMG":"0","Mode 15 Heal HP DMG":"0","Mode 15 Ally HP DMG":"0","Mode 15 Take MP DMG":"0","Mode 15 Deal MP DMG":"0","Mode 15 Heal MP DMG":"0","Mode 15 Ally MP DMG":"0","Mode 15 Deal State":"0","Mode 15 Gain State":"0","Mode 15 Kill Ally":"0","Mode 15 Kill Enemy":"0","Mode 15 Win Battle":"0","Mode 15 Flee Battle":"0","Mode 15 Lose Battle":"0","Mode 15 Crisis HP":"0","Mode 15 Crisis MP":"0","Mode 15 Only Member":"0","Mode 15 Evasion":"16 * user.tcr","---Mode 16 Settings---":"","Mode 16 Name":"Loner","Mode 16 Icon":"13","Mode 16 Help Line 1":"Raise TP every turn end when the user is the last","Mode 16 Help Line 2":"remaining alive member.","Mode 16 Max TP":"100","Mode 16 Preserve":"true","Mode 16 Initial TP":"0","Mode 16 Regen TP":"100 * user.trg","Mode 16 Take HP DMG":"0","Mode 16 Deal HP DMG":"0","Mode 16 Heal HP DMG":"0","Mode 16 Ally HP DMG":"0","Mode 16 Take MP DMG":"0","Mode 16 Deal MP DMG":"0","Mode 16 Heal MP DMG":"0","Mode 16 Ally MP DMG":"0","Mode 16 Deal State":"0","Mode 16 Gain State":"0","Mode 16 Kill Ally":"0","Mode 16 Kill Enemy":"0","Mode 16 Win Battle":"0","Mode 16 Flee Battle":"0","Mode 16 Lose Battle":"0","Mode 16 Crisis HP":"0","Mode 16 Crisis MP":"0","Mode 16 Only Member":"16 * user.tcr","Mode 16 Evasion":"0","---Mode 17 Settings---":"","Mode 17 Name":"Undefined","Mode 17 Icon":"0","Mode 17 Help Line 1":"-","Mode 17 Help Line 2":"-","Mode 17 Max TP":"100","Mode 17 Preserve":"true","Mode 17 Initial TP":"0","Mode 17 Regen TP":"100 * user.trg","Mode 17 Take HP DMG":"0","Mode 17 Deal HP DMG":"0","Mode 17 Heal HP DMG":"0","Mode 17 Ally HP DMG":"0","Mode 17 Take MP DMG":"0","Mode 17 Deal MP DMG":"0","Mode 17 Heal MP DMG":"0","Mode 17 Ally MP DMG":"0","Mode 17 Deal State":"0","Mode 17 Gain State":"0","Mode 17 Kill Ally":"0","Mode 17 Kill Enemy":"0","Mode 17 Win Battle":"0","Mode 17 Flee Battle":"0","Mode 17 Lose Battle":"0","Mode 17 Crisis HP":"0","Mode 17 Crisis MP":"0","Mode 17 Only Member":"0","Mode 17 Evasion":"0","---Mode 18 Settings---":"","Mode 18 Name":"Undefined","Mode 18 Icon":"0","Mode 18 Help Line 1":"-","Mode 18 Help Line 2":"-","Mode 18 Max TP":"100","Mode 18 Preserve":"true","Mode 18 Initial TP":"0","Mode 18 Regen TP":"100 * user.trg","Mode 18 Take HP DMG":"0","Mode 18 Deal HP DMG":"0","Mode 18 Heal HP DMG":"0","Mode 18 Ally HP DMG":"0","Mode 18 Take MP DMG":"0","Mode 18 Deal MP DMG":"0","Mode 18 Heal MP DMG":"0","Mode 18 Ally MP DMG":"0","Mode 18 Deal State":"0","Mode 18 Gain State":"0","Mode 18 Kill Ally":"0","Mode 18 Kill Enemy":"0","Mode 18 Win Battle":"0","Mode 18 Flee Battle":"0","Mode 18 Lose Battle":"0","Mode 18 Crisis HP":"0","Mode 18 Crisis MP":"0","Mode 18 Only Member":"0","Mode 18 Evasion":"0","---Mode 19 Settings---":"","Mode 19 Name":"Undefined","Mode 19 Icon":"0","Mode 19 Help Line 1":"-","Mode 19 Help Line 2":"-","Mode 19 Max TP":"100","Mode 19 Preserve":"true","Mode 19 Initial TP":"0","Mode 19 Regen TP":"100 * user.trg","Mode 19 Take HP DMG":"0","Mode 19 Deal HP DMG":"0","Mode 19 Heal HP DMG":"0","Mode 19 Ally HP DMG":"0","Mode 19 Take MP DMG":"0","Mode 19 Deal MP DMG":"0","Mode 19 Heal MP DMG":"0","Mode 19 Ally MP DMG":"0","Mode 19 Deal State":"0","Mode 19 Gain State":"0","Mode 19 Kill Ally":"0","Mode 19 Kill Enemy":"0","Mode 19 Win Battle":"0","Mode 19 Flee Battle":"0","Mode 19 Lose Battle":"0","Mode 19 Crisis HP":"0","Mode 19 Crisis MP":"0","Mode 19 Only Member":"0","Mode 19 Evasion":"0","---Mode 20 Settings---":"","Mode 20 Name":"Undefined","Mode 20 Icon":"0","Mode 20 Help Line 1":"-","Mode 20 Help Line 2":"-","Mode 20 Max TP":"100","Mode 20 Preserve":"true","Mode 20 Initial TP":"0","Mode 20 Regen TP":"100 * user.trg","Mode 20 Take HP DMG":"0","Mode 20 Deal HP DMG":"0","Mode 20 Heal HP DMG":"0","Mode 20 Ally HP DMG":"0","Mode 20 Take MP DMG":"0","Mode 20 Deal MP DMG":"0","Mode 20 Heal MP DMG":"0","Mode 20 Ally MP DMG":"0","Mode 20 Deal State":"0","Mode 20 Gain State":"0","Mode 20 Kill Ally":"0","Mode 20 Kill Enemy":"0","Mode 20 Win Battle":"0","Mode 20 Flee Battle":"0","Mode 20 Lose Battle":"0","Mode 20 Crisis HP":"0","Mode 20 Crisis MP":"0","Mode 20 Only Member":"0","Mode 20 Evasion":"0"}},
{"name":"YEP_FloorDamage","status":true,"description":"v1.00 Allows you to modify floor damage based on terrain tags.\nYou can also change the color of the flash when damaged, too.","parameters":{"Default Damage":"10","Flash Color":"255, 0, 0, 128"}},
{"name":"YEP_HitAccuracy","status":true,"description":"v1.02 This plugin alters the nature of hit accuracy for\nRPG Maker MV by giving control to its formula.","parameters":{"---Formula---":"","Accuracy Formula":"skillHitRate * (userHitRate - targetEvadeRate)","Evade Formula":"0","---User Hit Rate---":"","User Physical Hit":"user.hit","User Magical Hit":"1.00","User Certain Hit":"1.00","---Target Evade Rate---":"","Target Physical Evade":"target.eva","Target Magical Evade":"target.mev","Target Certain Evade":"0.00"}},
{"name":"YEP_ItemCore","status":true,"description":"v1.28 Changes the way Items are handled for your game\nand the Item Scene, too.","parameters":{"---General---":"","Max Items":"0","Max Weapons":"100","Max Armors":"100","Starting ID":"3000","Random Variance":"0","Negative Variance":"false","Name Format":"%1%2%3%4","Name Spacing":"true","Boost Format":"(+%1)","---Item Scene---":"","Updated Scene Item":"true","List Equipped Items":"true","Show Icon":"true","Icon Size":"128","Font Size":"20","Command Alignment":"center","Recovery Format":"%1 Heal","Add State":"+State","Add Buff":"+Buff","Remove State":"-State","Remove Buff":"-Buff","Maximum Icons":"4","Use Command":"Use %1","Carry Format":"%1/%2","--Independent Items--":"","Midgame Note Parsing":"false"}},
{"name":"YEP_JobPoints","status":true,"description":"v1.09 This plugin by itself doesn't do much, but it enables\nactors to acquire JP (job points) used for other plugins.","parameters":{"---General---":"","JP Text":"JP","JP Icon":"188","Max JP":"0","JP Per Action":"10 + Math.randomInt(10)","JP Per Level":"100 + Math.randomInt(100)","JP Per Enemy":"50 + Math.randomInt(10)","Show Results":"true","JP Gained in Battle":"%1 gains %2%3!","Alive Actors":"true","---Menu---":"","Show In Menu":"true","Menu Format":"%1\\c[4]%2\\c[0]%3","---Victory Aftermath---":"","Enable Aftermath":"true","Aftermath Text":"JP Earned","Aftermath Format":"+%1\\c[4]%2\\c[0]%3","Aftermath JP Earned":"JP Earned in Battle"}},
{"name":"YEP_PartySystem","status":true,"description":"v1.13 Replaces the default 'Formation' command with a new\nmenu for players to easily change party formations.","parameters":{"---General---":"","Max Battle Members":"4","Show Battle Command":"true","Enable Battle Command":"true","Battle Cooldown":"1","Maximum Followers":"4","EXP Distribution":"false","---Menu---":"","Help Window":"false","Text Alignment":"center","Change Command":"Change","Remove Command":"Remove","Revert Command":"Revert","Finish Command":"Finish","---Selection---":"","Empty Text":"- Empty -","Actor Face":"true","Actor Sprite":"true","---List---":"","Remove Icon":"16","Show Sprite":"true","Sprite Y Buffer":"16","In Party Text Color":"6","---Locking---":"","Lock First Actor":"false","Locked Icon":"195","Required Icon":"205","---Detail Window---":"","Enable Detail Window":"true","List Width":"300","Actor Parameters":"Parameters","Actor Equipment":"Equipment"}},
{"name":"YEP_RowFormation","status":true,"description":"v1.15 Places party members into row formations to give\nthem distinct advantages based on row location.","parameters":{"---General---":"","Maximum Rows":"3","Command Name":"Row","Auto Add Menu":"true","Show Menu Command":"true","Enable Menu Command":"true","Show Battle Command":"true","Enable Battle Command":"true","Battle Cooldown":"1","---Defaults---":"","Default Row":"1","Enemy Row Lock":"false","---Menu Settings---":"","Use Map Sprite":"false","Front Buffer Y":"(rect.height - 48) / 2;","Side Buffer Y":"(rect.height - 64) / 2;","---Position Settings---":"","Alive Row Index":"false","Maximum Row X":"screenWidth - partySize * 32 - 16","Maximum Row Y":"screenHeight - statusHeight - 16","Minimum Row Y":"screenHeight - statusHeight - 16 - (maxSize * 64)","Center Row Y":"(maxRowY + minRowY) / 2 + 16","---Row 1 Settings---":"","Row 1 Name":"Front Row","Row 1 Help Line 1":"This is the front row.","Row 1 Help Line 2":"Place your melee allies here.","Row 1 States":"","Row 1 States 1.5.0":"[]","Row 1 Home X":"maxRowX - (maxRows - rowId) * 112 + rowIndex * 32","Row 1 Home Y":"centerY + ((rowSize / -2 + 0.5) + rowIndex) * 32","---Row 2 Settings---":"","Row 2 Name":"Middle Row","Row 2 Help Line 1":"This is the middle row.","Row 2 Help Line 2":"Place allies here who can fight from the middle.","Row 2 States":"","Row 2 States 1.5.0":"[]","Row 2 Home X":"maxRowX - (maxRows - rowId) * 112 + rowIndex * 32","Row 2 Home Y":"centerY + ((rowSize / -2 + 0.5) + rowIndex) * 32","---Row 3 Settings---":"","Row 3 Name":"Back Row","Row 3 Help Line 1":"This is the back row.","Row 3 Help Line 2":"Place allies here to take less melee damage.","Row 3 States":"","Row 3 States 1.5.0":"[]","Row 3 Home X":"maxRowX - (maxRows - rowId) * 112 + rowIndex * 32","Row 3 Home Y":"centerY + ((rowSize / -2 + 0.5) + rowIndex) * 32","---Row 4 Settings---":"","Row 4 Name":"Row 4","Row 4 Help Line 1":"Help Description","Row 4 Help Line 2":"Help Description","Row 4 States":"","Row 4 States 1.5.0":"[]","Row 4 Home X":"maxRowX - (maxRows - rowId) * 112 + rowIndex * 32","Row 4 Home Y":"centerY + ((rowSize / -2 + 0.5) + rowIndex) * 32","---Row 5 Settings---":"","Row 5 Name":"Row 5","Row 5 Help Line 1":"Help Description","Row 5 Help Line 2":"Help Description","Row 5 States":"","Row 5 States 1.5.0":"[]","Row 5 Home X":"maxRowX - (maxRows - rowId) * 112 + rowIndex * 32","Row 5 Home Y":"centerY + ((rowSize / -2 + 0.5) + rowIndex) * 32","---Row 6 Settings---":"","Row 6 Name":"Row 6","Row 6 Help Line 1":"Help Description","Row 6 Help Line 2":"Help Description","Row 6 States":"","Row 6 States 1.5.0":"[]","Row 6 Home X":"maxRowX - (maxRows - rowId) * 112 + rowIndex * 32","Row 6 Home Y":"centerY + ((rowSize / -2 + 0.5) + rowIndex) * 32","---Row 7 Settings---":"","Row 7 Name":"Row 7","Row 7 Help Line 1":"Help Description","Row 7 Help Line 2":"Help Description","Row 7 States":"","Row 7 States 1.5.0":"[]","Row 7 Home X":"maxRowX - (maxRows - rowId) * 112 + rowIndex * 32","Row 7 Home Y":"centerY + ((rowSize / -2 + 0.5) + rowIndex) * 32","---Row 8 Settings---":"","Row 8 Name":"Row 8","Row 8 Help Line 1":"Help Description","Row 8 Help Line 2":"Help Description","Row 8 States":"","Row 8 States 1.5.0":"[]","Row 8 Home X":"maxRowX - (maxRows - rowId) * 112 + rowIndex * 32","Row 8 Home Y":"centerY + ((rowSize / -2 + 0.5) + rowIndex) * 32","---Row 9 Settings---":"","Row 9 Name":"Row 9","Row 9 Help Line 1":"Help Description","Row 9 Help Line 2":"Help Description","Row 9 States":"","Row 9 States 1.5.0":"[]","Row 9 Home X":"maxRowX - (maxRows - rowId) * 112 + rowIndex * 32","Row 9 Home Y":"centerY + ((rowSize / -2 + 0.5) + rowIndex) * 32","---Row 10 Settings---":"","Row 10 Name":"Row 10","Row 10 Help Line 1":"Help Description","Row 10 Help Line 2":"Help Description","Row 10 States":"","Row 10 States 1.5.0":"[]","Row 10 Home X":"maxRowX - (maxRows - rowId) * 112 + rowIndex * 32","Row 10 Home Y":"centerY + ((rowSize / -2 + 0.5) + rowIndex) * 32","---Enemy Rows---":"","Adjust Relative":"false","Enemy Row X":"screenX - (rowId - 1) * 64","Enemy Row Y":"screenY"}},
{"name":"YEP_SkillLearnSystem","status":true,"description":"v1.14 Allows actors to learn skills from the skill menu\nthrough crafting them via items or otherwise.","parameters":{"---General---":"","Learn Command":"Learn Skills","Show Command":"true","Enable Command":"true","Integrate":"false","---Confirm Learn---":"","Confirm Window":"true","Confirm Text":"Have %1 learn %2?","Confirm Yes":"Yes","Confirm No":"No","---Skill Learn---":"","Learned Text":"Learned","Learned Size":"20","Learn Cost":"Learn Skill Cost","Cost Size":"20","Show Gold Window":"true","---Default---":"","Default Gold Cost":"0","Default JP Cost":"100"}},
{"name":"YEP_StealSnatch","status":true,"description":"v1.09 Allows your actors to be able to steal and snatch\nitems from enemies.","parameters":{"---General---":"","Bonus Formula":"(user.luk / (512 + user.luk)) / 3","---Auto Setup---":"","Gold Drop":"true","Gold Rate":"0.50","Gold Removal":"true","Drop Items":"true","Drop Rates":"0.80","Drop Removal":"true","Automatic Debuff":"true","---Battle Log---":"","Center Text":"true","Fail Text":"%1 couldn't steal from %2.","Success Text":"%1 steals %4%3 from %2!","Steal Empty":"%1 has nothing left to steal.","Gold Format":"%1 %2","Steal Wait":"60","---Snatch Window---":"","Gold Help Text":"There's %1 %2 for you to steal!","Success Font Size":"20","Decimal Places":"0","Already Stolen":"Stolen","---Sound Effects---":"","Failure Sound":"Buzzer2","Failure Volume":"80","Failure Pitch":"120","Failure Pan":"0","Empty Sound":"Evasion1","Empty Volume":"80","Empty Pitch":"120","Empty Pan":"0","Item Sound":"Item1","Item Volume":"80","Item Pitch":"120","Item Pan":"0","Weapon Sound":"Equip1","Weapon Volume":"80","Weapon Pitch":"120","Weapon Pan":"0","Armor Sound":"Equip2","Armor Volume":"80","Armor Pitch":"150","Armor Pan":"0","Gold Sound":"Shop2","Gold Volume":"80","Gold Pitch":"120","Gold Pan":"0"}},
{"name":"YEP_TargetCore","status":true,"description":"v1.04 Expand the target scope from RPG Maker's default\nlimitations for better target control.","parameters":{"---Battle Engine---":"","Everybody Text":"All Allies and Enemies","All But User Text":"All %1 But %2","Random Any Text":"%1 Random","---Multiple Of---":"","Multiple Text":"%1 with %2 as a Multiple of %3","Multiple Everybody":"Anyone","Multiple Allies":"Any Ally","Multiple Foes":"Any Foe","---Row Formation---":"","Target Row Text":"%1's Row","Front Row Text":"%1 Front Row","Back Row Text":"%1 Back Row","Specific Row Text":"Specific %1 Row","Row Enemies":"Enemy","Row Allies":"Allied"}},
{"name":"YEP_Taunt","status":true,"description":"v1.02 Adds a Taunt mechanic to battle. Battlers with a\ntaunt property become the target of enemy focus.","parameters":{}},
{"name":"YEP_X_AttachAugments","status":true,"description":"v1.09 (Requires YEP_ItemCore.js) Players can attach and\ndetach augments to independent equipment.","parameters":{"---Default---":"","Weapon Slots":"Glyph, Mark, Orb, Orb","Armor Slots":"Sphere, Orb, Orb, Orb","Enable Augments":"true","Show Augments":"true","---Command Window---":"","Augment Slot Format":"\\c[16]%1:\\c[0] %2","No Augment Text":"\\c[7]- None -","Remove Augment":"\\i[16]Detach Augment","---Info Window---":"","Show Augment Info":"true","Info Title":"Augments","Title Alignment":"center"}},
{"name":"YEP_X_CounterControl","status":true,"description":"v1.08 (Requires YEP_BattleEngineCore.js) Gives you more\ncontrol over how counters work in RPG Maker MV!","parameters":{"---General---":"","Queue Max":"20","---Default Traits---":"","Counter Skill":"1","Evade Counter":"false","Counter Name":"Counter-%1","Counter Icon":"78","Counter Total":"1","Ally Counter":"false","---Default Conditions---":"","Physical":"true","Single Target":"true","Not Counter":"false"}},
{"name":"YEP_X_ExtDoT","status":true,"description":"v1.00 (Req YEP_BattleEngineCore & YEP_BuffsStatesCore)\nCreate custom DoT formulas and effects with ease.","parameters":{"---Defaults---":"","Regen Animation":"46","DoT Animation":"59","Default Variance":"20","Default Element":"0"}},
{"name":"YEP_X_ItemUpgradeSlots","status":true,"description":"v1.08 (Requires YEP_ItemCore.js) Allows independent items to\nbe upgradeable and gain better stats.","parameters":{"Default Slots":"3","Slot Variance":"1","Upgrade Command":"Upgrade %1","Show Only":"true","Slots Available":"Slots Available","Show Slot Upgrades":"true","Slot Upgrade Format":"\\}Slot%1: %2\\{","Default Sound":"Heal2"}},
{"name":"YEP_X_Subclass","status":true,"description":"v1.11 (Requires YEP_ClassChangeCore.js) Allow your actors\nto subclass into a secondary class!","parameters":{"---Class Menu---":"","Subclass Command":"Subclass","Show Command":"false","Enable Command":"true","Name Format":"%1/%2","Subclass Color":"5","---Parameters---":"","MaxHP":"0.10","MaxMP":"0.10","ATK":"0.20","DEF":"0.20","MAT":"0.20","MDF":"0.20","AGI":"0.20","LUK":"0.20","EXP":"0.25","JP":"0.25","---Traits---":"","Skill Types":"true","Added Skills":"true","Param Rates":"false","X-Param Values":"false","S-Param Rates":"false","Element Rates":"false","Debuff Rates":"false","State Rates":"false","State Resist":"false","Attack Element":"false","Attack State":"false","Weapons":"false","Armors":"false"}},
{"name":"skill_groups","status":true,"description":"","parameters":{}}
];
