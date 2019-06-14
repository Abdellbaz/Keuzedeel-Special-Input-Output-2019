
			var camera, scene, renderer, controls, mesh,geometry,material,circle;
			var player = { height:5, speed:0.05, turnSpeed:Math.PI*0.01 };

			init();

			function init() {
				canvas =document.getElementById('c');
			//	button =document.getElementById('b');
				scene = new THREE.Scene();
				// const loader = new THREE.CubeTextureLoader();
				// const texture = loader.load(['grid.png','grid.png','grid.png','grid.png','grid.png','grid.png',]);
				// scene.background = texture;

				camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
				camera.position.set(25,player.height,-1);
				//camera.lookAt(new THREE.Vector3(0,player.height,0));
				controls = new THREE.DeviceOrientationControls( camera );
				geometry = new THREE.BoxGeometry(1,1,1) ;
				meshFloor = new THREE.Mesh(new THREE.PlaneGeometry(50,50,50,50),new THREE.MeshBasicMaterial({color:0xffffff, wireframe:true}));
				meshFloor.rotation.x -= Math.PI / 2; // Rotate the floor 90 degrees
				meshFloor.position.y =0.5;
				scene.add(meshFloor);
				renderer = new THREE.WebGLRenderer( {  canvas,antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				document.body.appendChild( renderer.domElement );

					animate();
			}
			function animate() {
				window.requestAnimationFrame( animate );
				controls.update();
				renderer.render( scene, camera );}

			function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
			}
			window.addEventListener( 'resize', onWindowResize, false );

	     // b.addEventListener('touchend', function(e){
	     //     var touchobj = e.changedTouches[0] // reference first touch point for this event
	     //     p.innerHTML = 'Status: touchend<br> ( ClientX: ' + parseInt(touchobj.clientX) + 'px )'+'(  ClientY: ' + parseInt(touchobj.clientY) + 'px )'
	     //     e.preventDefault()
	     // }, false)
			// b.addEventListener('touchstart', function(e){ startY=b.style.top;startX=b.style.left;})
			//
			//   b.addEventListener('touchmove', function(e){
      //   var touchobj = e.changedTouches[0] // reference first touch point for this event					 // if (true) {
			// 	   distX = parseInt(touchobj.clientX) - startX;
			// 		 distY = parseInt(touchobj.clientY) - startY;
			//
			// 		if (distX>40&&distX<200&&distY>40&&distY<200) {
			// 			b.style.top = touchobj.clientY-35 + "px";
			// 			b.style.left = touchobj.clientX-35 + "px";
			// 			//camera.position.x+=distX/10000;
			// 			p.innerHTML='(  x= '+distX+' y= '+distY+'  )';
			//
			// 		}
			// 		//camera.translateX( distX/1000 );
			//
			//       e.preventDefault()
			//   }, false)
			// 	b.addEventListener('touchend', function(e){b.style.top = startY;b.style.left = startX;})
