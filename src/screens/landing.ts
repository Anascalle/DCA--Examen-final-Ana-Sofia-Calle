import "./components/export"
import { Screen } from "../types/navegate";
import { AppState } from "../types/store";
import "../components/export"
import { dispatch, addObserver, appState } from "../store";
import style from "styles.css"
class LANDING extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: "open"});
        addObserver(this);
    }

    connectedCallback() {
        this.render();
    }
   

    render() {
        if (this.shadowRoot)this.shadowRoot.innerHTML= `<style>${style}</style>`
        const box = this.ownerDocument.createElement("my-box")
  
    }
}

customElements.define('app-landing', LANDING)