var addUIActions = function () {
  // Servier Widget
  var serverChart = new Chart(document.getElementById('serverChart'), {
    type: 'doughnut',
    options: {
      legend: {
        display: true
      },
      responsive: false
    },
    data: {
      labels: ["Used", "Free"],
      datasets: [{
        data: [19.56, 9.435],
        backgroundColor: [
          "#2ecc71",
          "#ecf0f1"
        ],
        hoverBackgroundColor: [
          "#27ae60",
          "#bdc3c7"
        ]
      }]
    }
  });

  // Data Chart
  
}

var app = new Vue({
  el: '#app',
  mounted: function () {
    addUIActions()
  }
})
