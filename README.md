# EasyThree

EasyThree is a library that has a variety of functions in order to make tests easier with Three JS. You can create meshes with a single line of code, as well as materials, lights and more.

Look at examples, to find how would be a normal use of EasyThree.

Here are some of them:

<h3>Create Geometries</h3>
```javascript
	//...initialization
	var cube = EasyThree.createCube();//Default size is 1,1,1
	scene.add(cube);

	var sphere = EasyThree.createSphere();//Default radius is 1
	scene.add(sphere);

	var circle = EasyThree.createCircle();//Default radius is 1
	scene.add(circle);
```

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