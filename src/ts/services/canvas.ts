import RenderService from "./render";

export default class CanvasService {

    public static element: HTMLCanvasElement;
    public static context: CanvasRenderingContext2D;

    public static initialize (): void {

        console.log("Initializing the canvas service");

        CanvasService.element = document.createElement("canvas");
        CanvasService.context = CanvasService.element.getContext("2d");

        document.body.append(CanvasService.element);

        CanvasService.onResize();

        window.addEventListener("resize", () => {
            CanvasService.onResize();
        });

    }

    private static onResize (): void {

        CanvasService.element.width = window.innerWidth;
        CanvasService.element.height = window.innerHeight;

        // The canvas gets completely wiped on resize
        // So we re-render the canvas

        CanvasService.render();

    }

    private static render (): void {
        RenderService.render();
    }

}