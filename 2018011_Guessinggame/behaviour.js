$(document).ready(function() {
    $("#block3").hide();
});

//Red
$("#steuern_rot").hover(function(){
    $(this).css("background-color", "red");
    }, function(){
    $(this).css("background-color", "grey");
});
        $("#steuern_rot").css( 'cursor', 'pointer' );

$("#steuern_rot").click(function(){ 
    $("#block1").hide();});
    

//Green
$("#steuern_gruen").hover(function(){
    $(this).css("background-color", "green");
    }, function(){
    $(this).css("background-color", "grey");
});
        $("#steuern_gruen").css( 'cursor', 'pointer' );

$("#steuern_gruen").click(function(){ 
    $("#block2").fadeOut();});

//Blue
$("#steuern_blau").hover(function(){
    $(this).css("background-color", "blue");
    }, function(){
    $(this).css("background-color", "grey");
});
        $("#steuern_blau").css( 'cursor', 'pointer' );

    $("#steuern_blau").click(function(){ 
    $("#block3").show();});

 var random = _.sample([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]);

//Guessinggame
$("#absenden").click(function()
{
    
    if($("#eingegebeneZahl").val()<random){$("#text").text("Too low");}
    else if ($("#eingegebeneZahl").val()>random){$("#text").text("Too high");}
    else if ($("#eingegebeneZahl").val()==random){$("#text").text("Got it");}
});
