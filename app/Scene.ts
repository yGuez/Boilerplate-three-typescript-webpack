import * as THREE from 'three';

export class Scene {
    private _camera: THREE.PerspectiveCamera;
    private _scene: THREE.Scene;
    private _mesh: THREE.Mesh;
    private _renderer: THREE.WebGLRenderer;

    public constructor() {
        this._camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
        this._scene = new THREE.Scene();

        let geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
        let material = new THREE.MeshNormalMaterial();
        this._mesh = new THREE.Mesh(geometry, material);

        this._renderer = new THREE.WebGLRenderer({ antialias: true });
    }

    public Animate(): void {
        requestAnimationFrame(() => this.Animate());

        this._mesh.rotation.x += 0.01;
        this._mesh.rotation.y += 0.01;

        this._renderer.render(this._scene, this._camera);
        console.log('hola');
    }
    public Init(): void {
        this._camera.position.z = 1;
        this._scene.add(this._mesh);
        this._renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this._renderer.domElement);
        console.log('hola');
    }
}