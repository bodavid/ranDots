// Some random dots ...

function RanDots() {
  var rDthis = this, c, ctx;
  this.plotElem;
  this.plotDisplacementElem;

  this.initImage = function() {
    c = document.getElementById(rDthis.plotElem);
    ctx = c.getContext("2d");
    cDisplacement = document.getElementById(rDthis.plotDisplacementElem);
    ctxDisplacement = c.getContext("2d");
    this.c = c;
    this.ctx = ctx;
  }

  //Plot the data in a 2D Canvas, (G, X, Y) mapped to (R, G, B)
  this.plot2D = function() {
//    rDthis.initImage();
//    rDthis.makeImageData();
    ctx.putImageData(rDthis.imgData, 0, 0);
  };

  this.makeImageData = function() {
    var imgData = ctx.getImageData(0, 0, c.width, c.height);
    var j = 0; // Image pixel color index
    for (var i = 0; i < c.width * c.height; i += 1) {
      imgData.data[j++] = Math.floor(Math.random() * 256);
      imgData.data[j++] = Math.floor(Math.random() * 256);
      imgData.data[j++] = Math.floor(Math.random() * 256);
      imgData.data[j++] = 255;
    }
    rDthis.imgData = imgData;
  }


  this.copyRectEx = function(sX, sY, sW, sH, dX, dY, dW, dH) {
    // draw cropped image
//    var sourceX = 150;
//    var sourceY = 0;
//    var sourceWidth = 150;
//    var sourceHeight = 150;
//    var destWidth = sourceWidth;
//    var destHeight = sourceHeight;
//    var destX = canvas.width / 2 - destWidth / 2;
//    var destY = canvas.height / 2 - destHeight / 2;
      var imageObj = new Image();
    context.drawImage(imageObj, sX, sY, sW, sH, dX, dY, dW, dH);
  };


  this.copyRect = function(sX, sY, sW, sH, dX, dY, dW, dH, inImgData) {
//    ctx.fillStyle="red";
//    ctx.fillRect(10,10,50,50);
    var imgData=ctx.getImageData(sX, sY, sW, sH);
    ctx.putImageData(imgData, dX, dY);
  }


}
