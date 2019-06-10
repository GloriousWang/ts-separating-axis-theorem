﻿class Input {
    private static keys: { [key: string]: boolean } = { };

    private static buttons: { [key: string]: boolean } = { };

    private static mousePos: Vector2D;


    /**
     * Initializes the Input module
     * 
     */
    public static init = function () {
        Input.mousePos = new Vector2D(0, 0);

        window.addEventListener("error", Input.onError);
        window.addEventListener("keydown", Input.onKeyDown);
        window.addEventListener("keyup", Input.onKeyUp);
        window.addEventListener("mousedown", Input.onMouseDown);
        window.addEventListener("mouseup", Input.onMouseUp);
        window.addEventListener("mousemove", Input.onMouseMove);
    };


    /**
     * Disposes the Input module
     * 
     */
    public static dispose = function () {
        window.removeEventListener("error", Input.onError);
        window.removeEventListener("keydown", Input.onKeyDown);
        window.removeEventListener("keyup", Input.onKeyUp);
        window.removeEventListener("mousedown", Input.onMouseDown);
        window.removeEventListener("mouseup", Input.onMouseUp);
        window.removeEventListener("mousemove", Input.onMouseMove);

        Input.keys = {};
        Input.buttons = {};
        Input.mousePos = null;
    }


    /**
     * Handles not-handled error events
     * @param event
     * 
     */
    private static onError = function (event: ErrorEvent) {
        throw event;
    }


    /**
     * Handles keydown events and updates keystates
     * @param event
     * 
     */
    private static onKeyDown = function (event) {
        Input.keys[event.code] = true;
    }

    /**
     * Handles keyup events and updates keystates
     * @param event
     * 
     */
    private static onKeyUp = function (event) {
        delete Input.keys[event.code];
    }

    /**
     * Check whether a given key is down
     * @param code
     * 
     */
    public static isKeyDown = function isKeyDown(code: string): boolean {
        return Input.keys[code] === true;
    }




    /**
     * Handles mousedown events and updates buttonstates
     * @param event
     * 
     */
    private static onMouseDown = function (event: MouseEvent) {
        Input.buttons[event.button] = true;
    }

    /**
     * Handles mouseup events and updates buttonstates
     * @param event
     * 
     */
    private static onMouseUp = function (event: MouseEvent) {
        delete Input.buttons[event.button];
    }

    /**
     * Check whether a given button is down
     * 0 = left click
     * 1 = middle click
     * 2 = right click
     * @param button
     * 
     */
    public static isButtonDown = function (button: number): boolean {
        return Input.buttons[button] === true;
    }


    /**
     * Handles mouse movement and update mousePos
     * @param event
     * 
     */
    private static onMouseMove = function (event: MouseEvent) {
        Input.mousePos.x = event.clientX;
        Input.mousePos.y = event.clientY;
    }

    /**
     * Returns mousePos vector
     * 
     */
    public static getMousePos = function (): Vector2D {
        return Input.mousePos;
    }
}
