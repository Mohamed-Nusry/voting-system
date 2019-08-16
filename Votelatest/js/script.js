var btndc = document.getElementById('btnDC');
var btnubi = document.getElementById('btnUbi');

btndc.addEventListener('click', function(){
	vote('DC')
});

btnubi.addEventListener('click', function(){
	vote('Ubi')
});

var count1 = 0;
var count2 = 0;
var total = 0;
function vote(vote){
	switch(vote){
		case "DC":
			count1++;
			break;
		case "Ubi":
			count2++;
	}

	
	total = count1+count2;
	var progress1 = (count1*100)/total;
	var progress2 = (count2*100)/total;

	document.getElementById('prog1').style.width = progress1+"%";
	document.getElementById('pb1per').innerHTML = Math.round(progress1,2)+"%";
	document.getElementById('prog2').style.width = progress2+"%";
	document.getElementById('pb2per').innerHTML = Math.round(progress2,2)+"%";

	document.getElementById('total').innerHTML = total;
}