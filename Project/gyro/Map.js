L1=[
	'9999999999999999999111111111119999999999999999999',
	'9999999999999999999111111111119999999999999999999',
	'9911111111111111111111111111111111111111111111199',
	'9911111111111111111111111111111111111111111111199',
	'9911111111111111111111111111111111111111111111199',
	'9911111111111111111111111111111111111111111111199',
	'9911111111111111116234567654326111111111111111199',
	'9911111111111111171111111111111711111111111111199',
	'9911111111112345611111111111111165432111111111199',
	'9911111111111111111111111111111111111111111111199',
	'9911111111111111111111111111111111111111111111199',
	'9911111111111111111111111111111111111111111111199',
	'9911111111111111111111111111111111111111111111199',
	'9999999999999999911111111111111199999999999999999',
	'9911111111111111111111111111111111111111111111199',
	'9911111111111111111111111111111111111111111111199',
	'9911111111111111111111111111111111111111111111199',
	'9911111111111111111111111111111111111111111111199',
	'9911111111111111111111111111111111111111111111199',
	'9999999999999999999999999999999999111111111111199',
	'9911111111111111111111111111111111111111111111199',
	'9911111111111111111111111111111111111111111111199',
	'9911111111111111111111111111111111111111111111199',
	'9911111111111111111111111111111111111111111111199',
	'9999999999999999999999999999999999999999999999999',
	'9999999999999999999999999999999999999999999999999',

];
ColorL1=[
	'mmmmmmmmmmmmmmmmmmmvvvvvvvvvvvmmmmmmmmmmmmmmmmmmm',
	'mwwwwwwwwwwwwwwwwwwvvvvvvvvvvvwwwwwwwwwwwwwwwwwwm',
	'mwvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvwm',
	'mwvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvwm',
	'mwvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvwm',
	'mwvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvwm',
	'mwvvvvvvvvvvvvvvvvmmmmmmmmmmmmmvvvvvvvvvvvvvvvvwm',
	'mwvvvvvvvvvvvvvvvmvvvvvvvvvvvvvmvvvvvvvvvvvvvvvwm',
	'mwvvvvvvvvvvmmmmmvvvvvvvvvvvvvvvmmmmmvvvvvvvvvvwm',
	'mwvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvwm',
	'mwvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvwm',
	'mwvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvwm',
	'mwvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvwm',
	'mwvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvwm',
	'mwvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvwm',
	'mwvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvwm',
	'mwvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvwm',
	'mwvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvwm',
	'mwvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvwm',
	'mwvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvwm',
	'mwvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvwm',
	'mwvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvwm',
	'mwvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvwm',
	'mwvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvwm',
	'mwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwm',
	'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',


];
Rules={0:"",1:"1",2:"12",3:"123",4:"1234",5:"12345",6:"123456",7:"1234567",8:"12345678",9:"123456789",'w':"Brick3.jpg","v":"floor.jpg","m":"Brick2.jpg"};
function create() {
	for (var z = 0; z < L1.length; z++) {
	  for (var x = 0; x < L1[z].length; x++) {
	    for (var y = 1; y < 10; y++) {
	if (Rules[L1[z].charAt(x)].includes(y)) {
		//console.log();
	  mesh = new THREE.Mesh(geometry,
			new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load(Rules[ColorL1[z].charAt(x)])}));
	  mesh.position.x = 1*x;
	  mesh.position.y = 1*y;
	  mesh.position.z = 1*z;
	  scene.add(mesh);}
	}}}
}
create();
