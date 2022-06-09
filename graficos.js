
/////// GRAFICO DE RENDIMENTO GERAL DA CARTEIRA //////
var options = {
    chart: {
        type: 'area',
        height: '300px'
    },
    
    series: [{
        name: 'CDI',
        data: [30, 40, 35, 50, 49, 60, 60, 91, 125]
    }, {
        name: 'Minha Carteira',
        data: [33, 45, 20, 45, 49, 70, 88, 99, 100]
    }],
    dataLabels: {
        enabled: false
      },
    xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    },
    legend: {
        position: "top",
        verticalAlign: "top",
        containerMargin: {
            left: 35,
            right: 60
        }
    }
}
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();




/////// GRAFICO DE PROPORÇÃO DE TIPOS DE ATIVOS //////
var options = {
    chart: {
        height: '100%',
        width: '100%',
        type: 'donut'
    },

    series: [44, 55, 13, 33],
    labels: ['Apple', 'Mango', 'Orange', 'Watermelon'],
    legend: {
        position: "bottom",
        verticalAlign: "bottom",
        containerMargin: {
            left: 35,
            right: 60
        }
    }
}
var chart = new ApexCharts(document.querySelector("#chart_proporcao"), options);
chart.render();



/////// GRAFICO DE TIPO DE LUCRO //////
var options = {
    chart: {
        type: 'bar',
        height: '100%',
        stacked: true,

    },
    colors:['#F44336', '#9C27B0'],

    series: [{
        name: 'CDI',
        data: [30, 40, 35, 50, 49, 60, 60, 91, 125]
    }, {
        name: 'Minha Carteira',
        data: [33, 45, 20, 45, 49, 70, 88, 99, 100]
    }],
    dataLabels: {
        enabled: false
      },
    xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    },
    legend: {
        position: "top",
        verticalAlign: "top",
        containerMargin: {
            left: 35,
            right: 60
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '20%',
            barHeight: '70%',
        }
    }
}
var chart = new ApexCharts(document.querySelector("#chart_tipo_rendimento"), options);
chart.render();









