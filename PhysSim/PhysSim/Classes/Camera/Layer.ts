class Layer {
    public queue: any[];

    constructor() {
        this.queue = [];
    }

    public render(camera) {
        for (var i: number = 0; i < this.queue.length; i++) {
            this.queue[i].render(camera.ctx, camera)
        }
    }
}
