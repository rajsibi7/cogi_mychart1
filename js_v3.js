var axisY = ['0','10', '20', '30', '40', '50'];
var yfullHeight;
var yAx_ht_perDivi;
var axisY_count = 1;
var value_bar1 = 50;
var value_bar2 = 50;
var reduceH = 23;

(function(){
    yfullHeight = $('.chart_body').height();
    axisY_count = axisY.length - 1
    oninit();
})();

function oninit(){
    setYAxis();
    calcChartHeight();
}

function setYAxis(){
    yAx_ht_perDivi =  yfullHeight/axisY_count;
    $('.chart_body .y_axis li').not(':last').height(yAx_ht_perDivi);
   
}

function calcChartHeight(){
    let h_b1 = (axisY_count*value_bar1/100)*yAx_ht_perDivi;
    let h_b2 = (axisY_count*value_bar2/100)*yAx_ht_perDivi;
    //  $('.chart_body .x_axis .bar_1 .rectangle').height(h_b1)
    //  $('.chart_body .x_axis .bar_2 .rectangle').height(h_b2)
    //  $('.chart_body .x_axis .bar_1 .rectangle .leftTilt, .chart_body .x_axis .bar_1 .rectangle .rightTilt').height(value_bar1+'%')
    //  $('.chart_body .x_axis .bar_2 .rectangle .leftTilt, .chart_body .x_axis .bar_2 .rectangle .rightTilt').height(value_bar2+'%')

      $('.n_bar_1').height(h_b1-reduceH)
     $('.n_bar_2').height(h_b2-reduceH)
}

function refreshChart(){
    value_bar1 = $('#ival').val() || 0;
    calcChartHeight();
}