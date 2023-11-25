import "./components/export"
import { Screen } from "../types/navegate";
import { dispatch, addObserver } from "../store";
import style from "./style.css"

const form = {
    name: "",
    color:"",
    inicial: "",
}

class Dashboard extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this)
    }

    connectedCallback() {
        this.render()
    }
    changename( e:any){
        form.name = e.target.value
    }
    changecolor( e:any){
        form.color = e.target.value
    }
    changeinicial( e:any){
        form.inicial = e.target.value
    }

    render() {
        if (this.shadowRoot)
        this.shadowRoot.innerHTML= `<style>${style}</style> <h1>Ingrese sus Datos</h1>`
        const something = this.ownerDocument.createElement('div');
        this.shadowRoot?.appendChild(something);

        const inputname = this.ownerDocument.createElement('input');
        inputname.setAttribute('type', 'text');
        inputname.placeholder ="Escribe tu nombre"
        inputname.addEventListener("change", this.changename)
        something.appendChild(inputname);

        const inputcolor = this.ownerDocument.createElement('input');
        inputcolor.setAttribute('type', 'text');
        inputcolor.placeholder ="Escribe tu color favorito"
        inputcolor.addEventListener("change", this.changecolor)
        something.appendChild(inputcolor);

        const inputinicial = this.ownerDocument.createElement('input');
        inputinicial.setAttribute('type', 'text');
        inputinicial.placeholder ="Escribe tu inicial"
        inputinicial.addEventListener("change", this.changeinicial)
        something.appendChild(inputinicial);

        const button = this.ownerDocument.createElement('button');
        button.textContent = "Continuar";
        button.addEventListener("click", dispatch= Screen.LANDING)

    }
}

customElements.define('app-dashboard', Dashboard)