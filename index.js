$(document).ready(function(){


var managerCard =  `            
<div id = 'manager' class="card text-white bg-primary mb-5" style="max-width: 18rem;">
    <div class="future-date"></div>
    <div class="card-body">
        <h5 class="future-outlook-image"><img src='./Assets/Images/Manager-img.jpg' class = "five-day-img"></h5>
        <h5 class="future-temperature"></h5>  
        <h5 class="future-humidity"></h5>  
    </div>
</div>
`

var manager = $('#manager');

class Line {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }

    getCardCenters() {
        $('.card').each( function() {
            let $this = $(this);
            let offset = $this.offset();
            let width = $this.width();
            let height = $this.height();
            let centerX = offset.left + width / 2;
            let centerY = offset.top + height / 2;
            console.log(centerX, centerY);
                // If you need to consider the padding property in your calculations, use the following:
            // var width = $this.outerWidth();
            // var height = $this.outerHeight();   
        })
    }
  }
    $('a[href^="http://"]').each(function(){ 
        $(this).attr("href", newUrl); // Set herf value
    });
});

// for(var i = 5)
