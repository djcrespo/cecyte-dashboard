<template>
  <b-col xl="12">
    <b-card no-body class="auth-card">
      <b-card-body class="p-0">
        <b-row class="align-items-center g-0">
          <b-col lg="6" class="d-none d-lg-inline-block border-end">
            <div class="auth-page-sidebar">
              <img :src="signInImg" alt="auth" class="img-fluid" />
            </div>
          </b-col>
          <b-col lg="6">
            <div class="p-4">
              <!-- <div class="mx-auto mb-4 text-center auth-logo">
                <LogoBox />
              </div> -->

              <h2 class="fw-bold text-center fs-18">Crear cuenta</h2>
              <p class="text-muted text-center mt-1 mb-4">No tienes cuenta? Regístrate ahora! Solo toma un minuto.</p>

              <b-row class="justify-content-center">
                <b-col md="8" cols="12">
                  <b-form class="authentication-form">
                    <b-form-group label="Nombre completo" class="mb-3">
                      <b-form-input type="text" id="example-name" placeholder="Ingresa tu nombre" />
                    </b-form-group>

                    <b-form-group label="Correo electrónico" class="mb-3">
                      <b-form-input type="email" id="example-email" placeholder="Ingresa tu correo electrónico" />
                    </b-form-group>

                    <b-form-group label="Contraseña" class="mb-3">
                      <b-form-input type="password" id="example-password" name="password" placeholder="Ingresa tu contraseña" />
                    </b-form-group>

                    <div class="mb-3">
                      <b-form-checkbox>Aceptar términos y condiciones</b-form-checkbox>
                    </div>

                    <div class="mb-1 text-center d-grid">
                      <b-button variant="primary" type="submit"> Crear cuenta </b-button>
                    </div>
                  </b-form>

                  <!-- <p class="mt-3 fw-semibold no-span">OR sign with</p>

                  <SignWithOptions /> -->
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>

    <p class="text-white mb-0 text-center">
        Ya tienes una cuenta?
      <NuxtLink to="/auth/sign-in" class="text-white fw-bold ms-1">Iniciar sesión</NuxtLink>
    </p>
  </b-col>
</template>

<script setup lang="ts">
import signInImg from '~/assets/images/sign-in.svg'
import SignWithOptions from '~/pages/auth/components/SignWithOptions.vue'

definePageMeta({
  layout: 'auth'
})
</script>
