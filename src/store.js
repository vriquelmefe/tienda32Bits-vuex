import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    titulo: '32bits',
    subtitulo: 'Juegos de PC y consolas',
    busquedaPorCodigo: "",
    carritoDeCompras: [],
    totalVentas : 0,
    juegos: [
      {
        codigo: "0001",
        nombre: "Sekiro",
        stock: 100,
        precio: 30000,
        color: "red",
        destacado: true,
      },
      {
        codigo: "0002",
        nombre: "Fifa 21",
        stock: 100,
        precio: 25000,
        color: "blue",
        destacado: false,
      },
      {
        codigo: "0003",
        nombre: "Gears of War 4",
        stock: 100,
        precio: 15000,
        color: "green",
        destacado: true,
      },
      {
        codigo: "0004",
        nombre: "Mario Tennis Aces",
        stock: 100,
        precio: 35000,
        color: "yellow",
        destacado: false,
      },
      {
        codigo: "0005",
        nombre: "Bloodborne",
        stock: 100,
        precio: 10000,
        color: "blue",
        destacado: false,
      },
      {
        codigo: "0006",
        nombre: "Forza Horizon 4",
        stock: 100,
        precio: 20000,
        color: "red",
        destacado: true,
      },
    ],
  },
  getters: {
    productosFiltrados(state) {
      return state.juegos.filter(
        (juego) => juego.codigo === state.busquedaPorCodigo
      );
    },
    productosConStock: (state) => {
      return state.juegos.filter((juego) =>  juego.stock > 0).length;
    },
    sumaTotalStock: (state) => 
      state.juegos.reduce((acumulador,juego) => { 
        acumulador  += juego.stock
        return acumulador }, 0)
    ,
  },
  mutations: {
    SET_BUSQUEDA(state, value) {
      state.busquedaPorCodigo = value;
    },
    SUBSTRACT_STOCK(state,productIndex) {
      state.juegos[productIndex].stock -= 1;
    },
    ADD_STOCK_TO_SHOPPINGLIST(state, productIndex) {
      state.carritoDeCompras[productIndex].stock += 1;
    },
    ADD_VENTAS(state, juego) {
      state.carritoDeCompras.push(juego);
    },
    SET_TOTAL_VENTA(state, juego) {
      state.totalVentas += juego.precio;
    }
  },
  actions: {
    agregarProductosAlCarritoDeCompras({ state, commit }, { juego, index }) {
      const productoEncarritoDecompras = state.carritoDeCompras.findIndex(
        (productoCarrito) => productoCarrito.codigo === juego.codigo
      )
      setTimeout(() => {
        if(productoEncarritoDecompras !== -1) {
          commit("ADD_STOCK_TO_SHOPPINGLIST", productoEncarritoDecompras);
          commit("SUBSTRACT_STOCK", index);
        }else{
          commit("SUBSTRACT_STOCK", index)
        }
        setTimeout(() => {
          commit("ADD_VENTAS", { ...juego, stock: 1 });
          commit("SET_TOTAL_VENTA", juego)  
          alert(`Juego ${ juego.nombre} - Venta procesada con exito`);

        },1000)
        
      },2000)
    },
  }
});

export default store;