<template>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item mx-2">
          <router-link class="nav-link" :to="{ path: '/' }">Inicio</router-link>
        </li>
        <li class="nav-item mx-2">
          <router-link class="nav-link" :to="{ path: '/busquedas' }"
            >Busquedas</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ path: '/ventas' }">Ventas</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ path: '/total' }">Total</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {};
</script>

<style></style>