"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div



}

$('#get-fortune-button').on('click', () => {
  $.get('/fortune', (res) => {
    $('#fortune-text').html(res);
    // console.log(res);
  })
});

// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};
    $.get(url, formData, (res) => {
      $("#weather-info").html(res.forecast);
    })

    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    const melonOrder = {
      'qty':Number($("qty-field").val()),
      'type':$("melon-type-field").val()
    }

    $.post('/order-melons.json', melonOrder, (res) => {
        if (res.code === 'ERROR'){
          $('#order-status').addClass('order-error');}

     $('#order-status').html(res.msg);


        })

    }

    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)


$("#order-form").on('submit', orderMelons);


