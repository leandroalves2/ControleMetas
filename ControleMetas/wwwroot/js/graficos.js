window.renderizarGraficoAnual = (dados) => {
    var options = {
        series: [{
            name: 'Saldo Final',
            data: dados
        }],
        chart: {
            type: 'bar',
            height: 350,
            toolbar: { show: false }
        },
        colors: ['#2DA44E'],
        plotOptions: {
            bar: { borderRadius: 4, columnWidth: '60%' }
        },
        xaxis: {
            categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        },
        yaxis: {
            labels: {
                formatter: function (val) { return "R$ " + val.toFixed(2); }
            }
        },
        dataLabels: { enabled: false }
    };

    var chart = new ApexCharts(document.querySelector("#chart-anual"), options);
    chart.render();
};