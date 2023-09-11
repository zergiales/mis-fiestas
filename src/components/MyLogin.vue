<template>
  <input type="text" :value="name" @input="setName">
</template>
<script>
import axios from 'axios';
import { validationMixins } from 'vuelidate';
import {
  required, maxlenght, minLength, email,
} from 'vuelidate/lib/validators';
import {mapActions } from 'vuex';
export default {
  name: 'App',
  mixins: [validationMixin],
  validations: {
    email: {
      required, email, maxLength: maxLength(20),
    },
    password: { required, minLength: minLength(8) },
  },
  data: () => ({
    dialog: false,
    loading: false,
    snackbarLogin: false,
    passwordShow: false,
    email: '',
    password: '',
  }),
  methods: {

    ...mapActions([
      'actualizarIdAction',
      'actualizarNombreAction',
      'actualizarTipoAction',
    ]),

    async getUser() {
      const response = await axios.post(
        `${process.env.VUE_APP_SERVER_TOTAL_PATH}/login`,
        {
          email: this.email,
          contraseña: this.password,
        },
      );
      console.log(response.data.email);
      console.log(response.data.nombre);
      console.log(response.data.id);
      console.log(response.data.tipo);
      console.log(`${process.env.VUE_APP_SERVER_TOTAL_PATH}/login`);
      if (response.data.nombre) {
        setTimeout(() => {
          this.snackbarLogin = true;
          this.loading = true;
          /* datos del usuario que recogemos */
          this.actualizarIdAction(response.data.id);
          this.actualizarNombreAction(response.data.nombre);
          this.actualizarTipoAction(response.data.tipo);
        }, 1000);
        setTimeout(() => {
          this.$router.push('/home');
        }, 2000);
      } else {
        this.dialog = true;
        this.email = '';
        this.password = '';
      }
    },
    mensajeEmail() {
      const mensaje = [];
      if (!this.$v.email.email) {
        mensaje.push('el campo solo admite caracteres alfabeticos');
      } else if (!this.$v.email.required && this.$v.email.$dirty) {
        mensaje.push('rellena el campo');
      }
      return mensaje;
    },
    mensajeContraseña() {
      const mensaje = [];
      if (!this.$v.password.minLength) {
        mensaje.push('Se necesita minimo 8 caracteres');
      } else if (!this.$v.email.required && this.$v.email.$dirty) {
        mensaje.push('Rellena el campo');
      }
      return mensaje;
    },
  },
};
</script>