import './style.css'
import { Scene } from './Scene';

export class App {
    public static main() {
        let scene = new Scene();
        scene.init();
        scene.animate();
        window.addEventListener('resize', () => {
            scene.resize();
      });
    }
}

App.main();