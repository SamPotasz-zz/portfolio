//var $mainDiv = $(".maindiv"),
//var $lowerDiv = $mainDiv.children('.lowerdiv'); 
    
function showHideChild(evt, flag){
    var temp = (flag) ? 0 : 140;
    var $lowerDiv = $(evt.target).closest('.maindiv').children('.lowerdiv');
    
    $lowerDiv.stop().animate({top:temp});
}

$(document).ready(function() {
    
    $('.maindiv').on({
        mouseover: function(evt){
            evt.stopPropagation();
            showHideChild(evt, true);                      
        },
        mouseout: function(evt) {
            showHideChild(evt, false);
        },   
        touchstart: function(evt){
            showHideChild(evt, true);
            
            setTimeout(function(evt){
               showHideChild(evt, false);
            },1500);
        }
    });
});