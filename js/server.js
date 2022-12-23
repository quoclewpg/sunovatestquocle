window.onload = function loadServers(){
	var xHttp = new XMLHttpRequest();
	xHttp.open('GET', 'https://quoclewpg.github.io/netlify/results.json', true);

	xHttp.onload = function(){
		if(this.status == 200)
		{
			var quiz = JSON.parse(this.responseText);
			var table = "";
			
			for(var i = 0; i < quiz.questions.length; i++)
			{
				
				table += "<tr><td>" + quiz.questions[i].translations.en.questionText + "</td><td>"
					  + quiz.questions[i].translations.en.answers.answerText
					
					+ "</td><td></tr>";
				document.getElementById("sortable").innerHTML = table;

				
				
			}
		}
	}
	xHttp.send();
}

function getByKey(key) {    
    var found = null;
    data.forEach(function (val) {
       
    });
    return found;
}