/*window.onload = function loadServers(){
	var xHttp = new XMLHttpRequest();
	xHttp.open('POST', 'https://apps.mpi.mb.ca/DriverQuiz/api/DrivingQuizzes.svc/StartQuiz', true);

	xHttp.onload = function(){
		if(this.status == 200)
		{
			var quiz = JSON.parse(this.responseText);
			var table = "";

			console.log(quiz);
			
			for(var i = 0; i < cars.length; i++)
			{
				table += "<tr><td>" + cars[i].mileage + "</td><td>"
					  + cars[i].name + "</td><td>"
					  + cars[i].model + "</td><td>"
					  + cars[i].engine + "</td><td>"
					  + cars[i].color + "</td></tr>";
				document.getElementById("sortable").innerHTML = table;		
			}
		}
	}
	xHttp.send();
}*/

function search(){
	var inputSearch, data, filterSearch, table, th, tr, td;

	inputSearch = document.getElementById("search");
	filterSearch = inputSearch.value.trim().toUpperCase();
	table = document.getElementById("table");
	tr = table.getElementsByTagName("tr");
	th = document.getElementsByTagName("th");
	data = "";

	for(var i = 0; i < tr.length; i++)
	{
		for(var j = 0; j < th.length; j++)
		{
			td = tr[i].getElementsByTagName("td")[j];
			if(td)
			{
				data += td.textContent;
				if(data.toUpperCase().indexOf(filterSearch) > -1)
				{
					tr[i].style.display = "";
				}
				else
				{
					tr[i].style.display = "none";
				}
			}
		}
		data = "";
 	}
}

window.onload = function getQuiz() {
	var urlGet = '../DriverQuiz/api/DrivingQuizzes.svc/StartQuiz';
	var inData = { "classId": 5, "classCategory": 0, "questionQty": 20 };
	var json = null;
	$.ajax({
		url: urlGet,
		type: "POST",
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		data: JSON.stringify(inData),
		async: false,
		success: function (data) {
			json = convertLangDictionaryArray(data, 'translations');
		}
	});
	return json;
}