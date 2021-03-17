//var theDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
//$("#currentDay").text(theDay);


function update() {
    $('#currentDay').text(moment().format('dddd, MMMM Do YYYY h:mm:ss'));
    
  }
  
  setInterval(update, 1000);
  
function colorTime9(){

   var currentT = new Date();
   var topOfHour =  new Date();
   topOfHour.setHours(9,0,0);
   var bottomOfHour = new Date();
   bottomOfHour.setHours(9,59,59)

   if (currentT >= topOfHour && currentT < bottomOfHour){
       return $('#9txtColorField').addClass('present');
   } else if (currentT < topOfHour && currentT < bottomOfHour){
       return $('#9txtColorField').addClass('future');
   } else {
       return $('#9txtColorField').addClass('past');
   }
};
  colorTime9()

  function colorTime10(){

    var currentT = new Date();
    var topOfHour =  new Date();
    topOfHour.setHours(10,0,0);
    var bottomOfHour = new Date();
    bottomOfHour.setHours(10,59,59)
 
    if (currentT >= topOfHour && currentT < bottomOfHour){
        return $('#10txtColorField').addClass('present');
    } else if (currentT < topOfHour && currentT < bottomOfHour){
        return $('#10txtColorField').addClass('future');
    } else {
        return $('#10txtColorField').addClass('past');
    } 
 };
 colorTime10();

 function colorTime11(){

    var currentT = new Date();
    var topOfHour =  new Date();
    topOfHour.setHours(11,0,0);
    var bottomOfHour = new Date();
    bottomOfHour.setHours(11,59,59)
 
    if (currentT >= topOfHour && currentT < bottomOfHour){
        return $('#11txtColorField').addClass('present');
    } else if (currentT < topOfHour && currentT < bottomOfHour){
        return $('#11txtColorField').addClass('future');
    } else {
        return $('#11txtColorField').addClass('past');
    }
 };
 colorTime11();

 function colorTime12(){

    var currentT = new Date();
    var topOfHour =  new Date();
    topOfHour.setHours(12,0,0);
    var bottomOfHour = new Date();
    bottomOfHour.setHours(12,59,59)
 
    if (currentT >= topOfHour && currentT < bottomOfHour){
        return $('#12txtColorField').addClass('present');
    } else if (currentT < topOfHour && currentT < bottomOfHour){
        return $('#12txtColorField').addClass('future');
    } else {
        return $('#12txtColorField').addClass('past');
    }
 };
 colorTime12();

 function colorTime1(){

    var currentT = new Date();
    var topOfHour =  new Date();
    topOfHour.setHours(13,0,0);
    var bottomOfHour = new Date();
    bottomOfHour.setHours(13,59,59)
 
    if (currentT >= topOfHour && currentT < bottomOfHour){
        return $('#1txtColorField').addClass('present');
    } else if (currentT < topOfHour && currentT < bottomOfHour){
        return $('#1txtColorField').addClass('future');
    } else {
        return $('#1txtColorField').addClass('past');
    }
 };
 colorTime1();

 function colorTime2(){

    var currentT = new Date();
    var topOfHour =  new Date();
    topOfHour.setHours(14,0,0);
    var bottomOfHour = new Date();
    bottomOfHour.setHours(14,59,59)
 
    if (currentT >= topOfHour && currentT < bottomOfHour){
        return $('#2txtColorField').addClass('present');
    } else if (currentT < topOfHour && currentT < bottomOfHour){
        return $('#2txtColorField').addClass('future');
    } else {
        return $('#2txtColorField').addClass('past');
    }
 };
 colorTime2();

 function colorTime3(){

    var currentT = new Date();
    var topOfHour =  new Date();
    topOfHour.setHours(15,0,0);
    var bottomOfHour = new Date();
    bottomOfHour.setHours(15,59,59)
 
    if (currentT >= topOfHour && currentT < bottomOfHour){
        return $('#3txtColorField').addClass('present');
    } else if (currentT < topOfHour && currentT < bottomOfHour){
        return $('#3txtColorField').addClass('future');
    } else {
        return $('#3txtColorField').addClass('past');
    }
 };
 colorTime3();

 function colorTime4(){

    var currentT = new Date();
    var topOfHour =  new Date();
    topOfHour.setHours(16,0,0);
    var bottomOfHour = new Date();
    bottomOfHour.setHours(16,59,59)
 
    if (currentT >= topOfHour && currentT < bottomOfHour){
        return $('#4txtColorField').addClass('present');
    } else if (currentT < topOfHour && currentT < bottomOfHour){
        return $('#4txtColorField').addClass('future');
    } else {
        return $('#4txtColorField').addClass('past');
    }
 };
 colorTime4();

  function colorTime5(){

    var currentT = new Date();
    var topOfHour =  new Date();
    topOfHour.setHours(17,0,0);
    var bottomOfHour = new Date();
    bottomOfHour.setHours(17,59,59);
 
    if (currentT >= topOfHour && currentT < bottomOfHour){
        return $('#5txtColorField').addClass('present');
    } else if (currentT < topOfHour && currentT < bottomOfHour){
        return $('#5txtColorField').addClass('future');
    } else {
        return $('#5txtColorField').addClass('past');
    }
 };
 colorTime5()