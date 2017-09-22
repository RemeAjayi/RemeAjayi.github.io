$('document').ready(function()
{ 
   $('.required').keyup(function(){
  
   if (($('input[name="name"]') && $('input[name="q3"]') && $('input[name="q2"]') !== "") && $('input[name="q1"]').is(':checked') ) 
   {
    $('#submitButton').removeAttr('disabled');
   }


});
   //displays error message
   $('.required').blur(function(){
    var value = $(this).val();
   
    if (value == "")
    {
      
      $(this).parent().append('<p class="error">This field is required</p>');
      $(this).css({"color": "red", "border": "2px solid red"});
      
    }
    // just an alert
    $('#submit').click(function(){
    alert("Thanks for Sharing!");
    });

});
//hide to remove and change css to black and 0
  
