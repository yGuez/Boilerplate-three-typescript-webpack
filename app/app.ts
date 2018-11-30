import './style.css'
import { Scene } from './Scene';

export class App {
    public static main() {
        let scene = new Scene();
        scene.Init();
        scene.Animate();
    }
}

App.main();