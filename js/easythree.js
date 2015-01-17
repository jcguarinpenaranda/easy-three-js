/*
	EasyThree is a library that has a variety of functions
	in order to make tests easier with Three JS. You can
	create meshes with a single line of code, as well as 
	materials and lights.

	By Juan Camilo Guarin P.
	Otherwise Studios.
*/

var EasyThree = {

	DEFAULT_SHADING : THREE.SmoothShading,

	DEFAULT_SHADOW_CAST: true,
	DEFAULT_SHADOW_RECEIVE: true,


	DEFAULT_LIGHT_COLOR: 0xffffff,
	DEFAULT_LIGHT_AMBIENT_COLOR: 0xffffff,
	DEFAULT_LIGHT_SPECULAR_COLOR: 0xffffff,
	DEFAULT_LIGHT_INTENSITY: 1,

	DEFAULT_MATERIAL_COLOR: 0xffffff,
	DEFAULT_MATERIAL_AMBIENT_COLOR: 0x222222,
	DEFAULT_MATERIAL_SPECULAR_COLOR: 0xffffff,
	DEFAULT_MATERIAL_WIREFRAME:false,
	DEFAULT_MATERIAL_FOG:true,

	DEFAULT_MESH_POSITION : new THREE.Vector3(0,0,0),

	DEFAULT_MESH_PLANE_SIZE: new THREE.Vector2(1,1),

	DEFAULT_MESH_CUBE_SIZE : new THREE.Vector3(1,1,1),

	DEFAULT_MESH_SPHERE_RADIUS: 1,
	DEFAULT_MESH_SPHERE_SEGMENTS: 16,
	DEFAULT_MESH_SPHERE_RINGS: 16,

	DEFAULT_MESH_CIRCLE_SEGMENTS: 16,
	DEFAULT_MESH_CIRCLE_RADIUS: 1,

	DEFAULT_MESH_CYLINDER_TOP_RADIUS : 1,
	DEFAULT_MESH_CYLINDER_BOTTOM_RADIUS : 1,
	DEFAULT_MESH_CYLINDER_HEIGHT : 1,
	DEFAULT_MESH_CYLINDER_RADIUS_SEGMENTS : 8,
	DEFAULT_MESH_CYLINTER_HEIGHT_SEGMENTS : 1,
	DEFAULT_MESH_CYLINDER_OPEN_ENDED : false,

	/*
	------------------------------------------------------------------------
	Additional functions Section
	*/
	time : function(){
		return Date.now();
	},

	clamp:function(a, amin, amax, min, max){
		
		// missing implementation

		return a;
	},

	color: {
		RED: new THREE.Color(1,0,0),
		GREEN: new THREE.Color(0,1,0),
		BLUE: new THREE.Color(0,0,1),
		WHITE: new THREE.Color(1,1,1),
		BLACK: new THREE.Color(0,0,0),
		CYAN: new THREE.Color(0,1,1),
		MAGENTA: new THREE.Color(1,0,1),
		YELLOW: new THREE.Color(1,1,0),
		BROWN: new THREE.Color(0x663300),
		GRAY: new THREE.Color(0x663300)
	},
	/*
	------------------------------------------------------------------------
	Meshes Section
	*/
	createMesh : function(geometry, material, additionalParams = {}){
		if(!geometry){
			return "You must specify a geometry";
		}

		if(!material){
			material = this.createBasicMaterial();
		}

		var mesh = 	new THREE.Mesh(geometry, material);


		/*Positioning*/
		if(additionalParams.posx){
			mesh.position.x = additionalParams.posx;
		}

		if(additionalParams.posy){
			mesh.position.y = additionalParams.posy;
		}

		if(additionalParams.posz){
			mesh.position.z = additionalParams.posz;
		}

		/*materials*/
		if(additionalParams.material){
			switch(additionalParams.material){
				case "linebasic":
					mesh.material = this.createLineBasicMaterial();
					break;
				case "linedashed":
					mesh.material = this.createLineDashedMaterial();
					break;
				case "lambert":
					mesh.material = this.createLambertMaterial();
					break;
				case "phong":
					mesh.material = this.createPhongMaterial();
					break;
				case "normal":
					mesh.material = this.createNormalMaterial();
					break;
				default:
					mesh.material = this.createBasicMaterial();
			}
		}

		if(additionalParams.color){
			mesh.material.color = additionalParams.color;
		}

		if(additionalParams.hex){
			mesh.material.color = new THREE.Color(additionalParams.hex);
		}

		return mesh;
	},

	createCircle: function(param = {}, material){
		p = {
			radius: param.radius || this.DEFAULT_MESH_CIRCLE_RADIUS,
			segments : param.segments || this.DEFAULT_MESH_CIRCLE_SEGMENTS
		}

		var additional = param.other || {}; 

		return this.createMesh(new THREE.CircleGeometry(p.radius, p.segments ), material, additional);
	},

	createSphere : function(param = {}, material){

		param.radius = param.radius || this.DEFAULT_MESH_CIRCLE_RADIUS;
		param.segments = param.segments || this.DEFAULT_MESH_CIRCLE_SEGMENTS;
		param.rings = param.rings || this.DEFAULT_MESH_SPHERE_RINGS;

		return this.createMesh(new THREE.SphereGeometry(param.radius,param.segments,param.rings),material, param);
	},

	createCube : function(param = {}, material){
		
		param.sx = param.sx || this.DEFAULT_MESH_CUBE_SIZE.x;
		param.sy = param.sy || this.DEFAULT_MESH_CUBE_SIZE.y;
		param.sz = param.sz || this.DEFAULT_MESH_CUBE_SIZE.z;

		return this.createMesh(new THREE.BoxGeometry(param.sx, param.sy, param.sz), material, param);
	},

	createPlane : function(param = {}, material){
		param.sx = param.sx || this.DEFAULT_MESH_CUBE_SIZE.x;
		param.sy = param.sy || this.DEFAULT_MESH_CUBE_SIZE.y;

		return this.createMesh(new THREE.PlaneGeometry(param.sx, param.sy), material, param);
	},

	
	createCylinder: function(param = {}, material){
		param.radiusTop = param.radiusTop || this.DEFAULT_MESH_CYLINDER_TOP_RADIUS;
		param.radiusBottom = param.radiusBottom || this.DEFAULT_MESH_CYLINDER_BOTTOM_RADIUS;
		param.height = param.height || this.DEFAULT_MESH_CYLINDER_HEIGHT;
		param.radiusSegments = param.radiusSegments || this.DEFAULT_MESH_CYLINDER_RADIUS_SEGMENTS;
		param.heightSegments = param.heightSegments || this.DEFAULT_MESH_CYLINTER_HEIGHT_SEGMENTS;
		param.openEnded = param.openEnded || this.DEFAULT_MESH_CYLINDER_OPEN_ENDED;
		
		return this.createMesh(new THREE.CylinderGeometry(param.radiusTop, param.radiusBottom, param.height, param.radiusSegments, param.heightSegments, param.openEnded),material, param);
	},

	/*
	------------------------------------------------------------------------
	Materials Section
	*/

	createLineBasicMaterial : function(param = {}){
		/*
		LineBasicMaterial(parameters)

		Parameters:
		color — Line color in hexadecimal. Default is DEFAULT_MATERIAL_COLOR.
		linewidth — Line thickness. Default is 1.
		linecap — Define appearance of line ends. Default is 'round'.
		linejoin — Define appearance of line joints. Default is 'round'.
		vertexColors — Define how the vertices gets colored. Default is THREE.NoColors.
		fog — Define whether the material color is affected by global fog settings. Default is false. 
		*/

		return new THREE.LineBasicMaterial({
			color: param.color  || this.DEFAULT_MATERIAL_COLOR
		});
	},

	createLineDashedMaterial : function (param = {}){
		/*
		LineDashedMaterial(parameters)
		
		Parameters:

		color — Line color in hexadecimal. Default is DEFAULT_MATERIAL_COLOR.
		linewidth — Line thickness. Default is 1.
		scale — The scale of the dashed part of a line. Default is 1.
		dashSize — The size of the dash. Default is 3.
		gapSize - The size of the gap. Default is 1.
		vertexColors — Define how the vertices gets colored. Default is THREE.NoColors.
		fog — Define whether the material color is affected by global fog settings. Default is false. 
		*/

		return new THREE.LineDashedMaterial({
			color: param.color || this.DEFAULT_MATERIAL_COLOR
		});
	},

	createBasicMaterial: function(param = {}){
		/*
		MeshBasicMaterial( parameters )
		parameters is an object with one or more properties defining the material's appearance.
		
		color — geometry color in hexadecimal. Default is DEFAULT_MATERIAL_COLOR.
		map — Sets the texture map. Default is null
		lightMap — Set light map. Default is null.
		specularMap — Set specular map. Default is null.
		alphaMap — Set alpha map. Default is null.
		envMap — Set env map. Default is null.
		fog — Define whether the material color is affected by global fog settings. Default is true.
		shading — Define shading type. Default is THREE.SmoothShading.
		wireframe — render geometry as wireframe. Default is false.
		wireframeLinewidth — Line thickness. Default is 1.
		wireframeLinecap — Define appearance of line ends. Default is 'round'.
		wireframeLinejoin — Define appearance of line joints. Default is 'round'.
		vertexColors — Define how the vertices gets colored. Default is THREE.NoColors.
		skinning — Define whether the material uses skinning. Default is false.
		morphTargets — Define whether the material uses morphTargets. Default is false. 
		*/

		return new THREE.MeshBasicMaterial({
			color: param.color || this.DEFAULT_MATERIAL_COLOR,
			ambient: param.ambient || this.DEFAULT_MATERIAL_AMBIENT_COLOR,
			shading: param.shading || this.DEFAULT_SHADING,
			fog : param.fog || this.DEFAULT_MATERIAL_FOG
		});
	},

	createLambertMaterial: function (param = {}){
		/*
		MeshLambertMaterial(parameters)
		parameters -- parameters is an object with one or more properties defining the material's appearance.
		
		color — Line color in hexadecimal. Default is DEFAULT_MATERIAL_COLOR.
		map — Sets the texture map. Default is null
		lightMap — Set light map. Default is null.
		specularMap — Set specular map. Default is null.
		alphaMap — Set alpha map. Default is null.
		envMap — Set env map. Default is null.
		fog — Define whether the material color is affected by global fog settings. Default is false. shading — How the triangles of a curved surface are rendered. Default is THREE.SmoothShading.
		wireframe — Render geometry as wireframe. Default is false (i.e. render as smooth shaded).
		wireframeLinewidth — Controls wireframe thickness. Default is 1.
		wireframeLinecap — Define appearance of line ends. Default is 'round'.
		wireframeLinejoin — Define appearance of line joints. Default is 'round'.
		vertexColors — Define how the vertices gets colored. Default is THREE.NoColors.
		skinning — Define whether the material uses skinning. Default is false.
		morphTargets — Define whether the material uses morphTargets. Default is false.

		*/

		return new THREE.MeshLambertMaterial({
			color: param.color || this.DEFAULT_MATERIAL_COLOR,
			ambient: param.ambient || this.DEFAULT_MATERIAL_AMBIENT_COLOR,
			shading: param.shading || this.DEFAULT_SHADING,
			fog : param.fog || this.DEFAULT_MATERIAL_FOG
		});
	},

	createNormalMaterial : function (param = {}){
		/*
		MeshNormalMaterial(parameters)
		parameters is an object with one or more properties defining the material's appearance.
		
		shading -- How the triangles of a curved surface are rendered. Default is THREE.FlatShading.
		wireframe -- Render geometry as wireframe. Default is false (i.e. render as smooth shaded).
		wireframeLinewidth -- Controls wireframe thickness. Default is 1.
		morphTargets -- Define whether the material uses morphTargets. Default is false.
		*/

		return new THREE.MeshNormalMaterial({
			shading: param.shading || this.DEFAULT_SHADING
		});
	},

	createPhongMaterial: function(param = {}){
		/*
		MeshPhongMaterial(parameters)
		parameters -- an object with one or more of the material's properties defining the its appearance.
		
		color — geometry color in hexadecimal. Default is 0xffffff.
		map — Sets the texture map. Default is null
		lightMap — Set light map. Default is null.
		specularMap — Set specular map. Default is null.
		alphaMap — Set alpha map. Default is null.
		envMap — Set env map. Default is null.
		fog — Define whether the material color is affected by global fog settings. Default is true.
		shading — Define shading type. Default is THREE.SmoothShading.
		wireframe — render geometry as wireframe. Default is false.
		wireframeLinewidth — Line thickness. Default is 1.
		wireframeLinecap — Define appearance of line ends. Default is 'round'.
		wireframeLinejoin — Define appearance of line joints. Default is 'round'.
		vertexColors — Define how the vertices gets colored. Default is THREE.NoColors.
		skinning — Define whether the material uses skinning. Default is false.
		morphTargets — Define whether the material uses morphTargets. Default is false. 
		*/

		return new THREE.MeshPhongMaterial({
			color: param.color || this.DEFAULT_MATERIAL_COLOR,
			ambient: param.ambient || this.DEFAULT_MATERIAL_AMBIENT_COLOR,
			specular: param.specular || this.DEFAULT_MATERIAL_SPECULAR_COLOR,
			shading: param.shading || this.DEFAULT_SHADING,
			fog : param.fog || this.DEFAULT_MATERIAL_FOG
		});
	},

	/*
	------------------------------------------------------------------------
	Lights Section
	*/


	createAmbientLight: function(param = {}){
		param.hex = param.hex || this.DEFAULT_LIGHT_COLOR;
		return new THREE.AmbientLight(param.hex);
	},

	createDirectionalLight: function(param = {}){
		param.hex = param.hex || this.DEFAULT_LIGHT_COLOR;
		param.intensity = param.intensity || this.DEFAULT_LIGHT_INTENSITY;

		var dl = new THREE.DirectionalLight(param.hex, param.intensity);

		if(param.shadows){
			dl.castShadow = true;
		}

		return dl;
	},

	createPointLight: function(param = {}){
		param.hex = param.hex || this.DEFAULT_LIGHT_COLOR;
		param.intensity = param.intensity || this.DEFAULT_LIGHT_INTENSITY;

		return new THREE.PointLight(param.hex, param.intensity);
	},

	createAreaLight: function(param = {}){
		param.hex = param.hex || this.DEFAULT_LIGHT_COLOR;
		param.intensity = param.intensity || this.DEFAULT_LIGHT_INTENSITY;

		return new THREE.AreaLight(param.hex,param.intensity);
	},

	createHemisphereLight: function(param = {}){
		
		param.skyColorHex = param.skyColorHex || 0xffffff;
		param.groundColorHex = param.groundColorHex || 0xffffff;
		param.intensity = param.intensity || this.DEFAULT_LIGHT_INTENSITY;

		//skyColorHex = 0xffffff, groundColorHex=0xffffff, intensity = 0.5

		return new THREE.HemisphereLight(param.skyColorHex, param.groundColorHex, param.intensity);
	}
};

var e3 = EasyThree;