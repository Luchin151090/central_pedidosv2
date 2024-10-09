<template>
    <div>
        <!--TITULO PEDIDO-->
        <v-row>
            <v-col cols="12">
                <p>Pedidos online</p>
            </v-col>
        </v-row>
        <!--TABLA-->
        <v-row>
            <v-col cols="12" md="12" lg="12">
                <v-card elevation="8">
                    <v-data-table :headers="headers" :items="items" item-key="name" items-per-page="2"></v-data-table>
                </v-card>
            </v-col>
        </v-row>
        <!--TITULO GESTIÓN-->
        <v-row>
            <v-col cols="12">
                <p>Gestión</p>
            </v-col>
        </v-row>

        <!-- FORMULARIO -->
        <v-row>
            <v-col cols="12" md="12" lg="12">
                <v-card>
                    <v-stepper v-model="activeStep" :items="['Cliente - Ubicación', 'Productos']">
                        <!-- Contenido del primer paso -->
                        <template v-slot:[`item.1`]>


                            <v-row>
                                <v-col cols="3">
                                    <v-card elevation="5" class="mb-3 pa-2">
                                        <v-card-title>
                                            Cliente
                                        </v-card-title>
                                        <v-text-field label="Nombre"></v-text-field>


                                        <v-text-field label="Apellidos"></v-text-field>
                                        <v-text-field label="Teléfono"></v-text-field>
                                        <v-text-field label="Dirección"></v-text-field>
                                        <v-text-field label="Distrito"></v-text-field>
                                        <v-row class="pa-3">
                                            <v-text-field label="Latitud"></v-text-field>
                                            <v-spacer></v-spacer>
                                            <v-text-field label="Longitud"></v-text-field>
                                        </v-row>
                                        <v-text-field label="Fecha de pedido"></v-text-field>

                                    </v-card>


                                </v-col>

                                <v-col cols="9">
                                    <v-card elevation="5" style="background-color: bisque;">
                                        <v-card-title>
                                            Mapa
                                        </v-card-title>

                                        <v-text-field label="Busqueda" prepend-inner-icon="mdi-magnify">

                                        </v-text-field>

                                    </v-card>
                                </v-col>
                            </v-row>

                        </template>

                        <!-- Contenido del segundo paso -->
                        <template v-slot:[`item.2`]>
                            <v-card elevation="6">
                                <v-row>
                                    <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
                                        <v-slide-group-item v-for="n in 5" :key="n"
                                            v-slot="{ isSelected, toggle, selectedClass }">
                                            <v-card :class="['ma-4', selectedClass]" color="grey-lighten-1" height="200"
                                                width="100" @click="toggle">
                                                <div class="d-flex fill-height align-center justify-center">
                                                    <v-scale-transition>
                                                        <v-icon v-if="isSelected" color="white"
                                                            icon="mdi-close-circle-outline" size="48"></v-icon>
                                                    </v-scale-transition>
                                                </div>
                                            </v-card>
                                        </v-slide-group-item>
                                    </v-slide-group>
                                </v-row>
                                <v-row>
                                    <v-slide-group v-model="model1" class="pa-4" selected-class="bg-success" show-arrows>
                                        <v-slide-group-item v-for="n in 5" :key="n"
                                            v-slot="{ isSelected, toggle, selectedClass }">
                                            <v-card :class="['ma-4', selectedClass]" color="grey-lighten-1" height="200"
                                                width="100" @click="toggle">
                                                <div class="d-flex fill-height align-center justify-center">
                                                    <v-scale-transition>
                                                        <v-icon v-if="isSelected" color="white"
                                                            icon="mdi-close-circle-outline" size="48"></v-icon>
                                                    </v-scale-transition>
                                                </div>
                                            </v-card>
                                        </v-slide-group-item>
                                    </v-slide-group>
                                </v-row>
                                   
                               
                            </v-card>
                        </template>

                       

                        <!-- Customización de botones -->
                        <template v-slot:prev="">
                            <v-btn text @click="prevs">Anterior</v-btn>
                        </template>

                        <template v-slot:next="">
                            <v-btn text @click="nexts">Siguiente</v-btn>
                        </template>
                    </v-stepper>

                </v-card>
            </v-col>
        </v-row>


    </div>
</template>
<script>


export default {
    name: 'Gestion',
    data() {
        return {
            model:null,
            model1:null,
            activeStep: 1,
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
    },
    methods: {
        prevs() {
            if (this.activeStep > 1) {
                this.activeStep--;
            }

        },
        nexts() {
            if (this.activeStep < 3) {
                this.activeStep++;
            }
        }
    }
}
</script>
<style scoped></style>