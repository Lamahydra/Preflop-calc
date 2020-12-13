const pairs = ["AA", "KK", "QQ", "JJ", "TT", "99", "88", "77", "66", "55", "44", "33", "22"];

const utgOpenPair =["AA", "KK", "QQ", "JJ", "TT", "99", "88", "77", "66", "55", "44", "33", "22",];
const utgOpenOffsuit = ["AKO", "AQO", "AJO", "ATO", "KQO", "KJO", "KTO", "QJO", "QTO",];
const utgOpenSuited = ["AKS", "AQS", "AJS", "ATS", "A9S", "A8S", "A7S", "A6S", "A5S", "A4S", "A3S", "A2S", "KQS", "KJS", "KTS", "K9S", "K8S", "K7S", "K6S", "K5S", "QJS", "QTS", "Q9S", "JTS", "J9S", "T9S", "T8S", "98S", "87S", "86S", "76S", "65S", "54S",];
let combineUtg = utgOpenSuited.concat(utgOpenPair.concat(utgOpenOffsuit));

const mpOpenPair =["AA", "KK", "QQ", "JJ", "TT", "99", "88", "77", "66", "55", "44", "33", "22"];
const mpOpenSuited = ["AKS", "AQS", "AJS", "ATS", "A9S", "A8S", "A7S", "A6S", "A5S", "A4S", "A3S", "A2S", "KQS", "KJS", "KTS", "K9S", "K8S", "K7S", "K6S", "K5S", "QJS", "QTS", "Q9S", "Q8S","JTS", "J9S", "J8S", "T9S", "T8S","98S", "87S", "86S","76S","65S","54S"];
const mpOpenOffsuit = ["AKO", "AQO", "AJO", "ATO","A9O", "KQO", "KJO", "KTO", "QJO", "QTO","JTO"];
let combineMP = mpOpenPair.concat(mpOpenSuited.concat(mpOpenOffsuit));

const coOpenPair =["AA", "KK", "QQ", "JJ", "TT", "99", "88", "77", "66", "55", "44", "33", "22"];
const coOpenSuited = ["AKS", "AQS", "AJS", "ATS", "A9S", "A8S", "A7S", "A6S", "A5S", "A4S", "A3S", "A2S", "KQS", "KJS", "KTS", "K9S", "K8S", "K7S", "K6S", "K5S", "K4S", "K3S", "QJS", "QTS", "Q9S", "Q8S", "Q7S", "Q6S", "Q5S", "JTS", "J9S", "J8S", "J7S", "T9S", "T8S", "T7S","98S", "97S", "87S", "86S","76S","65S","54S"];
const coOpenOffsuit = ["AKO", "AQO", "AJO", "ATO","A9O", "A8O", "A7O","A5O","KQO", "KJO", "KTO", "K9O", "QJO", "QTO","JTO", "T9O"];
let combineCO = coOpenPair.concat(coOpenSuited.concat(coOpenOffsuit));

const btnOpenPair =["AA", "KK", "QQ", "JJ", "TT", "99", "88", "77", "66", "55", "44", "33", "22"];
const btnOpenSuited = ["AKS", "AQS", "AJS", "ATS", "A9S", "A8S", "A7S", "A6S", "A5S", "A4S", "A3S", "A2S", "KQS", "KJS", "KTS", "K9S", "K8S", "K7S", "K6S", "K5S", "K4S", "K3S", "K2S", "QJS", "QTS", "Q9S", "Q8S", "Q7S", "Q6S", "Q5S", "Q4S", "Q3S", "Q2S,", "JTS", "J9S", "J8S", "J7S", "J6S", "J5S", "J4S", "T9S", "T8S", "T7S", "T6S","98S", "97S", "96S", "87S", "86S", "85S","76S","75S","65S","54S"];
const btnOpenOffsuit = ["AKO", "AQO", "AJO", "ATO","A9O", "A8O", "A7O", "A6O","A5O", "A4O", "A3O","KQO", "KJO", "KTO", "K9O", "K8O", "K7O", "QJO", "QTO", "Q9O", "Q8O","JTO", "J9O", "J8O", "T9O","T8O","98O"];
let combineBtn = btnOpenPair.concat(btnOpenSuited.concat(btnOpenOffsuit));

const sbOpenPair =["AA", "KK", "QQ", "JJ", "TT", "99", "88", "77", "66", "55", "44", "33", "22"];
const sbOpenSuited = ["AKS", "AQS", "AJS", "ATS", "A9S", "A8S", "A7S", "A6S", "A5S", "A4S", "A3S", "A2S", "KQS", "KJS", "KTS", "K9S", "K8S", "K7S", "K6S", "K5S", "K4S", "K3S", "K2S", "QJS", "QTS", "Q9S", "Q8S", "Q7S", "Q6S", "Q5S", "Q4S", "Q3S", "Q2S,", "JTS", "J9S", "J8S", "J7S", "J6S", "J5S", "J4S", "T9S", "T8S", "T7S", "T6S","98S", "97S", "96S", "87S", "86S", "85S","76S","75S", "74","65S","54S", "53"];
const sbOpenOffsuit = ["AKO", "AQO", "AJO", "ATO", "A9O", "A8O", "A7O", "A6O","A5O", "A4O","KQO", "KJO", "KTO", "K9O", "K8O", "QJO", "QTO", "Q9O","JTO", "J9O", "J8O", "T9O","T8O","98O", "87O"];
let combineSb = sbOpenPair.concat(sbOpenSuited.concat(sbOpenOffsuit));

function gtoMe(){
	let x = document.getElementById("inputBox").value.toLocaleUpperCase();
	console.log(x);

	if(isOpen(x,combineUtg)){
		document.getElementById("answer").textContent = utgOpen(x);
	}
	else{
		document.getElementById("answer").textContent = "Fold";
	}


}

function utgButton(number){

}

function hjButton(number){
	
}
function coButton(number){
	
}
function btnButton(number){
	
}
function sbButton(number){
	
}
function bbButton(number){
	
}
// FILTERS FOR HAND RANGES
function handCategory(hand){
	if(hand.charAt(2)=='S'){
		return "suited";
	}
	else if(hand.charAt(2)=='O'){
		return "offsuit";
	}
	else if(hand.charAt(0)==hand.charAt(1)){
		return "pair";
	}
	else return 'none';
}
function isOpen(hand, range){
	let s = 0;
	for(let i=0; i<range.length; i++){
		if(hand == range[i]){
			s = 1;
			return true;
			break;
		}
	}
	if(s==0){
		return false;
	}
}

// OPEN RANGES
function sbOpen(hand){
	let type = handCategory(hand);
	if(type == 'suited'){
		if(hand == 'Q2S'){
			return '81.2%';
		}
		else if(hand == 'J4S'){
			return '84%';
		}
		else if(hand == '74S'){
			return '2.8%';
		}
		else if(hand == '53S'){
			return '9.8%';
		}
		else return '100%';
	}
	else if(type =='pair'){
		return '100%';
	}
	else if(type == 'offsuit'){
		if(hand == 'A4O'){
			return '89.6%';
		}
		else if(hand == 'J8O'){
			return '14.4%';
		}
		else if(hand == 'T8O'){
			return '55.8%';
		}
		else if(hand == '98O'){
			return '63.6%';
		}
		else if(hand == '87O'){
			return '20.4%';
		}
		else return '100%';
	}
}
function btnOpen(hand){
	let type = handCategory(hand);
	if(type == 'suited'){
		if(hand == 'Q2S'){
			return '6.6%';
		}
		else if(hand == 'J4S'){
			return '25.6%';
		}
		else if(hand == '85S'){
			return '9%';
		}
		else return '100%';
	}
	else if(type =='pair'){
		return '100%';
	}
	else if(type == 'offsuit'){
		if(hand == 'A3O'){
			return '1.6%';
		}
		else if(hand == 'K8O'){
			return '70%';
		}
		else if(hand == 'Q8O'){
			return '8.2%';
		}
		else if(hand == 'J8O'){
			return '43%';
		}
		else if(hand == 'T8O'){
			return '55.8%';
		}
		else if(hand =='98O'){
			return '48.6%';
		}
		else return '100%';
	}
}
function coOpen(hand){
	let type = handCategory(hand);
	if(type == 'suited'){
		if(hand == 'K3S'){
			return '70.6%';
		}
		else if(hand == 'Q6S'){
			return '91%';
		}
		else if(hand == 'Q5S'){
			return '15.2%';
		}
		else if(hand == 'J7S'){
			return '17%';
		}
		else if(hand == 'T7S'){
			return '32.8%';
		}
		else if(hand == '87S'){
			return '88.6%';
		}
		else if(hand == '86S'){
			return '4%';
		}
		else if(hand == '76S'){
			return '53.6%';
		}
		else if(hand == '65S'){
			return '44.2%';
		}
		else if(hand == '54S'){
			return '47.6%';
		}
		else return '100%';
	}
	else if(type =='pair'){
		if(hand == '33'){
			return '26%';
		}
		else if(hand = '22'){
			return '22.6%';
		}
		else return '100%';
	}
	else if(type == 'offsuit'){
		if(hand == 'K9O'){
			return '20.2%';
		}
		else if(hand == 'T9O'){
			return '8.4%';
		}
		else if(hand == 'A8O'){
			return '67.8%';
		}
		else if(hand == 'A7O'){
			return '1%';
		}
		else if(hand == 'A5O'){
			return '50.4%';
		}
		else return '100%';
	}
}
function mpOpen(hand){
	let type = handCategory(hand);
	if(type == 'suited'){
		if(hand == 'K5S'){
			return '90%';
		}
		else if(hand == 'K6S'){
			return '99.4%';
		}
		else if(hand == 'Q8S'){
			return '57.2%';
		}
		else if(hand == 'J8S'){
			return '8.2%';
		}
		else if(hand == 'T8S'){
			return '38.2%';
		}
		else if(hand == '98S'){
			return '49.6%';
		}
		else if(hand == '87S'){
			return '39.4%';
		}
		else if(hand == '86S'){
			return '2%';
		}
		else if(hand == '76S'){
			return '27.6%';
		}
		else if(hand == '65S'){
			return '32.4%';
		}
		else if(hand == '54S'){
			return '30.2%';
		}
		else return '100%';
	}
	else if(type =='pair'){
		if(hand == '55'){
			return '70.2%';
		}
		else if(hand =='44'){
			return '21.4%';
		}
		else if(hand == '33'){
			return '11.8%';
		}
		else if(hand = '22'){
			return '12.8%';
		}
		else return '100%';
	}
	else if(type == 'offsuit'){
		if(hand == 'KTO'){
			return '97%';
		}
		else if(hand == 'QTO'){
			return '56.2%';
		}
		else if(hand == 'JTO'){
			return '17.6%';
		}
		else if(hand == 'A9O'){
			return '37.4%';
		}
		else return '100%';
	}
}
function utgOpen(hand){
	let type = handCategory(hand);
	if(type == 'suited'){
		if(hand == 'K7S'){
			return '24.5%';
		}
		else if(hand == 'K6S'){
			return '41%';
		}
		else if(hand == 'K5S'){
			return '47.6%';
		}
		else if(hand == 'J9S'){
			return '32.6%';
		}
		else if(hand == 'T9S'){
			return '32.6%';
		}
		else if(hand == 'T8S'){
			return '0.2%';
		}
		else if(hand == '98S'){
			return '11.88%';
		}
		else if(hand == '87S'){
			return '21.2%';
		}
		else if(hand == '86S'){
			return '0.02%';
		}
		else if(hand == '76S'){
			return '27%';
		}
		else if(hand == '65S'){
			return '25.8%';
		}
		else if(hand == '54S'){
			return '25.2%';
		}
		else return '100%'

	}
	else if(type == 'offsuit'){
		if(hand == 'QTO'){
			return '5.16%';
		}
		else if(hand == 'KTO'){
			return '31.4%';
		}
		else if(hand == 'QJO'){
			return '55.6%';
		}
		else return '100%';
	}
	else if(type == 'pair'){
		if(hand == '22'){
			return '5.6%';
		}
		else if(hand == '33'){
			return '6.8%';
		}
		else if(hand == '44'){
			return '12.6%';
		}
		else if(hand =='55'){
			return '23%';
		}
		else if(hand =='66'){
			return '64.6%';
		}
		else return '100%';
	}
}