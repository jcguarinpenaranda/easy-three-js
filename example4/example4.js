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
        camera.position.z = 15;

        winResize =  new THREEx.WindowResize(renderer, camera);

        var sphere1  = EasyThree.createSphere();
        sphere1.position.x-=10;
        sphere1.material = EasyThree.createNormalMaterial();
        scene.add(sphere1);

        var sphere2  = EasyThree.createSphere();
        sphere2.position.x-=5;
        sphere2.material = EasyThree.createLambertMaterial();
        sphere2.material.color = EasyThree.color.YELLOW;
        scene.add(sphere2);

        var sphere3 = EasyThree.createSphere();
        sphere3.material = EasyThree.createPhongMaterial();
        sphere3.material.color = EasyThree.color.BLUE;
        scene.add(sphere3);

        var sphere4  = EasyThree.createSphere();
        sphere4.position.x+=5;
        scene.add(sphere4);
       
        var sphere5  = EasyThree.createSphere();
        sphere5.position.x+=10;
        scene.add(sphere5);

        //scene ligths for material testing

        var pointlight = EasyThree.createPointLight();
        pointlight.position.x = sphere2.position.x;
        pointlight.position.y = 5;
        pointlight.position.z = 5;
        scene.add(pointlight);

        var ambientlight = EasyThree.createAmbientLight();
        scene.add(ambientlight);

        var directionallight = EasyThree.createDirectionalLight();
        scene.add(directionallight);

        document.body.appendChild( renderer.domElement );
    }

    function animate() {

        requestAnimationFrame( animate );


        winResize.trigger();
        renderer.render( scene, camera );
    }

})();