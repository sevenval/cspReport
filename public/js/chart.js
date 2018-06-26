let myDoughnutChart;

let colorset = [];

let GetChartData = function () {
    $.ajax({
            url: 'http://localhost:4000/csp/distinct',
            method: 'GET',
            success: function (data) {
                drawChart(data);
            }
        }
    )
}

function drawChart(info){

    let dataset = [];
    let label = [];


    info.forEach( (data) => dataset.push(data.amount));
    info.forEach( (data) => label.push(data.item));



    function getColor(){
        return new Promise((resolve,reject)=>{
            $.getJSON("copy.json", function(json) {
                resolve(json);
            });
        })
    }

    getColor().then((json) => {
        for(let i = 0; i< dataset.length; i++){
            // color.push('rgb('+ getRandomIntInclusive(0,255)+', '+ getRandomIntInclusive(0,255)+ ', '+getRandomIntInclusive(0,255)+')');
            colorset.push('rgb('+ json[i]['rgb']['r']+', '+ json[i]['rgb']['g']+ ', '+json[i]['rgb']['b']+')');
            console.log(colorset);
        }

        let ctx = document.getElementById('myChart').getContext('2d');

        let data = {
            datasets: [{
                data: dataset,
                backgroundColor: colorset
            }],
            labels: label
        };
        if ( myDoughnutChart != null) myDoughnutChart.destroy();

        myDoughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: {}
        });


    })


}

let today = document.getElementById('today');
today.addEventListener('click', function () {
    $.ajax({
            url: 'http://localhost:4000/csp/today',
            method: 'GET',
            success: function (data) {
                drawChart(data);
            }
        }
    )
})


let month= document.getElementById('month');
month.addEventListener('click', function () {
    $.ajax({
            url: 'http://localhost:4000/csp/distinct',
            method: 'GET',
            success: function (data) {
                drawChart(data);
            }
        }
    )
})


$(document).ready(function(){
    GetChartData();
});