import * as PIXI from "pixi.js"
import { item } from "../ui/item"

export class InventoryItem extends PIXI.Sprite {
    collected:boolean
    constructor(texture:PIXI.Texture, x: number, y: number, scale: number){
        super(texture)
        this.scale.set(scale)
        this.anchor.set(0.5)
        this.x = x
        this.y = y
        this.interactive = true
        this.collected = false
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))

        this.on('pointerdown', () => this.onClick());
    }

    private onClick() {
        console.log('clicked on pot');
        document.getElementsByTagName('canvas')[0].remove();
        new item()
    }

    collect(){
        this.collected = true
    }

    onKeyDown(e: KeyboardEvent): any {
        // if (this.alpha != 0) {
        //     switch (e.key.toUpperCase()) {
        //         case "I":
        //             this.alpha = 0
        //             this.interactive = false
        //     }
        // } else {
        //     switch (e.key.toUpperCase()) {
        //         case "I":
        //             if(this.collected){
        //                 this.alpha = 1
        //             }else{
        //                 this.alpha = 0.2
        //             }
        //             this.interactive = true
        //     }
        // }
    }
}