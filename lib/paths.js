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
            console.log("X Center: ", centerX, "Y Center", centerY);
                // If consideration of the padding property is necessary, use the following:
            // var width = $this.outerWidth();
            // var height = $this.outerHeight();   
        })
    }
}



module.exports = Line;