<template>
    <v-container class="fondito d-flex justify-center align-center" fluid style="height: 100vh; background-color:burlywood">
        <v-card style="height: 85%; width: 35%;" class="pa-0 ma-0 card-content">
            <p class="mb-5" style="font-size:15px; color: black;">
                Bienvenido a Cotecsa
            </p>
            <v-card-subtitle>
                Por favor ingresa tus credenciales
            </v-card-subtitle>
            <div style="margin-top: 20px;">
                <v-text-field v-model="usuario" style="color:blue;" dense width="200px" label="Usuario"
                    variant="underlined"></v-text-field>
                <v-text-field :type="mostrar ? 'text' : 'password'" v-model="contrasena" style="color:blue;" dense width="200px" label="Contraseña"
                    :append-inner-icon="mostrar ? 'mdi-eye-off' : 'mdi-eye'" @click:append-inner="mostrarcontrasena" variant="underlined">
                </v-text-field>
            </div>
            <div style="margin-top:20px;">
                <v-btn style="background-color: blue; color:white; border-radius:20px" min-width="200px" max-width="200px">Ingresar</v-btn>
            </div>


        </v-card>

        <v-card style="height: 85%; width: 35%; background-color:blue" class="pa-0 ma-0">
            <div class="divimagen">
                <v-img :src="sol" contain></v-img>
            </div>
            <div class="divimagen">
                
                <v-img :src="logo" contain></v-img>
            </div>
            
        </v-card>
    </v-container>
</template>



<script>
import logo from '@/assets/bodegoncito.png';
import sol from '@/assets/nuevito.png'
import axios from "axios";
export default {
    name: 'LoginForm',
    data() {
        return {
            usuario:'',
            contrasena:'',
            mostrar:false,
            logo,
            sol
        }
    },
    methods:{
        mostrarcontrasena(){
            this.mostrar = !this.mostrar;
        },
        async login(){
            var response = await axios.post("")
        }
    }
}
</script>

<style scoped>
.divimagen{
   
   display: flex;
   justify-content: center;
   align-self: center;
    height: 40%;
    width: 100%;
    margin-top: 50px;
}
.fondito {
    background-image: url('https://i.pinimg.com/564x/4c/19/f7/4c19f7920a2fde1c2cb5a0d19b46e3c3.jpg');
    background-size: cover;
    /* Asegura que la imagen cubra todo el contenedor */
    background-position: center;
    /* Centra la imagen dentro del contenedor */
    background-repeat: no-repeat;
    /* Evita que la imagen se repita */
    background-attachment: fixed;
    /* Opcional: Fija la imagen en la vista del navegador */
    height: 100vh;
    /* Asegura que el contenedor tenga al menos la altura de la ventana del navegador */
}

.card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* Centra verticalmente */
    align-items: center;
    /* Centra horizontalmente */
    text-align: center;
    /* Centra el texto dentro de los elementos */
}
</style>