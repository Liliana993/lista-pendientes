const state = {
    data: {
      list: [],
    },
    listeners: [], // los callbacks
    getState() {
      return this.data;
    },
    setState(newState) {
       // modifica this.data (el state) e invoca los callbacks
       this.data = newState;
       for(const cb of this.listeners){
        cb();
       }
       console.log('Soy es state y ha cambiado', this.data);
    },
    subscribe(callback: (any) => any) {
       // recibe callbacks para ser avisados posteriormente
       this.listeners.push(callback);
    },
    addItem(item:string) {
      // suma el nuevo item a la lista
      const currentState = this.getState();
      currentState.list.push(item);
      //guardamos en el state
      this.setState(currentState);
    },
  };

  export {state};