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

        var cube  = EasyThree.createCube();
        cube.position.x-=5;
        scene.add(cube);

        var sphere  = EasyThree.createSphere();
        scene.add(sphere);
       
        document.body.appendChild( renderer.domElement );
    }

    function animate() {

        requestAnimationFrame( animate );


        THREEx.WindowResize(renderer, camera);
        renderer.render( scene, camera );
    }

})();