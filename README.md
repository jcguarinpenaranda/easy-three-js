# EasyThree

EasyThree is a library that has a variety of functions in order to make tests and general development easier with Three JS. You can create meshes with a single line of code, as well as materials, lights and more.

Look at /examples, to find how would be a normal use of EasyThree.

Here are some of them:

<h3>Create Geometries easily</h3>

One would often create, for example a Sphere with the following lines of code:

```javascript
	//...initialization

	var geometry = new THREE.SphereGeometry( 1, 32, 32 ); 
    var material = new THREE.MeshNormalMaterial(); 
    var sphere = new THREE.Mesh( geometry, material );
    scene.add( sphere );
```
With EasyThree, you could do exactly the same, with 2 lines:

```javascript
	//...initialization

	var sphere2  = EasyThree.createSphere({material:"normal", posx:-5});
    scene.add(sphere2);
```

Take a look at "material". There's no need to remember how to do it, but typing <b>normal</b>. In fact, you can select between a variety of materials by their name, like:
<ul>
	<li>linebasic</li>
	<li>linedashed</li>
	<li>lambert</li>
	<li>phong</li>
	<li>normal</li>
	<li>basic</li>
</ul>

Also, you noticed posx? Well, with EasyThree you can set in the same line of code the starting position of the sphere or 3d element you are creating. You can set <b>posx</b>, <b>posy</b> and <b>posz</b>.

Here are some other examples:

```javascript

	/*
	Creating a cube with no parameters specified.

	By default, size would be unitary and material would be white MeshBasicMaterial for all meshes created without parameters. Off course you can modify the defaults, that is lower in this document.
	*/
	var cube = EasyThree.createCube(); 
	//or define {sx:2, sy:2, sz:2} to make it 2 by 2 by 2 units, and then
	scene.add(cube);


	/*
	Creating a sphere with a custom radius.
	*/
	var sphere = EasyThree.createSphere({radius:10}); //Default radius is 1
	scene.add(sphere);


	/*
	Creating a circle
	*/
	var circle = EasyThree.createCircle();//Default radius is 1
	scene.add(circle);
```

<b>TIP: If you look at Threejs' documentation, the names of the variables that are there as parameters of the 3d objects are the same names of the variables you can pass as parameters for the 3d object you are creating with EasyThree, so you don't have to remember anything else.</b>

Example of what i tried to say:

Say you see in Threejs' documentation that a sphere geometry has a parameter called "segments". Then, to create that with EasyThree you would call:

```javascript
	var s = EasyThree.createSphere({segments:32});
```

and that applies to all the geometries, as well as lights and materials.

<h3>Create Materials</h3>
```javascript
	//...initialization
	var sphere = EasyThree.createSphere();
	
	//Line Basic Material
	sphere.material = EasyThree.createLineBasicMaterial();

	//Line Dashed Material
	sphere.material = EasyThree.createLineDashedMaterial();
	
	//Basic Material
	sphere.material = EasyThree.createBasicMaterial();
	
	//Lambert Material
	sphere.material = EasyThree.createLambertMaterial();
	
	//Phong Material
	sphere.material = EasyThree.createPhongMaterial();
	
	//Normal Material
	sphere.material = EasyThree.createNormalMaterial();
	
	scene.add(sphere);
```

<h3>Create Lights</h3>
You can create a variety of lights with a single line of code each one.
```javascript
	//...initialization
	var pointLight = EasyThree.createPointLight();
	var ambientLight = EasyThree.createAmbientLight();
	var directionalLight = EasyThree.createDirectionalLight();

	scene.add(pointLight);
	scene.add(ambientLight);
	scene.add(directionalLight);
```

<h3>Use the basic colors</h3>
Modify materials, applying basic colors
```javascript
	var cube = EasyThree.createCube();

	//change color
	cube.material.color = EasyThree.color.CYAN;

	/*
	You can select:
	WHITE,
	BLACK,
	RED,
	GREEN,
	BLUE,
	BROWN,
	CYAN,
	MAGENTA,
	GRAY,
	YELLOW
	*/
	
	scene.add(cube);
```

<h3>Modify the defaults</h3>
When you initialize your project, you can customize EasyThree with custom colors and behaviours:

```javascript
	//Default values

	DEFAULT_SHADING : THREE.SmoothShading,

	DEFAULT_SHADOW_CAST: true,
	DEFAULT_SHADOW_RECEIVE: true,

	DEFAULT_LIGHT_COLOR: 0xffffff,
	DEFAULT_LIGHT_AMBIENT_COLOR: 0x444444,
	DEFAULT_LIGHT_SPECULAR_COLOR: 0xffffff,

	DEFAULT_MATERIAL_COLOR: 0xffffff,
	DEFAULT_MATERIAL_AMBIENT_COLOR: 0x444444,
	DEFAULT_MATERIAL_SPECULAR_COLOR: 0xffffff,
	DEFAULT_MATERIAL_WIREFRAME:false,
	DEFAULT_MATERIAL_FOG:true,

	DEFAULT_MESH_PLANE_SIZE: new THREE.Vector2(1,1),
	DEFAULT_MESH_CUBE_SIZE : new THREE.Vector3(1,1,1),
	DEFAULT_MESH_SPHERE_RADIUS: 1,
	DEFAULT_MESH_SPHERE_SEGMENTS: 16,
	DEFAULT_MESH_SPHERE_RINGS: 16
```
Just call

```javascript
	EasyThree.DEFAULT_MATERIAL_COLOR = EasyThree.color.BLUE:
	
	//cube and sphere are created blue
	var cube = EasyThree.createCube();
	scene.add(cube);

	var sphere = EasyThree.createSphere();
	scene.add(sphere);

```

Find 'easythree.js' in js/easythree.js

By Juan Camilo Guarin P.