/* Joona Engbom 1805810, 24.8.22*/

//Lisätään ID
$('p:eq(1)').attr('id', 'sp');

//poistetaan div
$('#fp').remove();

//lisätään taustaväri
$('#fdiv').css({backgroundColor: 'grey', color: 'white'});

