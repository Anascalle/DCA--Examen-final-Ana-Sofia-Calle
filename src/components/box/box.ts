export enum Attributes{
    "color"="color",
    "letter"="letter"
}

class Box extends HTMLElement{
    color?:string;
    letter?:string;


    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    attributeChangedCallback(propName: Attributes, oldValue: string |undefined, newValue: string | undefined){
        this[propName] = newValue;
        this.render();
    }

    
    static getObservedAttributes(){
        return ["color","letter"]
    }

    connectedCallback() {
        this.render();
    }
    render(){
        this.shadowRoot!.innerHTML = `
            <style>
                :host {
                    display: block;
                }
            </style>
            <slot></slot>
        `;
    }
}
customElements.define("my-box",Box);
export default Box