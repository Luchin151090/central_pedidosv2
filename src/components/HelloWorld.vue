<template>
  <v-app>
    <v-main>
      <v-container>
        <!-- Botón de Vuetify -->
        <v-btn color="primary" @click="sayHello">
          ¡Hola Mundo!
        </v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    sayHello() {
      alert('¡Hola Mundo!');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
