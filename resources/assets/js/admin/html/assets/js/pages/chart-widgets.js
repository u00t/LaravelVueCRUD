var getRandomData = function (steps, min, max) {
  var data = new Array(steps)
  for (var i = 0; i < steps; i++) {
    data[i] = Math.floor(Math.random() * (max - min)) + min
  }
  return data
}

var initCharts = function () {
  // Total Revenue
  new Chart(document.getElementById('trc'), {
    type: 'line',
    options: {
      legend: {
        display: false
      },
      tooltips: {
        titleFontStyle: 'normal',
        cornerRadius: 3,
        displayColors: false
      },
      scales: {
        yAxes: [{
          display: false
        }],
        xAxes: [{
          display: false
        }]
      },
      elements: {
        line: {
          tension: 0,
          borderWidth: 2,
          fill: false
        },
        point: {
          radius: 0,
          backgroundColor: '#fff',
          hitRadius: 5
        }
      }
    },
    data: {
      labels: ["01", "02", "03", "04", "05", "06", "07", "08"],
      datasets: [{
        data: [0, 10, 20, 15, 35, 25, 30, 35],
        label: 'revenue',
        borderColor: '#59D06D'
      }, {
        data: [5, 8, 15, 10, 25, 15, 20, 25],
        label: 'revenue',
        borderColor: '#3885F7'
      }]
    }
  })

  // Account for revenue
  new Chart(document.getElementById('afrc'), {
    type: 'pie',
    options: {
      legend: {
        display: false
      },
      tooltips: {
        titleFontStyle: 'normal',
        cornerRadius: 3,
        displayColors: false
      }
    },
    data: {
      labels: ['China', 'USA', 'Others'],
      datasets: [{
        data: [684, 238, 529],
        backgroundColor: [
          '#4B4AC7',
          '#3AAF4C',
          '#47CB5B'
        ]
      }]
    }
  })

  // Sales Report
  new Chart(document.getElementById('src'), {
    type: 'bar',
    options: {
      legend: {
        display: false
      },
      tooltips: {
        titleFontStyle: 'normal',
        cornerRadius: 3,
        displayColors: false
      },
      scales: {
        yAxes: [{
          display: false
        }],
        xAxes: [{
          display: false
        }]
      }
    },
    data: {
      labels: ["01", "02", "03", "04", "05", "06", "07", "08"],
      datasets: [{
        data: [5, 10, 20, 15, 35, 25, 30, 35],
        label: 'revenue',
        borderColor: '#59D06D',
        backgroundColor: 'rgba(89, 208, 109, 0.75)'
      }, {
        data: [5, 8, 15, 10, 25, 15, 20, 25],
        label: 'revenue',
        borderColor: '#3885F7',
        backgroundColor: 'rgba(56, 133, 247, 0.75)'
      }]
    }
  })

  // Progress
  new Chart(document.getElementById('pc'), {
    type: 'horizontalBar',
    options: {
      legend: {
        display: false
      },
      tooltips: {
        titleFontStyle: 'normal',
        cornerRadius: 3,
        displayColors: false
      },
      scales: {
        yAxes: [{
          barPercentage: 0.5,
          gridLines: {
            drawBorder: false,
            drawOnChartArea: false
          }
        }],
        xAxes: [{
          gridLines: {
            drawBorder: false
          },
          ticks: {
            max: 100,
            beginAtZero: true
          }
        }]
      }
    },
    data: {
      labels: ["Jack", "Tom", "Alex", "Mark", "Michael"],
      datasets: [{
        data: [90, 80, 60, 55, 45],
        label: 'progress',
        borderWidth: 0,
        backgroundColor: [
          '#47CB5B',
          '#47CB5B',
          '#EF322A',
          '#EF322A',
          '#EF322A'
        ]
      }]
    }
  })

  // Total Sales
  new Chart(document.getElementById('tsc'), {
    type: 'line',
    options: {
      legend: {
        display: false
      },
      tooltips: {
        titleFontStyle: 'normal',
        cornerRadius: 3,
        displayColors: false
      },
      scales: {
        yAxes: [{
          gridLines: {
            drawBorder: false
          },
          ticks: {
            max: 600
          }
        }],
        xAxes: [{
          gridLines: {
            drawOnChartArea: false
          }
        }]
      },
      elements: {
        line: {
          tension: 0.25,
          borderWidth: 2,
          fill: false
        },
        point: {
          radius: 0,
          backgroundColor: '#fff',
          hitRadius: 5
        }
      }
    },
    data: {
      labels: ["January", "February", "March",  "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      datasets: [{
        data: [200, 300, 375, 400, 410, 380, 350, 320, 335, 360, 350, 360],
        label: 'revenue',
        borderColor: '#59D06D'
      }, {
        data: [0, 220, 280, 350, 450, 420, 300, 320, 300, 340, 320, 340],
        label: 'revenue',
        borderColor: '#3885F7'
      }]
    }
  })

  // Orders
  new Chart(document.getElementById('oc'), {
    type: 'bar',
    options: {
      legend: {
        display: false
      },
      tooltips: {
        titleFontStyle: 'normal',
        cornerRadius: 3,
        displayColors: false
      },
      scales: {
        yAxes: [{
          gridLines: {
            drawBorder: false
          },
          ticks: {
            beginAtZero: true,
            max: 500
          }
        }],
        xAxes: [{
          gridLines: {
            drawOnChartArea: false
          }
        }]
      }
    },
    data: {
      labels: ["January", "February", "March",  "April", "May", "June", "July"],
      datasets: [{
        data: [200, 300, 375, 400, 410, 380, 350, 320],
        label: 'civil',
        borderWidth: 0,
        backgroundColor: '#59D06D'
      }, {
        data: [100, 220, 280, 350, 450, 420, 300, 320],
        label: 'international',
        borderWidth: 0,
        backgroundColor: '#3885F7'
      }]
    }
  })

  // Server
  new Chart(document.getElementById('sc'), {
    type: 'doughnut',
    options: {
      legend: {
        display: false
      }
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
  })
}

var app = new Vue({
  el: '#app',
  mounted: function () {
    initCharts()
  }
})
