import "./components/export"
import { Screen } from "./types/navegate";
import { AppState } from "./types/store";
import { dispatch, addObserver, appState } from "./store";

class AppContainer extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this)
    }

    connectedCallback() {
        this.render()
    }
   

    render() {
        switch (AppState) {
            case Screen.DASHBOARD:
                const dash = this.ownerDocument.createElement('app-dashboard');
                this.shadowRoot?.appendChild(dash);
                break;
                case Screen.LANDING:
                    const landing = this.ownerDocument.createElement('app-landing');
                    this.shadowRoot?.appendChild(landing);
                    break;
               
            default:
                break;
        }
    

    }
}

customElements.define('app-container', AppContainer)