var addUIActions = function () {

  var $ctx = document.getElementById('myChart');
  var myChart = new Chart($ctx, {
    type: 'line',
    data: {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [{
        label: "My First dataset",
        fill: false,
        lineTension: 0.45,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointRadius: 3,
        pointHoverRadius: 5,
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        pointHitRadius: 5,
        data: [65, 59, 80, 81, 56, 55, 40],
        spanGaps: false
      }]
    }
  });


  var $lineChart = document.getElementById('lineChart');
  var lineChart = Chart.Line($lineChart, {
    options: {
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          display: false
        }],
        xAxes: [{
          type: 'linear',
          position: 'bottom',
          display: false
        }]
      }
    },
    data: {
      datasets: [{
        fill: true,
        backgroundColor: "rgba(75,192,192,0.1)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
        lineTension: 0.45,
        pointRadius: 0,
        data: [{x:1, y:6.1}, {x:2, y:6.3}, {x:3, y:6.4}, {x:4, y:6.6}, {x:5, y:7.0}, {x:6, y:7.7}, {x:7, y:8.3}]
      }]
    }
  });

  var $linePointsChart = document.getElementById('linePointsChart');
  var linePointsChart = Chart.Line($linePointsChart, {
    options: {
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          type: 'linear',
          ticks: {
            max: 10,
            min: 0,
            stepSize: 1
          }
        }],
        xAxes: [{
          type: 'linear',
          position: 'bottom'
        }]
      }
    },
    data: {
      datasets: [{
        fill: false,
        borderColor: "#FFCE56",
        borderWidth: 2,
        lineTension: 0.45,
        pointRadius: 5,
        pointBorderColor: "#FFCE56",
        pointBackgroundColor: "#FFFFFF",
        data: [{x:1, y:5.5}, {x:2, y:5.7}, {x:3, y:6.4}, {x:4, y:7.0}, {x:5, y:7.2}, {x:6, y:7.3}, {x:7, y:7.5}]
      }]
    }
  });

  var $lineFillChart = document.getElementById('lineFillChart');
  var lineFillChart = Chart.Line($lineFillChart, {
    options: {
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          type: 'linear',
          ticks: {
            max: 2.5,
            min: 1,
            stepSize: 0.5
          }
        }],
        xAxes: [{
          type: 'linear',
          position: 'bottom'
        }]
      }
    },
    data: {
      datasets: [{
        fill: true,
        backgroundColor: "rgba(75,192,192,0.3)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        lineTension: 0.45,
        data: [{x:1, y:2}, {x:2, y:1.6}, {x:3, y:2.4}, {x:4, y:2.1}, {x:5, y:1.7}, {x:6, y:1.5}, {x:7, y:1.7}]
      }]
    }
  });

  var $barChart = document.getElementById('barChart');
  var barChart = Chart.Bar($barChart, {
    options: {
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          type: 'linear',
          ticks: {
            max: 10,
            min: 0,
            stepSize: 1
          }
        }]
      }
    },
    data: {
      labels: [1,2,3,4,5,6,7,8],
      datasets: [{
        backgroundColor: "#FFCE56",
        borderColor: "#FFCE56",
        borderWidth: 0,
        data: [2,4,5,7,6,4,5,4]
      }]
    }
  });

  var $horizontalChart = document.getElementById('horizontalBarChart');
  var horizontalChart = new Chart($horizontalChart, {
    type: 'horizontalBar',
    options: {
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          ticks: {
            min: 0
          }
        }],
        yAxes: [{
          barPercentage: 0.5
        }]
      }
    },
    data: {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [{
        backgroundColor: "#4BC0C0",
        borderColor: "#4BC0C0",
        borderWidth: 0,
        data: [65,45,75,50,60]
      }]
    }
  });

  var $twoBarChart = document.getElementById('twoBarChart');
  var twoBarChart = Chart.Bar($twoBarChart, {
    options: {
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          stacked: false
        }],
        yAxes: [{
          stacked: false,
          ticks: {
            min: 0
          }
        }]
      }
    },
    data: {
      labels: [1,2,3,4,5],
      datasets: [{
        backgroundColor: "#4BC0C0",
        borderColor: "#4BC0C0",
        borderWidth: 0,
        data: [65,45,75,50,60]
      },
      {
        backgroundColor: "#FFCE56",
        borderColor: "#FFCE56",
        borderWidth: 0,
        data: [30,20,40,25,45]
      }]
    }
  });

  var $pieChart = document.getElementById('pieChart');
  var pieChart = new Chart($pieChart, {
    type: 'pie',
    options: {
      legend: {
        display: true,
        position: 'left'
      }
    },
    data: {
      labels: ["Red", "Blue", "Yellow"],
      datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56"
        ],
        hoverBackgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56"
        ]
      }]
    }
  });

  var $doughnutChart = document.getElementById('doughnutChart');
  var doughnutChart = new Chart($doughnutChart, {
    type: 'doughnut',
    options: {
      legend: {
        display: true,
        position: 'left'
      },
      cutoutPercentage: 62,
      circumference: 5 / 3 * Math.PI,
      rotation: 2 / 3 *Math.PI
    },
    data: {
      labels: ["Red", "Blue", "Yellow"],
      datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56"
        ],
        hoverBackgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56"
        ]
      }]
    }
  });

  var $polarChart = document.getElementById('polarChart');
  var polarChart = new Chart($polarChart, {
    type: 'polarArea',
    data: {
      labels: ["Red","Green","Yellow","Grey","Blue"],
      datasets: [{
          data: [11,16,7,3,14],
          backgroundColor: [
              "#FF6384",
              "#4BC0C0",
              "#FFCE56",
              "#E7E9ED",
              "#36A2EB"
          ],
          label: 'My dataset'
      }]
    }
  });

  var $radarChart = document.getElementById('radarChart');
  var radarChart = new Chart($radarChart, {
    type: 'radar',
    options: {
      legend: {
        display: true,
        position: 'left'
      }
    },
    data: {
      labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
      datasets: [
          {
              label: "My First dataset",
              backgroundColor: "rgba(179,181,198,0.2)",
              borderColor: "rgba(179,181,198,1)",
              pointBackgroundColor: "rgba(179,181,198,1)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(179,181,198,1)",
              data: [65, 59, 90, 81, 56, 55, 40]
          },
          {
              label: "My Second dataset",
              backgroundColor: "rgba(255,99,132,0.2)",
              borderColor: "rgba(255,99,132,1)",
              pointBackgroundColor: "rgba(255,99,132,1)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(255,99,132,1)",
              data: [28, 48, 40, 19, 96, 27, 100]
          }
      ]
    }
  });

  var $multiLineChart = document.getElementById('multiLineChart');
  var multiLineChart = new Chart($multiLineChart, {
    type: 'line',
    options: {
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          ticks: {
            min: 5,
            stepSize: 0.5
          }
        }]
      }
    },
    data: {
      labels: ['January','February','Mar','April','May','June','July'],
      datasets: [{
        fill: false,
        borderColor: "#4BC0C0",
        borderWidth: 2,
        lineTension: 0.45,
        pointRadius: 0,
        data: [6.1,6.3,6.4,6.6,7.0,7.7,8.3]
      },
      {
        fill: false,
        borderColor: "#FFCE56",
        borderWidth: 2,
        lineTension: 0.45,
        pointRadius: 0,
        data: [5.5,5.7,6.4,7.0,7.2,7.3,7.5]
      }]
    }
  });

  var $mixedChart = document.getElementById('mixedChart');
  var mixedChart = new Chart($mixedChart, {
    type: 'bar',
    options: {
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          type: 'linear',
          ticks: {
            max: 10,
            min: 0,
            stepSize: 1
          }
        }]
      }
    },
    data: {
      labels: [1,2,3,4,5,6,7,8],
      datasets: [{
        type: 'line',
        fill: false,
        borderColor: "#FFCE56",
        backgroundColor: "#FFFFFF",
        borderWidth: 2,
        lineTension: 0.45,
        data: [2.2,3.8,5.5,7,5.5,4,4.5,4]
      },
      {
        type: 'bar',
        backgroundColor: "#4BC0C0",
        borderColor: "#4BC0C0",
        borderWidth: 0,
        data: [2,4,5,7,6,4,5,4]
      }]
    }
  });
}

var app = new Vue({
  el: '#app',
  mounted: function () {
    addUIActions()
  }
})
