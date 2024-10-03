<template>
    <v-card>
        <v-layout>
            <v-navigation-drawer theme="dark" permanent style="background-color:black">
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

            <v-main>


            </v-main>
        </v-layout>
    </v-card>

</template>
<script>


export default {
    name: 'Dashboard',
    data() {
        return {
            headers: [
                { title: 'Pyramid', value: 'name' },
                { title: 'Location', value: 'location' },
                { title: 'Construction Date', value: 'constructionDate' },
            
                        { title: 'Height (m)', value: 'height' },
                        { title: 'Base (m)', value: 'base' },
                        { title: 'Volume (m³)', value: 'volume' },
                    
                
            ],
            items: [
                {
                    name: 'Great Pyramid of Giza',
                    location: 'Egypt',
                    height: '146.6',
                    base: '230.4',
                    volume: '2583285',
                    constructionDate: 'c. 2580–2560 BC',
                },
                {
                    name: 'Pyramid of Khafre',
                    location: 'Egypt',
                    height: '136.4',
                    base: '215.3',
                    volume: '1477485',
                    constructionDate: 'c. 2570 BC',
                },
                {
                    name: 'Red Pyramid',
                    location: 'Egypt',
                    height: '104',
                    base: '220',
                    volume: '1602895',
                    constructionDate: 'c. 2590 BC',
                },
                {
                    name: 'Bent Pyramid',
                    location: 'Egypt',
                    height: '101.1',
                    base: '188.6',
                    volume: '1200690',
                    constructionDate: 'c. 2600 BC',
                },
                {
                    name: 'Pyramid of the Sun',
                    location: 'Mexico',
                    height: '65',
                    base: '225',
                    volume: '1237097',
                    constructionDate: 'c. 200 CE',
                },
                {
                    name: 'Bent Pyramid',
                    location: 'Egypt',
                    height: '101.1',
                    base: '188.6',
                    volume: '1200690',
                    constructionDate: 'c. 2600 BC',
                },
                {
                    name: 'Pyramid of the Sun',
                    location: 'Mexico',
                    height: '65',
                    base: '225',
                    volume: '1237097',
                    constructionDate: 'c. 200 CE',
                },
            ],
        }
    }
}
</script>
<style scoped>
.v-main {


    scrollbar-width: none;
    /* Firefox /
    -ms-overflow-style: none; / Internet Explorer and Edge /
  }
  
  .v-main::-webkit-scrollbar {
    display: none; / Chrome, Safari, Opera */
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

.alineartexto {
    text-align: left;
    font-style: inherit;

}

main {
    margin-left: 10px;
    margin-right: 10px;
}

.tarjetas-headers {
    height: 85%;

}

.imagen-card {
    align-items: left;
    height: 70%;
    object-fit: contain;
}

.tarjetatexto {
    font-size: 80px;
    text-align: end;
    justify-content: right;
}

.montotarjeta {
    border-radius: 50%;
    height: 30%;
    width: 75%;
    margin-left: 10%;

}

.clientes {
    height: 30%;
    overflow-y: auto;
}

/* Cambiar el ancho de la barra de scroll */
.clientes::-webkit-scrollbar {
    width: 10px;
    /* Ancho de la barra */
}

/* Cambiar el color de la pista de la barra de scroll */
.clientes::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    /* Color de fondo de la pista */
}

/* Cambiar el color de la barra de scroll */
.clientes::-webkit-scrollbar-thumb {
    background-color: #888;
    /* Color de la barra */
    border-radius: 10px;
    /* Bordes redondeados de la barra */
}

/* Cambiar el color de la barra al hacer hover */
.clientes::-webkit-scrollbar-thumb:hover {
    background-color: #555;
    /* Color al pasar el mouse */
}
</style>