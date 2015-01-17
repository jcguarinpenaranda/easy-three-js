(function(){

    var scene, camera, renderer;
    var geometry, material, mesh;
    var winResize;


    init();
    animate();

    function init() {
        scene = new THREE.Scene();
        renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );

        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.z = 10;

        winResize =  new THREEx.WindowResize(renderer, camera);

        var cube  = EasyThree.createCube();
        cube.position.x-=5;
        scene.add(cube);

        var sphere  = EasyThree.createSphere();
        scene.add(sphere);
       
        document.body.appendChild( renderer.domElement );
    }

    function animate() {

        requestAnimationFrame( animate );

        winResize.trigger();
        renderer.render( scene, camera );
    }

})();