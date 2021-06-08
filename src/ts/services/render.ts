import CanvasService from "./canvas";

export default class RenderService {

    public static render () {

        // Get the canvas context
        const ctx = CanvasService.context;

        // Create a path
        const path = new Path2D();

        this.drawCircle(path, {
            x: 100,
            y: 100,
            radius: 50,
            startAngle: 0,
            endAngle: 2 * Math.PI,
        });

        // Draw the path
        ctx.stroke(path);

    }

    private static drawCircle (path: Path2D, options = {}): Path2D {

        let x = options["x"] || 0;
        let y = options["y"] || 0;

        let radius = options["radius"];
        let startAngle = options["startAngle"];
        let endAngle = options["endAngle"];

        if (typeof radius === "undefined") throw new Error("Radius is undefined!");
        if (typeof startAngle === "undefined") throw new Error("Start Angle is undefined!");
        if (typeof endAngle === "undefined") throw new Error("End Angle is undefined!");

        // Add a circle to the path
        path.arc(x, y, radius, startAngle, endAngle);
        return path;

        // Documentation on "path.arc"
        // - https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc

    }

}