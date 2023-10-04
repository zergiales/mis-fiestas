<template>
  <v-app>
    <v-main class="fondo">
      <v-row>
        <v-col sg="9" lg="4" md="8" class="mx-auto" >
          <v-card class="">
            <div class="pt-5 text-center">
              <v-avatar size="100" color="green lighten-4">
                <!--to do: animacion-->
                <v-icon size="40" color="green">mdi-acount</v-icon>
              </v-avatar>
              <!--que si es de tarde de noche o de dia te diga buenos dias,tardes o noches-->
              <h1 class="pt-3 green--text">Bienvenido a Mis fiestas</h1>
            </div>
            <!--formulario para iniciar sesion-->
            <v-form @submit.prevent="getUser" ref="form">
              <v-card-text>
                <!--email-->
                <v-text-field
                class="pt-1"
                v-model="email"
                label="Correo electronico"
                required
                prepend-icon="mdi-account"
                />
              <v-text-field
              class="pt-5"
              v-model="password"
              label="Contraseña"
              required
              prepend-icon="mdi-key"/>
              <!--login-->
              <v-row>
                <v-col>
                  <v-btn :loading="cargando" type="submit" color="green">
                    <span class="white--text px-8">Iniciar sesión</span>
                  </v-btn>
                </v-col>
              <!--register-->
                <v-col>
                  <v-btn type="submit" color="green">
                    <span class="white--text px-8">Registrate</span>
                  </v-btn>
                </v-col>
            </v-row>
              </v-card-text>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>
<script>

</script>
<style scoped>
@import '../assets/css/style.css';
@import '../assets/css/login.css';
</style>