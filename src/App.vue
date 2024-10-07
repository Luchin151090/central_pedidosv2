<template>
  <v-app>
    <!-- Drawer y App Bar -->

    <v-navigation-drawer class="barracolor" app>
      <div class="contenedor">
        <div class="hijo">
          <v-img :src="require('@/assets/nuevito.png')" ></v-img>
        </div>
      </div>


      
     
      <div class="cajablanco">
        <v-row>
          <v-col cols="6">
            <div class="imgcircle">
              <v-img :src="require('@/assets/nuevito.png')" ></v-img>
            </div>
          </v-col>
          <v-col cols="6" class="d-flex align-center justify-center">
            <p>Antonio Jorge</p>
          </v-col>
        </v-row>
        
      </div>
      
      <v-list nav>


        <v-list-item prepend-icon="mdi-home" title="Inicio" value="inicio"></v-list-item>
        <v-list-item prepend-icon="mdi-file-account-outline" title="Gestión" value="gestion"></v-list-item>
        <v-list-item prepend-icon="mdi-account-supervisor-circle" title="Supervisión" value="supervisors"></v-list-item>
        <v-list-item prepend-icon="mdi-motorbike" title="Ruteo" value="clockin"></v-list-item>

        <v-list-item prepend-icon="mdi-door" title="Salir" value="salir"></v-list-item>
      </v-list>
    </v-navigation-drawer>


    <!-- Aquí dentro el contenido dinámico -->
    <DashboardVue v-if="this.$router.currentRoute.name !== 'LoginForm'" />
    <v-main class="ma-3">

      <router-view></router-view>

    </v-main>
  </v-app>
</template>

<script>
import DashboardVue from './components/DashboardVue.vue';

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
.contenedor {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hijo {
  width: 100px;
  height: 100px;
 
 
}

.imgcircle {
height: 80px;
width: 80px;
 border-radius: 50%;
  background-color: rgb(63, 65, 87);
  display: flex;
  justify-content: center;
  align-items: center;
  padding:10px;


}


.barracolor {
  background-color: #292e33;
  color: white;
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
 padding-left: 20px;
 padding-right: 10px;
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
