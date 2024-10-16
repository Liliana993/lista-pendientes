import { state } from "./state";

class Formulario extends HTMLElement{
    shadow = this.attachShadow({mode: 'open'});

    constructor(){
        super();
        this.render();
    }
    connectedCallback(){
        const btn = this.shadow.querySelector('.form');
        btn?.addEventListener('submit', (e)=>{
        e.preventDefault();
        const f = e.target as any;
        state.addItem(f.text.value);
    })
    }
    render(){
        this.shadow.innerHTML = `
         <h1>Lista de pendientes</h1>
        <form class="form">
        <input class="input" name="text" />
        <button>Agregar</button>
        </form>
        `;

        const style = document.createElement('style');
        style.innerHTML = `
        h1{
        text-align: center;
        font-weight: 900;
        font-size: 45px;
        text-decoration: underline;
        color: #020887;
        }

        .form{
        display: flex;
        margin: auto;
        flex-direction: column;
        align-items: center;
        width: 400px;
        }
        .input {
        border: none;
        outline: none;
        border-radius: 15px;
        padding: 1em;
        background-color: #ccc;
        box-shadow: inset 2px 5px 10px rgba(0,0,0,0.3);
        transition: 300ms ease-in-out;
        margin-bottom: 20px;
          }

        .input:focus {
         background-color: white;
         transform: scale(1.05);
        box-shadow: 13px 13px 100px #969696,
             -13px -13px 100px #ffffff;
         }
             button{
             background-color: #16899D;
             appearance: button;
             border: solid transparent;
 border-radius: 16px;
 border-width: 0 0 4px;
 box-sizing: border-box;
 color: #FFFFFF;
 cursor: pointer;
 display: inline-block;
 font-size: 15px;
 font-weight: 700;
 letter-spacing: .8px;
 line-height: 20px;
 margin: 0;
 outline: none;
 overflow: visible;
 padding: 13px 19px;
 text-align: center;
 text-transform: uppercase;
 touch-action: manipulation;
 transform: translateZ(0);
 transition: filter .2s;
 user-select: none;
 -webkit-user-select: none;
 vertical-align: middle;
 white-space: nowrap
             }
 button:after {
 background-clip: padding-box;
 background-color: #1CB0F6;
 border: solid transparent;
 border-radius: 16px;
 border-width: 0 0 4px;
 bottom: -4px;
 content: "";
 left: 0;
 position: absolute;
 right: 0;
 top: 0;
 z-index: -1;
}

button:main, button:focus {
 user-select: auto;
}

button:hover:not(:disabled) {
 filter: brightness(1.1);
}

button:disabled {
 cursor: auto;
}

button:active:after {
 border-width: 0 0 0px;
}

button:active {
 padding-bottom: 10px;
}
        `;
        this.shadow.appendChild(style);
    }

}
customElements.define('form-el', Formulario);