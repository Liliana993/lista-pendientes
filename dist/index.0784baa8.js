const t={data:{list:[]},listeners:[],getState(){return this.data},setState(t){for(let e of(this.data=t,this.listeners))e();console.log("Soy es state y ha cambiado",this.data)},subscribe(t){this.listeners.push(t)},addItem(t){let e=this.getState();e.list.push(t),this.setState(e)}};class e extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}connectedCallback(){let e=this.shadow.querySelector(".form");e?.addEventListener("submit",e=>{e.preventDefault();let n=e.target;t.addItem(n.text.value)})}render(){this.shadow.innerHTML=`
         <h1>Lista de pendientes</h1>
        <form class="form">
        <input class="input" name="text" />
        <button>Agregar</button>
        </form>
        `;let t=document.createElement("style");t.innerHTML=`
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
        `,this.shadow.appendChild(t)}}customElements.define("form-el",e);class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}connectedCallback(){t.subscribe(()=>{this.render()})}render(){let e=t.getState().list;console.log(e),this.shadow.innerHTML=`
         <div class="lista">
         <ul>${e.map(t=>`<li>${t}<input type="checkbox"/></li>`).join(" ")}
         </ul>
         </div>
        `;let n=document.createElement("style");n.innerHTML=`
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
        `,this.shadow.appendChild(n)}}customElements.define("lis-el",n),t.subscribe(function(){localStorage.setItem("state-cache",JSON.stringify(t.getState()))});
//# sourceMappingURL=index.0784baa8.js.map
