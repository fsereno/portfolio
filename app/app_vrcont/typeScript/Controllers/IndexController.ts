import * as THREE from "three";

// Interfaces

export class IndexController  {
    
    constructor() 
    {
    }

    private camera:any;
    private scene:any;
    private renderer:any;
    private geometry:any;
    private material:any;
    private mesh:any;

    init() {

	this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
	this.camera.position.z = 1;

	this.scene = new THREE.Scene();

	this.geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
	this.material = new THREE.MeshNormalMaterial();

	this.mesh = new THREE.Mesh( this.geometry, this.material );
	this.scene.add( this.mesh );

	this.renderer = new THREE.WebGLRenderer( { antialias: true } );
	this.renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( this.renderer.domElement );
    
    this.animate();
}

animate() {

    var self = this;

	requestAnimationFrame( self.animate );

	this.mesh.rotation.x += 0.01;
	this.mesh.rotation.y += 0.02;

    this.renderer.render( this.scene, this.camera );
    
}

    /*init() 
    {
        const self = this;

        

        
        //  Regardless, let’s kick off the Three.js basics here:

        var camera, scene, renderer, controls


        //  We need a renderer.

        renderer = new THREE.WebGLRenderer({ antialias: true })
        renderer.setClearColor( 0xCCCCCC )
        renderer.setPixelRatio( window.devicePixelRatio )
        renderer.setSize( window.innerWidth, window.innerHeight )
        renderer.vr.enabled  = true
        //renderer.vr.standing = true
        renderer.shadowMap.enabled = true
        renderer.shadowMap.type = THREE.PCFSoftShadowMap
        document.body.appendChild( renderer.domElement )


        //  Once we create the camera we’ll attach it to the scene. This is usually
        //  not necessary, but we’re going to attach a “head” to the camera that casts
        //  a shadow so you can see evidence of your own presence.

        camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 10 )
        scene  = new THREE.Scene()
        scene.add( camera )

        //  Ok, we’ve got the basic Three.js overhead out of the way.
        //  Now let’s add some stuff to our empty scene.

        var light = new THREE.DirectionalLight( 0xFFFFFF, 1)
        light.position.set(  1, 10, -0.5 )
        light.castShadow = true
        light.shadow.mapSize.width  = 2048
        light.shadow.mapSize.height = 2048
        light.shadow.camera.near    =    1
        light.shadow.camera.far     =   12
        scene.add( light )

        scene.add( new THREE.HemisphereLight( 0x909090, 0x404040 ))


        var floor = new THREE.Mesh(

            new THREE.PlaneBufferGeometry( 6, 6, 12, 12 ),
            new THREE.MeshStandardMaterial({

                roughness: 1.0,
                metalness: 0.0,
                color: 0xFFFFFF,
                transparent: true,
                opacity: 0.8
            })
        )
        floor.rotation.x = Math.PI / -2
        floor.receiveShadow = true
        scene.add( floor )

        var wireframe = new THREE.Mesh(

            floor.geometry.clone(),
            new THREE.MeshBasicMaterial({

                color: 0xFFFFFF,
                wireframe: true
            })
        )
        wireframe.rotation.x = Math.PI / -2
        wireframe.position.y = -0.001
        scene.add( wireframe )

        //  Your head is going to cast a shadow.
        //  You won’t see this sphere because it’s single-sided be default
        //  and the camera is sitting on the inside ;)

        var torus = new THREE.Mesh(

            new THREE.TorusKnotGeometry( 0.4, 0.15, 256, 32 ),
            new THREE.MeshStandardMaterial({ roughness: 0.01, metalness: 0.2 })
        )
        torus.position.set( -0.25, 1.4, -1.5 )
        torus.castShadow    = true
        torus.receiveShadow = true
        scene.add( torus )

        renderer.render( scene, camera )
    }*/
}