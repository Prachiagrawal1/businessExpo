$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null) {
       return null;
    }
    return decodeURI(results[1]) || 0;
};

var current_country = $.urlParam('country');
console.log(current_country);
// if(current_tag == 'all'){
//     $('#search').val('all'); // Select the option with a value of '1'
//     $('#search').trigger('change');   
// }
// $("#search option[value =' ']").s
$('#country').val(current_country); // Select the option with a value of '1'
$('#country').trigger('change');   

$('#all').click(function(){
    $('#country').val('all');
    $('#form1').submit( );
});
$('#india').click(function(){
    $('#country').val('india');
    $('#form1').submit( );
});
$('#denmark').click(function(){
    $('#country').val('denmark');
    $('#form1').submit( );
});
$('#sweden').click(function(){
    $('#country').val('sweden');
    $('#form1').submit( );
});
$('#uk').click(function(){
    $('#country').val('uk');
    $('#form1').submit( );
});
$('#germany').click(function(){
    $('#country').val('germany');
    $('#form1').submit( );
});
function initMap() {
    var uluru = {lat: -25.344, lng: 131.036};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    var marker = new google.maps.Marker({position: uluru, map: map});
}

// $.getJSON( "ajax/test.json", function( data ) {
//     var items = [];
//     $.each( data, function( key, val ) {
//       items.push( "<li id='" + key + "'>" + val + "</li>" );
//     });
   
//     $( "<ul/>", {
//       "class": "my-new-list",
//       html: items.join( "" )
//     }).appendTo( "body" );
//   });

//  $('#flag-id').attr("src","");