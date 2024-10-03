<template>
    
       
        <!-- PEDIDOS -->
        <v-row>
            <v-col cols="12" class="alineartexto">
                <p style="margin-left: 20px;">Pedidos</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="4" lg="4">
                <v-card elevation="8" style="background-color:green;" class="tarjetas-headers">
                    <v-card-title style="color:white;font-weight:bold">
                        Entregados
                    </v-card-title>
                    <v-row>
                        <v-col cols="6">
                            <v-card-text class="tarjetatexto" style="color:white">
                                50 pedidos
                            </v-card-text>
                            
                        </v-col>
                        <v-col cols="6">
                            <v-img class="imagen-card" :src="require('@/assets/entregados.png')"></v-img>
                        </v-col>
                    </v-row>



                </v-card>
            </v-col>
            <v-col cols="12" md="4" lg="4">
                <v-card elevation="8" style="background-color:orange;" class="tarjetas-headers">
                    <v-card-title style="color:white; font-weight:bold;">
                        Procesos
                    </v-card-title>
                    <v-row>
                        <v-col cols="6">
                            <v-card-text class="tarjetatexto" style="color:white">
                                20 pedidos
                            </v-card-text>
                           
                        </v-col>
                        <v-col cols="6">
                            <v-img class="imagen-card" :src="require('@/assets/procesos.png')"></v-img>
                        </v-col>
                    </v-row>

                </v-card>
            </v-col>
            <v-col cols="12" md="4" lg="4">
                <v-card elevation="8" class="tarjetas-headers bg-indigo">
                    <v-card-title style="color:white;font-weight:bold;">
                        Pendientes
                    </v-card-title>
                    <v-row>
                        <v-col cols="6">
                            <v-card-text class="tarjetatexto" style="color:white">
                                40 pedidos
                            </v-card-text>
                        </v-col>
                        <v-col cols="6">
                            <v-img class="imagen-card" :src="require('@/assets/pendientes.png')"></v-img>
                        </v-col>
                    </v-row>


                </v-card>
            </v-col>
        </v-row>

        <!-- CLIENTES MONTOS -->
        <v-row>
            <v-col cols="6" class="alineartexto">
                <p>Clientes nuevos</p>
            </v-col>
            <v-col cols="6" class="alineartexto">
                <p>Montos</p>
            </v-col>
        </v-row>
        
        <v-row>
            <v-col cols="6">
                <v-card elevation="8" class="clientes">
                   
                        <v-data-table
                          
                          :headers="headers"
                          :items="items"
                          item-key="name"
                          items-per-page="2"
                        >
                    <template v-slot:[`column.header.name`] = "{headers}">
                        <span class="custom-header">{{headers.title}}</span>
                    </template>
                    </v-data-table>
                      
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card elevation="8" class="montotarjeta bg-deep-purple-lighten-1">
                    <v-card-title>
                        Monto Entregados
                    </v-card-title>
                    <v-img class="ima-montos" :src="require('@/assets/calculadora.png')"></v-img>
                    <p class="monto-texto">S/.12341234.00</p>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card elevation="8" class="montotarjeta" style="background-color: dodgerblue;">
                    <v-card-title>
                        Monto Pendientes
                    </v-card-title>
                    <v-img class="ima-montos" :src="require('@/assets/hoja.png')"></v-img>
                    <p class="monto-texto">S/.12341234.00</p>
                </v-card>
            </v-col>
        </v-row>

        <!-- CONDUCTORES -->
        <v-row>
            <v-col cols="6" class="alineartexto">
                <p>Conductores</p>
            </v-col>
            <v-col cols="6" class="alineartexto">
                <p>Pedidos aceptados</p>
            </v-col>
        </v-row>

        <!-- CONDUCTORES - PEDIDOS -->
        <v-row>
            <v-col cols="6">
                <v-card elevation="8">
                    <v-data-table
                    :headers="headers"
                    :items="items"
                    item-key="name"
                    items-per-page="2"
                  ></v-data-table>
                </v-card>
            </v-col>

            <v-col cols="6">
                <v-card elevation="8">
                    <v-data-table
                    :headers="headers"
                    :items="items"
                    item-key="name"
                    items-per-page="2"
                  ></v-data-table>
                </v-card>
            </v-col>
        </v-row>

  </template>
  
<script>
export default{
    name:'Dashboard2',
    data(){
        return{
            headers: [
                { title: 'Pyramid', value: 'name' },
                { title: 'Location', value: 'location' },
                { title: 'Construction Date', value: 'constructionDate' },
                {
                    title: 'Dimensions',
                    align: 'center',
                    children: [
                        { title: 'Height (m)', value: 'height' },
                        { title: 'Base (m)', value: 'base' },
                        { title: 'Volume (m³)', value: 'volume' },
                    ],
                },
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
.tarjetatexto {
    font-size: 45px;
    text-align: end;
    justify-content: right;
    white-space: nowrap; /* Evitar que el texto se divida */
}



.alineartexto {
    text-align: left;
    font-style: inherit;
    font-weight: bold;
    font-size:xx-large;

}
.montotarjeta {
   
   
   min-height: 225px;
   color: #ffffff;
   

}
.monto-texto{
    font-weight: bold;
    font-size: 30px;
}
.ima-montos{
 height: 90px;
 object-fit: cover;

}
.tablasdata{
    
    color:#4A90E2;
}

</style>