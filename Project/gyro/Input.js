window.addEventListener('touchstart', function(e){
     startX = parseInt(e.changedTouches[0].clientX) ;
     startY = parseInt(e.changedTouches[0].clientY);
     e.preventDefault();}, false)

 window.addEventListener('touchmove', function(e){
     var touchobj = e.changedTouches[0] // reference first touch point for this event
     var distX = parseInt(touchobj.clientX) - startX;
     var distY = parseInt(touchobj.clientY) - startY;
     b.style.top = touchobj.clientY-35 + "px";
     b.style.left = touchobj.clientX-35 + "px";
     camera.translateZ( -distX/350);
     camera.translateY( -distY/350);
  // /	camera.rotateY(-distX* Math.PI / 180);
   //camera.rotation.x=distX;

    camera.position.y=5;
     e.preventDefault()
 }, false)
window.addEventListener('touchend', function(e){b.style.top = '';b.style.left = '';})
