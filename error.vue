<template>
  <div class="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5 vh-100 d-flex align-items-center bg-primary">
    <b-container>
      <b-row class="justify-content-center">
        <b-col xl="12">
          <b-card no-body class="auth-card">
            <b-card-body class="p-0">
              <b-row class="align-items-center g-0">
                <b-col lg="6" class="d-none d-lg-inline-block border-end">
                  <div class="auth-page-sidebar">
                    <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="auth"
                         class="img-fluid"/>
                  </div>
                </b-col>
                <b-col lg="6">
                  <div class="p-4">
                    <div class="mx-auto mb-4 text-center">
                      <div class="mx-auto text-center auth-logo">
                        <LogoBox/>
                      </div>

                      <template v-if="error">
                        <h1 class="mt-5 mb-3 fw-bold fs-60">
                          {{ error.statusCode }}
                        </h1>
                        <h2 class="fs-22 lh-base mb-4">
                          {{ error.message }}
                        </h2>
                      </template>

                      <div class="text-center">
                        <NuxtLink to="/" class="btn btn-success">Back to Home</NuxtLink>
                      </div>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script setup lang="ts">
import LogoBox from "~/components/LogoBox.vue";

import type {NuxtError} from '#app'

defineProps({
  error: Object as () => NuxtError
})
</script>