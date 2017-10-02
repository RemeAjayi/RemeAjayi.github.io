$(document).ready(function() {
  //initially disable the submit button
 var submitBtn = document.getElementById("submit");
  //why not $('#submit');
 submitBtn.disabled = true;
    
$('.required').on('keyup', function () {
    var _this = $(this); //the form
    var value = _this.val();//how
    
//enable or disable the submit button if form is valid or not\
var formIsValid = ( $('#name').val() != "" && $('#q2').val() != "" && $('#q3').val() != "" );
// the above expression will evaluate to either true or false
// and that T/F value will be stored in formIsValid
submitBtn.disabled = !formIsValid;
// formIsValid is true if all the fields are not empty
// !formIsVaild is false if all the fields are not empty
// submitBtn should have disabled set to false if all fields are not empty
// What else does this code do?
 
//check if or not text input fields are empty
if (value == ""){
    required.showError(_this);
    //alert(value);
}
else{
    required.hideError(_this);
}
});

//Object to handle showing and hiding error messages
var required = {
  showError: function(element)
    {
      //get the p tag after the input specified
     var errText = $('#' + element[0].id +'p');
    //don't get -> $('#' + element[0].id +'p')
        
  //ensure there is only one error message showing
        if(errText.length == 0)
            {
                element.after('<p>This field is required.</p>');
            }
        //so it only add the error msg when there's none there already?
    },
    hideError: function(element){
        $('#' + element[0].id + '+ p').remove();
    }
};
    //end of required object
});
