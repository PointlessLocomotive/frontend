var PAN;
var PRI;
var PRD;
var Morena;

$.ajax({
  url: "http://localhost:3000/tweet",
  dataType: "json",
  type : "GET",
  success : function(students) {
    var source   = $("#entry-template").html();
    var template = Handlebars.compile(source);

    for (var i = students.length - 1; i >= 0; i--) {

      //console.log(students[i].partido);

      if(students[i].partido == 'PAN'){
        PAN = students[i].aprobacion;
      }
      if(students[i].partido == 'PRI'){
        PRI = students[i].aprobacion;
      }
      if(students[i].partido == 'PRD'){
        PRD = students[i].aprobacion;
      }
      if(students[i].partido == 'Morena'){
        Morena = students[i].aprobacion;
      }
    }
    var ctx = document.getElementById("myChart2").getContext('2d');

    var myChart = new Chart(ctx, {
     type: 'pie',
     data: {
      labels: ["PRI", "PAN", "MORENA", "PRD"],
      datasets: [{
        backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#e74c3c",
        "#f1c40f"
        ],
        data: [PRI, PAN, Morena,PRD]
      }]
    }
  });

  }
});
