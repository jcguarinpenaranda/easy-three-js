(function(){

    var scene, camera, renderer;
    var geometry, material, mesh;

    init();
    animate();

    function init() {
        scene = new THREE.Scene();
        renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );

        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.z = 10;

        for(var i = 0; i<30; i++){
            var cube = EasyThree.createCube();
            scene.add(cube);
        }
        
       
        document.body.appendChild( renderer.domElement );
    }

    function animate() {

        requestAnimationFrame( animate );


        THREEx.WindowResize(renderer, camera);
        renderer.render( scene, camera );
    }

})();