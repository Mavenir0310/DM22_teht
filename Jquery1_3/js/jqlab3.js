/* Joona Engbom 1805810, 24.8.22*/
$('#4p').html('&nbsp;');

$("#tdiv").hover(
    function(){
        $('#4p').text('About to select a link');
    },
    function(){
        $('#4p').html('&nbsp;');
    }
);