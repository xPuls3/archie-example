import Application from "./application";
import CanvasService from "./services/canvas";

export default class Initializer {

    public static initialize (): void {

        console.log("Initializing");

        window.addEventListener("DOMContentLoaded", async () => {

            await CanvasService.initialize();
            await Application.initialize();

            console.log("Initializing complete");

        });

    }

}