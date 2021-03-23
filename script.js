var words = ['cow', 'fame', 'gain', 'grind', 'angel', 'reaction', 'happen', 'piece', 'false', 'gem', 'home', 'feminist', 'scale', 'embox', 'protection', 'worth', 'facade', 'flourish', 'front', 'onion', 'concern', 'reluctance', 'bloodshed', 'environment', 'competence', 'draw', 'despise', 'appreciate', 'folk', 'entitlement', 'breakfast', 'guerrilla', 'permanent', 'criticism', 'lamb', 'laboratory', 'buffet', 'party', 'gown', 'spider', 'contract', 'uniform', 'sound', 'electronics', 'settle', 'bishop', 'switch', 'import', 'donor', 'nature', 'entry', 'state', 'offset', 'oral', 'hip', 'key', 'consumption', 'few', 'neglect', 'cater', 'distort', 'single', 'satellite', 'belong', 'robot', 'registration', 'basic', 'audience', 'laboratory', 'sustain', 'conflict', 'ground', 'ensure', 'demonstrate', 'ally', 'deficit', 'day', 'vague', 'coffin', 'pray', 'secure', 'rebellion', 'cord', 'peanut', 'council', 'siege', 'slip', 'hospitality', 'snuggle', 'wait', 'follow', 'edge', 'mother', 'relative', 'investigation', 'stab', 'if', 'appoint', 'option', 'ferry', 'infect', 'abnormal', 'frequency', 'summit', 'telephone', 'story', 'north', 'researcher', 'promise', 'fascinate', 'reactor', 'chord', 'partnership', 'emotion', 'advertising', 'primary', 'stain', 'art', 'stomach', 'mild', 'mosque', 'graze', 'humor', 'concede', 'watch', 'display', 'condition', 'crossing', 'orientation', 'mine', 'sword', 'know', 'production', 'animal', 'pyramid', 'change', 'photograph', 'road', 'basis', 'subway', 'deadly', 'Mars', 'achievement', 'hay', 'career', 'pat', 'braid', 'smoke', 'conclusion', 'thigh', 'grave', 'percent', 'describe', 'latest', 'sugar', 'waist', 'deficit', 'straighten', 'absent', 'critical', 'research', 'cap', 'tense', 'cupboard', 'sulphur', 'stage', 'deprive', 'alive', 'drop', 'improvement', 'manufacturer', 'will', 'field', 'terminal', 'pray', 'kettle', 'slow', 'bat', 'south', 'incident', 'deposit', 'he', 'relationship', 'chord', 'incentive', 'risk', 'diagram', 'tell', 'residence', 'crutch', 'voice', 'wealth', 'am', 'respectable', 'seed', 'grain', 'grief', 'repeat', 'fall', 'rebel', 'stunning', 'drama', 'half', 'market', 'hour', 'far', 'environment', 'circle', 'crutch', 'gregarious', 'qualification', 'adopt', 'stroll', 'step', 'museum', 'fence', 'extraterrestrial', 'obese', 'credibility', 'square', 'product', 'dine', 'mathematics', 'coat', 'window', 'hear', 'steel', 'concentration', 'initiative', 'record', 'cash', 'jury', 'offensive', 'dialect', 'jewel', 'try', 'assignment', 'modest', 'application', 'practice', 'deviation', 'disagreement', 'biscuit', 'calorie', 'neck', 'approve', 'wardrobe', 'infection', 'carve', 'commemorate', 'knock', 'plane', 'paint', 'tablet', 'technology', 'visit', 'hierarchy', 'patient', 'scholar', 'nightmare', 'medieval', 'normal', 'establish', 'acid', 'satellite', 'seed', 'conflict', 'terms', 'date', 'want', 'nest', 'sensation', 'career', 'harvest', 'substitute', 'great', 'up', 'socialist', 'studio', 'X-ray', 'freshman', 'testify', 'drive', 'microphone', 'custody', 'arrest', 'sunrise', 'false', 'snatch', 'layer', 'thank', 'courtship', 'suitcase', 'dangerous', 'extraterrestrial', 'polite', 'topple', 'fair', 'stop', 'species', 'variety', 'important', 'stain', 'conception', 'simplicity', 'tension', 'gloom', 'theorist', 'cooperative', 'edge', 'senior', 'coast', 'file', 'professor', 'implication', 'rough', 'elite', 'jest', 'retiree', 'snuggle', 'cheque', 'hand', 'combination', 'arrangement', 'killer', 'whisper', 'operation', 'scrap', 'inhibition', 'affair', 'annual', 'wrestle', 'biscuit', 'garbage', 'survey', 'pity', 'exception', 'cower', 'separation', 'confession', 'count', 'command', 'applaud', 'face', 'appendix', 'flight', 'stall', 'kit', 'short', 'venture', 'speech', 'foot', 'alcohol', 'no', 'snarl', 'yearn', 'ivory', 'faint', 'career', 'blackmail', 'wonder', 'station', 'pain', 'stage', 'school', 'exaggerate', 'presidential', 'grief', 'total', 'kid', 'extract', 'trunk', 'certain', 'cut', 'mastermind', 'commemorate', 'slime', 'evoke', 'legislation', 'innocent', 'parachute', 'option', 'experience', 'advocate', 'artificial', 'rack', 'elite', 'ambition', 'bread', 'enemy', 'momentum', 'retreat', 'rubbish', 'carbon', 'teach', 'social', 'toss', 'wait', 'generate', 'due', 'circulate', 'owner', 'activate', 'acute', 'crouch', 'bleed', 'excavation', 'ex', 'deprivation', 'car', 'cultural', 'sleep', 'colleague', 'accountant', 'qualification', 'rhythm', 'ambition', 'pastel', 'temperature', 'publicity', 'restrict', 'enhance', 'record', 'demand', 'solution', 'toss', 'basket', 'experience', 'queue', 'exclude', 'customer', 'remark', 'so', 'laser', 'pity', 'volunteer', 'upset', 'king', 'concert', 'inspector', 'electronics', 'perfume', 'stuff', 'crash', 'mine', 'commemorate', 'list', 'push', 'dawn', 'inappropriate', 'norm', 'jet', 'banana', 'consolidate', 'drawing', 'banish', 'gallon', 'lock', 'pat', 'root', 'circulate', 'Venus', 'cinema', 'delivery', 'exile', 'dairy', 'approval', 'concession', 'stun', 'arrow', 'explain', 'support', 'hunter', 'bucket', 'loop', 'wilderness', 'suburb', 'worm', 'want', 'hike', 'user', 'automatic', 'ministry', 'have', 'environment', 'field', 'pasture', 'expansion', 'scramble', 'sale', 'dictate', 'aquarium', 'increase', 'ideology', 'roar', 'ditch', 'driver', 'superior', 'injection'];


restore_mode()



// stats

var score = 0;
var streak = 0;
var time_left = 100;
var highest_streak = 0;
var word_count = 0;
let started = false;


function scorify(lol) {
	word_count += 1;
	score += ((time_left + lol) * (streak + 1));
	streak += 1
	if (streak > highest_streak) {
		highest_streak = streak;
	}
	document.getElementById('streak').innerHTML = 'Streak: ' + streak;
	document.getElementById('score').innerHTML = 'Score: ' + score;
	if (streak == 10) {
		document.getElementById('alert_text').innerHTML = "Streak of 10!";
		document.getElementById('alert').style.display = 'block';
		setTimeout(remove, 2000)
	} else if (streak == 20) {
		document.getElementById('alert_text').innerHTML = "Streak of 20!!";
		document.getElementById('alert').style.display = 'block';
		setTimeout(remove, 2000)
	} else if (streak == 30) {
		document.getElementById('alert_text').innerHTML = "Streak of 30!!!";
		document.getElementById('alert').style.display = 'block';
		setTimeout(remove, 2000)
	} else if (streak == 50) {
		document.getElementById('alert_text').innerHTML = "Streak of 50!!!!";
		document.getElementById('alert').style.display = 'block';
		setTimeout(remove, 2000)
	} else if (streak == 100) {
		document.getElementById('alert_text').innerHTML = "Streak of 100!!! YOU ARE INSANE";
		document.getElementById('alert').style.display = 'block';
		setTimeout(remove, 3000)
	}
}

var timer = setInterval(function(){
	if (started == true) {
		if (time_left > 0) {
			time_left --;
			document.getElementById('time_bar').style.width = time_left + '%';
		} else {
			clearInterval(timer);
			display_stats()
		}
	}
}, 1000)

function type(all_words) {
	var display = document.getElementById('value');
	var word = random_item(all_words);
	display.innerHTML = word;
	var word_list = word.split('');
	var count = 0
	var max = word_list.length - 1
	document.addEventListener("keypress", function(event) {
		if (count != max) {
			if (event.key == word_list[count]) {
				word_list[count] = '<a class="highlight">' + word_list[count] + "</a>";
				count ++;
				// combine the list of letters to get the word
				display.innerHTML = wordify(word_list)
			} else {
				document.getElementById('streak').innerHTML = 'Streak: 0';
				streak = 0;
			}
		} else if (count == max) {
			//Restarts the function
			scorify(word_list.length)
			word = random_item(all_words);
			word_list = word.split('');
			display.innerHTML = word;
			count = 0;
			max = word_list.length - 1;
		}
	});
};


function wordify(list) {
	var z = '';
	for (var i=0; i < list.length; i++) {
		z += list[i]
	}
	return z
}
function random_item(items) {
	return items[Math.floor(Math.random()*items.length)];    
}

function remove() {
	document.getElementById('alert').style.display = 'none'
}

function display_stats() {
	saveif(score)
	var wps = word_count / 100;
	var wpm = Math.round(wps * 60);
	document.getElementById('finish').style.display = 'block';
	document.getElementById('word_count').innerHTML = word_count;
	document.getElementById('streak_count').innerHTML = highest_streak;
	document.getElementById('score_count').innerHTML = score;
	document.getElementById('highscore').innerHTML = "High Score: " + high_score();
	document.getElementById('wpm').innerHTML = wpm;
}
function type_first() {
	document.getElementById('start').style.display = 'none';
	type(words);
	started = true;
}


// ----- SAVE ----- \\

function saveif(score) {
	highest_score = +localStorage.getItem('score');
	console.log(highest_score)
	if (score > highest_score) {
		alert("New high score! Great job!");
		localStorage.setItem('score', score)
	}
}

function high_score() {
	return localStorage.getItem('score')
}

// ----- DARK/LIGHT MODE ----- \\

var light = false

function www() {
	if (light == false) {
		light = true
		console.log("Lights are on!")
		document.getElementById('light_dark').href = 'light.css';
		document.getElementById('dd').innerHTML = '🌙';
		save_mode('light.css')
	} else {
		light = false
		document.getElementById('light_dark').href = 'style.css';
		document.getElementById('dd').innerHTML = '☀️';
		console.log("Lights are off!")
		save_mode('style.css')
	}
}

function save_mode(style_item) {
	localStorage.setItem('style_sheet', style_item);
}

function restore_mode() {
	var z = localStorage.getItem('style_sheet');
	console.log(z)
	if (z != null) {
		document.getElementById('light_dark').href = z;
		if (z == 'style.css') {
			document.getElementById('dd').innerHTML = '☀️';
		} else {
			document.getElementById('dd').innerHTML = '🌙';
		}
	}
}
