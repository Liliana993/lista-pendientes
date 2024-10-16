import { state } from "./state";

class Lista extends HTMLElement{
    shadow = this.attachShadow({mode: 'open'});

    constructor(){
        super();
        this.render();
    }
    connectedCallback(){
     state.subscribe(()=>{
        this.render();
     })
    }
    render(){
        const list = state.getState().list;
        console.log(list);
        
        this.shadow.innerHTML = `
         <div class="lista">
         <ul>${list.map((item)=>{ return  `<li>${item}<input type="checkbox"/></li>`
         }).join(" ")}
         </ul>
         </div>
        `;

        const style = document.createElement('style');
        style.innerHTML = `
        .lista{
        display: flex;
        margin: auto;
        width: 400px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: none;
        margin-top: 50px;
        border-radius: 20px;
        background-color: #F7FFF7;
        }
        ul{
        list-style: none;
        }
        li{
        line-height: 1.8;
        letter-spacing: 0.1rem;
        word-spacing: 0.5rem;
        }
        input{
        margin-left: 60px;
        }
        `;
        this.shadow.appendChild(style);
    }

}
customElements.define('lis-el', Lista);