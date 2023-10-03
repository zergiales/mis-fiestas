<template>
  <div id="proyects">
    <v-row>
      <v-col col="12" class="text-center fade-scroll  d-flex justify-center">
        <h1>Día  {{ new Date().getUTCDate() }}</h1>
        <p></p>
      </v-col>
    </v-row>
    <!--tarjetas donde se muestran todos los proyectos que tengo-->
    <v-row>
      <v-col v-for="proyect in proyects" :key="proyect.name"
      xl="3" lg="4" md="6" sm="12" class="text-center fade-scroll tarjeta d-flex justify-center">
        <v-card class="mx-auto my-12" width="350" height="580">
          <template slot="progress">
            <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
          </template>
          <v-card-title class="d-flex justify-center align-center">
            <strong class="titulillo display-1">{{ proyect.name}}</strong></v-card-title>
          <v-img  contain :src="getImg(proyect.img)" :class="proyect.img" class="imagen"></v-img>
          <div class="d-flex flex-row mb-6">
            <v-img contain v-for="icon in proyect.localizacion"
            :key="icon.localizacion" :src="getImg(icon)" class="iconitos" ></v-img>
          </div>
          <v-card-text class="text-justify">
            <div height="500" class="texto">{{proyect.descripcion}}</div>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-actions class="d-flex justify-center align-center">
            <v-btn color="green" large outlined class="btnC">
             {{ proyect.time}}
            </v-btn>
            <v-btn color="primary" large outlined class="btnC" v-bind:disabled="!proyect.link2"
            @click="abrirVentana(proyect.link2)">
              Leer más
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: 'MyProjects',
  data() {
    return {
      proyects: [
        {
          img: 'capturas/padel',
          name: '| TORNEO DE PADEL BENÉFICO',
          // lugar:'Pistas de la zona deportiva Arroyo del Vallejo',
          descripcion:'Torneo benéfico donde colaboran la peña de Las Torres y el ayuntamiento de Azuqueca',
          time: '18:30 PM',
        },
        {
          img: 'capturas/brick',
          name: 'Brick Game',
          descripcion: 'brick breaker sencillo  (juego arcade)',
          time: '',
        },
        {
          img: 'capturas/ahorcadoIcon',
          name: 'Ahorcado',

          descripcion: 'Ahorcado que realizado con un array  que tiene palabras (POO)',
          time: 'hora',
        },
        {
          img: 'capturas/trivialIcon',
          name: 'Trivial',
          descripcion: 'Trivial que guarda las preguntas en un csv. 100% funcional.',
          time: 'hora',
        },
        {
          img: 'capturas/calculadoraIcon',
          name: 'Calculadora',
          descripcion: 'Calculadora realizada con el paradigma poo. tiene opcion cientifica. (POO)',
          time: '01:00 am',

        },
        {
          img: 'capturas/gesto',
          name: 'Gestor alumnos',
          descripcion: 'Gestor de base de datos de una escuela de alumnos funcional.',
          time: '22:30 pm',
        },
      ],
    };
  },
  methods: {
    getImg(img) {
      // eslint-disable-next-line
      return require(`../assets/img/${img}.png`);
    },
    abrirVentana(parametro) {
      window.open(parametro);
    },
  },
};
</script>
<style>
  @import '@/assets/css/style.css';
</style>
