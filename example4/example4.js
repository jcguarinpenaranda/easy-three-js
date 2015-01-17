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


        /* 
        --------------------------------------------------------------

        Hey you,

        This is both a material and a coding example.

        First we are going to create a step by step Three js sphere
        with a normal material:
        */

        var geometry = new THREE.SphereGeometry( 1, 32, 32 ); 
        var material = new THREE.MeshNormalMaterial(); 
        var sphere = new THREE.Mesh( geometry, material );
        sphere.position.x-=10;
        scene.add( sphere );

        /*
        Ok, that was it.

        With EasyThree, you could create the same thing, 
        without having to remember how to create a SphereGeometry,
        a MeshNormalMaterial and a Mesh, with a single line of code.

        Let's see:
        */

        var sphere2  = EasyThree.createSphere({material:"normal", posx:-5});
        scene.add(sphere2);

        /*
        Faster, huh?

        with EasyThree, you can specify a bunch of variables when
        creating a 3d object
        */

        var sphere3 = EasyThree.createSphere();
        sphere3.material = EasyThree.createPhongMaterial();
        sphere3.material.color = EasyThree.color.BLUE;
        scene.add(sphere3);

        var sphere4  = EasyThree.createSphere({posx:5,material:"phong",hex:0xd3c6ab});
        scene.add(sphere4);
       
        var sphere5  = EasyThree.createSphere({posx:10, material:"linebasic",hex:0x006f94});
        scene.add(sphere5);





        //scene ligths for material testing----------------------------

        var pointlight = EasyThree.createPointLight();
        pointlight.position.x = sphere2.position.x;
        pointlight.position.y = 5;
        pointlight.position.z = 5;
        scene.add(pointlight);

        var ambientlight = EasyThree.createAmbientLight();
        scene.add(ambientlight);

        document.body.appendChild( renderer.domElement );
    }

    function animate() {

        requestAnimationFrame( animate );


        winResize.trigger();
        renderer.render( scene, camera );
    }

})();