<template>
  <v-app>
    <!-- Drawer y App Bar -->
    <v-navigation-drawer class="bg-indigo" app>
      <div class="circle-container">
        <div class="cajaimagen">
            <v-img :src="require('@/assets/nuevito.png')" class="imgcircle"></v-img>

        </div>
    </div>

    <v-list nav>
        <div class="cajablanco">
            <p>Bienvenid@ Jorge a<br>Sol Vida </p>
        </div>
        <v-list-item prepend-icon="mdi-home" title="Inicio" value="inicio"></v-list-item>
        <v-list-item prepend-icon="mdi-file-account-outline" title="Gestión" value="gestion"></v-list-item>
        <v-list-item prepend-icon="mdi-account-supervisor-circle" title="Supervisión"
            value="supervisors"></v-list-item>
        <v-list-item prepend-icon="mdi-motorbike" title="Ruteo" value="clockin"></v-list-item>
    </v-list>
    </v-navigation-drawer>
   

    <!-- Aquí dentro el contenido dinámico -->
    <v-main>
      
        <router-view></router-view>
      
    </v-main>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
   // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 /* margin-top: 60px;*/
}
.imgcircle {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cajaimagen {
  height: 100px;
  width: 100px;
  background-color: rgb(34, 21, 150);
  border-radius: 50%;
  overflow: hidden;
  padding: 15px;


}

.cajablanco {
  height: 200px;
  /*background-color: white;*/
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* Asegura que el contenedor ocupe todo el alto del drawer */



}
</style>
