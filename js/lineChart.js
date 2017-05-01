var PAN = [];
var PRI = [];
var PRD = [];
var Morena = [];

$.ajax({
	url: "http://localhost:3000/lineChart",
	dataType: "json",
	type : "GET",
	success : function(students) {
		var source   = $("#entry-template").html();
		var template = Handlebars.compile(source);

		for (var i = students.length - 1; i >= 0; i--) {

			if(students[i].partido == 'PAN'){
				PAN.push(students[i].aprobacion);
			}
			if(students[i].partido == 'PRI'){
				PRI.push(students[i].aprobacion);
			}
			if(students[i].partido == 'PRD'){
				PRD.push(students[i].aprobacion);
			}
			if(students[i].partido == 'Morena'){
				Morena.push(students[i].aprobacion);
			}
		}
		var ctx = document.getElementById("myChart").getContext('2d');

		var myChart = new Chart(ctx, {
			type: 'line',
			responsive:true,
			data: {
				labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Semana 5', 'Semana 6'],
				datasets: [
				{
					label: 'PRI',
					data: PRI,
					lineTension: 0,
	      //backgroundColor: "rgba(153,255,51,0.4)"
	      borderColor: "#2ecc71",
	      fill: false
	  },
	  {
	  	label: 'PRD',
	  	data: PRD,
	  	lineTension: 0,
	  	borderColor: "#ffd700",
	  	fill: false
	  }, {
	  	label: 'PAN',
	  	data: PAN,
	      //backgroundColor: "rgba(255,153,0,0.4)"
	      lineTension: 0,
	      borderColor: "#3498db",
	      fill: false
	  },{
	  	label: 'MORENA',
	  	data: Morena,
	      //backgroundColor: "rgba(255,153,0,0.4)"
	      lineTension: 0,
	      borderColor: "#e74c3c",
	      fill: false
	  }]
	}
});
	}
});



