"use strict";

let buildSentence = (amount,input) =>{
    let label = $("label[for='"+input+"']");
    let html = `<div class="row">`;
    html += `<div class="col-8 text-center">`;
    html += `<p>`;
    html += `The amount budgeted for ${label.html()} this will be $${amount}`;
    html += '</p>';
    html += `</div>`;
    html += `</div>`;
    return html;
};

let buildSaveSentence = (cost) => {
    let pay = $('#pay').val();
    let payoften = $('#pay_often').val();
    if (payoften === "bi-weekly") {
        pay = pay * 2;
    }else if (payoften === "weekly"){
        pay = pay * 4;
    }
    let html = `<div class="row">`;
    html += `<div class="col-8 text-center">`;
    html += `<p>`;
    html += `The amount you will have left over in savings is $${pay - cost}`;
    html += '</p>';
    html += `</div>`;
    html += `</div>`;
    return html;
};

let addBudgetItem = (value) => {
    let valueWithoutWhiteSpace = value.replace(/\s/g, '');
    let html = '';
    html += `<div class="col-6 text-center mt-3">`;
    html += `<label for="${valueWithoutWhiteSpace}" class="${value}">${value}</label>`;
    html += `<input type="text" id="${valueWithoutWhiteSpace}" class="${value} budgetItem">`;
    html += `</div>`;
    return html;
};

let buildBudgetArray = () => {
    let budgetArray = [];
    $('.budgetItem').each(function () {
        let id = $(this).attr('id');
        budgetArray.push(id);
    });
    return budgetArray;
};

let createValueArray = () =>{
    let valueArray = [];
    $('.budgetItem').each(function () {
        let value = $(this).val();
        valueArray.push(value)
    });
    return valueArray;
};

let createGraph = () => {
    let budgetArray = buildBudgetArray();
    let valueArray = createValueArray();
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        let data = new google.visualization.DataTable();
        data.addColumn('string', 'Budget Item');
        data.addColumn('number', 'Cost');
        for (let i = 0; i < budgetArray.length; i++){
            data.addRows([
                [budgetArray[i], parseFloat(valueArray[i])]
            ])
        }
        let options = {
            'title': 'Budget Breakdown',
            'width': 400,
            'height': 300
        };

        let chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    }
};

$('#budgetBreakdown').click(function () {
    let budgetArray = buildBudgetArray();
    let cost = 0;
    budgetArray.forEach(function (element) {
        if ($(`#${element}`).val() === ""){
            return;
        }
        cost = cost + parseFloat($(`#${element}`).val());
        $('#sentences').append(buildSentence($(`#${element}`).val(), `${element}`));
    });
    $(`#sentences`).append(buildSaveSentence(cost));
    $('#budgetBreakdown').off();
    createGraph();
});

$('#addBudgetItem').click(function () {
    $('#hiddenContent').removeAttr('hidden');
});

$('#addItem').click(function () {
    $('#hiddenContent').attr('hidden', true);
    $('#thePlaceToPutNewBudgetItems').append(addBudgetItem($('#itemToAdd').val()));
    $('#itemToAdd').val('');
});
