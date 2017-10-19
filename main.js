var app = function () {
    this.index = 0;
    //click
    this.$slide1_images = $("#slide1_images");
    this.outerDiv = $("#captioned-gallery");
    this.intialClickCoordinates = "";
    var self = this;

    $(document).ready(function () {

        //event binding



       self.outerDiv.on('mouseup mouseleave', function () {
            self.outerDiv.off('mousemove');
            console.log("mouseup mouseleave fired");
            self.alignImage();
        });

        self.outerDiv.mousedown(function (ev) {
            console.log("moudedown event captured");
            self.outerDiv.on('mousemove', mousemoveHandler);
        });

        //function capture

        // function slideImageRight() {
        //     if (this.index < 3) {
        //         this.index++;
        //         this.$slide1_images.css("transform", "translateX(" + (this.index * -450) + "px)");
        //     }
        // }

        // // function detachmouseHandler() {

        // // }

        // function slideImageLeft() {
        //     if (this.index > 0) {
        //         this.index--;
        //         this.$slide1_images.css("transform", "translateX(" + (this.index * -450) + "px)");
        //     }
        // }

        // function slideImageByLength(x) {
        //     this.$slide1_images.css("transform", "translateX(" + x + "px)");
        // }
        function mousemoveHandler(ev) {
            // {
            //     var x = ev.pageX - 150;
            //     if ((x <= 450)) {
            //         this.slideImageByLength(x);
            //     }
            // }
            var x = ev.pageX - self.intialClickCoordinates;


            self.slideImageByLength(x);

        }

    });
}

var appProto = app.prototype;

appProto.slideImageRight = function (e) {
    if (this.index < 3) {
        this.index++;
    }
    this.alignImage();
}

appProto.alignImage = function (ev) {
    console.log("alignImage fired");
    this.$slide1_images.css("transition", "all 1.0s ease-in-out");
    this.$slide1_images.css("transform", "translateX(" + (this.index * -450) + "px)");

}

appProto.slideImageLeft = function () {
    if (this.index > 0) {
        this.index--;
    }
      this.alignImage();
}

appProto.slideImageByLength = function (x) {
    console.log(this.index, x);
    var shift = (this.index * -450) + x;
    this.$slide1_images.css("transition", "all 1.0ms ease-in-out");
    this.$slide1_images.css("transform", "translateX(" + shift + "px)");
    if(x >=225){
        this.slideImageLeft();
       this.outerDiv.off('mousemove');
    }
   if(x<-225){
        this.slideImageRight();
        this.outerDiv.off('mousemove');
    }
    
}

appProto.noteInitialCoordinates = function (ev) {
    this.intialClickCoordinates = ev.pageX;
}


var myApp = new app();