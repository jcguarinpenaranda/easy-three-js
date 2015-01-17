(function(){

    var scene, camera, renderer;
    var geometry, material, mesh;
    var winResize;

    var geometryContainer= {
        radius:12,
        geometries : new THREE.Object3D()
    }

    init();
    animate();

    function init() {
        scene = new THREE.Scene();
        renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );

        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.z = 20;

        winResize =  new THREEx.WindowResize(renderer, camera);

        var rand = parseInt(Math.random()*20+1);

        for(var i = 0; i<rand; i++){
            var elem;
            if(i%2==0){
                elem = EasyThree.createSphere();

                elem.material.wireframe=true;

            }else{
                elem = EasyThree.createCube();
            }
            
            elem.position.x=Math.cos(i)*geometryContainer.radius;
            elem.position.y=Math.sin(i)*geometryContainer.radius;
            geometryContainer.geometries.add(elem);
        }
        
        scene.add(geometryContainer.geometries);

       
        document.body.appendChild( renderer.domElement );
    }

    function animate() {

        requestAnimationFrame( animate );

        geometryContainer.geometries.rotation.z+= 0.01;

        winResize.trigger();
        renderer.render( scene, camera );
    }

})();