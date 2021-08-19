  
<template>
  <div>
    <div class="container mx-4">Juegos con Stock:<b> {{ $store.getters.productosConStock }}</b></div>

    <ul>
      <li v-for="(juego, index) in $store.state.juegos" :key="index" class="m-3">{{ juego.codigo }} |{{ juego.nombre }} | {{ juego.stock }} | {{ juego.precio }}
      <button type="button" @click="agregarProducto(juego, index)" class="btn btn-success">Vender</button></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'JuegosConStock',
  components: {
  },
   methods:{
    agregarProducto(juego, index) {
      this.$store.dispatch("agregarProductosAlCarritoDeCompras", {juego, index,});
    },
  },
};
</script>