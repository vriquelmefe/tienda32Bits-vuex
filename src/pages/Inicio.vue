<template>
    <div class="styleInicio">
        <h1 class="tituloClass">{{ $store.state.titulo}}</h1>
        <h2>{{ $store.state.subtitulo }}</h2>
    </div>
</template>

<style scoped>
.styleInicio{
    margin-top: 100px;
    padding: 40px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.tituloClass{
    font-size: 60px;
    color: rgb(90, 153, 28);
}

</style>