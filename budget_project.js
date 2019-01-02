"use strict";

let buildSentence = (amount,input) =>{
    let pay = createPayValue();
    let label = $("label[for='"+input+"']");
    let html = `<div class="row justify-content-center">`;
    html += `<div class="col-8 text-center">`;
    html += `<p>`;
    html += `The amount budgeted for ${label.html()} this will be $${amount}, accounting for ${(amount/pay) * 100}% of your monthly income`;
    html += '</p>';
    html += `</div>`;
    html += `</div>`;
    return html;
};

let buildSaveSentence = (cost) => {
    let html = `<div class="row justify-content-center">`;
    html += `<div class="col-8 text-center">`;
    html += `<p>`;
    html += `The amount you will have left over in savings is $${cost}`;
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

let addPayItem = (value) => {
    let valueWithoutWhiteSpace = value.replace(/\s/g, '');
    let html = '';
    html += `<div class="row">`;
    html += `<div class="col-6 text-center border-right border-black">`;
    html += `<label for="pay${valueWithoutWhiteSpace}">How often do you get paid?</label><br>`;
    html += `<select id="pay${valueWithoutWhiteSpace}">`;
    html += '<option value="weekly">Weekly</option>';
    html += '<option value="bi-weekly">Bi-Weekly</option>';
    html += '<option value="monthly">Monthly</option>';
    html+= ` </select>`;
    html += `</div>`;
    html += `<div class="col-6 text-center">`;
    html += `<label for="${valueWithoutWhiteSpace}">${value}</label><br>`;
    html += `<input type="text" id="${valueWithoutWhiteSpace}" class="payItem">`;
    html += `</div>`;
    html += `</div>`;
    return html;
};

let buildPayValue = () => {
    let pay = [];
    $('.payItem').each(function () {
        let id = $(this).attr('id');
        let val = $(this).val();
        console.log($(`#${"pay" + id}`));
        if ($(`#${"pay" + id}`).val() === "weekly"){
            pay.push(parseFloat(val) * 4);
        }else if ($(`#${"pay" + id}`).val() === "bi-weekly"){
            pay.push(parseFloat(val) * 2);
        }else {
            pay.push(parseFloat(val));
        }
    });
    return pay;
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

let createPayValue = () => {
    let payArray = buildPayValue();
    let pay = 0;
    payArray.forEach(function (element) {
        pay = pay + parseFloat(element);
    });
    return pay;
};

let createCostValue = () => {
    let cost = 0;
    let valueArray = createValueArray();
    valueArray.forEach(function (element) {
        cost = cost + parseFloat(element);
    });
    return cost;
};

let createGraph = () => {
    let valueArray = createValueArray();
    let budgetArray = buildBudgetArray();
    let pay = createPayValue();
    let cost = createCostValue();
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
        pay = pay - cost;
        if (pay > 0){
            data.addRows([
                ['saving', pay]
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
    let cost = createCostValue();
    let pay = createPayValue();
    budgetArray.forEach(function (element) {
        if ($(`#${element}`).val() === ""){
            return;
        }
        $('#sentences').append(buildSentence($(`#${element}`).val(), `${element}`));
    });
    $(`#sentences`).append(buildSaveSentence((pay - cost)));
    $('#budgetBreakdown').off();
    createGraph();
});

$('#payAddItem').click(function () {
    $('#hiddenContentPay').attr('hidden', true);
    $('#thePlaceToAddPayItems').append(addPayItem($('#payItemToAdd').val()));
    $('#payItemToAdd').val('');
});

$('#addBudgetItem').click(function () {
    $('#hiddenContent').removeAttr('hidden');
});

$('#addItem').click(function () {
    $('#hiddenContent').attr('hidden', true);
    $('#thePlaceToPutNewBudgetItems').append(addBudgetItem($('#itemToAdd').val()));
    $('#itemToAdd').val('');
});

$('#addPayItem').click(function () {
    $('#hiddenContentPay').removeAttr('hidden');
});
