  
<template>
<div class="card border-success mb-3 m-5" >
  <div class="card-header bg-transparent border-success">Productos comprado</div>
  <div class="card-body text-success">
    <ul class="list-group list-group-flush">
      <li v-for="juego in $store.state.carritoDeCompras" :key="juego.codigo" class="list-group-item">codigo: {{ juego.codigo }} -  Nombre: {{ juego.nombre }} - Stock: {{ juego.stock }} - Precio:${{ juego.precio }}</li>
    </ul>
  </div>
  <div class="card-footer bg-transparent border-success"> TOTAL A PAGAR : <span class=" h4 m-3 border border-success">${{ $store.state.totalVentas}}</span></div>
</div>

</template>

<script>

export default {
  name: 'Total'
};
</script>

<style></style>