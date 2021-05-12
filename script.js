$(document).ready(function(){
    $.ajax({
        url: 'https://609aa27c0f5a13001721b9cc.mockapi.io/api/v1/items',
        type: 'get',
        dataType: 'JSON',
        success: function(response){
			
            var len = response.length;
            for(var i=0; i<len; i++){
             
                var avtar = response[i].avatar;
                var name = response[i].name;
               

var val =  "<div  class='col-lg-3 col-3'>"+
    "<img class='img' src="+avtar+" width='225px' height='140px' alt=''>"+
    "<p>"+name+"</p>"+
    "</div>";


               

                $("#foodid").append(val);
            }

        }
    });
});