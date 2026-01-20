<template>
  <PageBreadcrumb title="Lista de postulados" subtitle="Convocatorias" />
  <b-row>
    <b-col>
      <b-card no-body>
        <b-card-body>
          <div class="d-flex flex-wrap justify-content-between gap-3">
            <div class="search-bar">
              <span><i class="bx bx-search-alt"></i></span>
              <b-form-input type="search" id="search" placeholder="Buscar..." />
            </div>
            <div>
              <NuxtLink to="/convocation/convocations/create" class="btn btn-primary d-flex align-items-center"> <i class="bx bx-plus me-1"></i>Agregar postulado </NuxtLink>
            </div>
          </div>
        </b-card-body>
        <div>
          <b-table-simple responsive class="table-centered text-nowrap mb-0">
            <b-thead class="bg-light bg-opacity-50">
              <b-tr>
                <b-th v-for="(thead, idx) in data.header" :key="idx">{{ thead }}</b-th>
              </b-tr>
            </b-thead>

            <b-tbody>
              <b-tr v-for="(product, idx) in data.body" :key="idx">
                <b-td>
                  <div class="d-flex align-items-center">
                    <!-- <div class="flex-shrink-0 me-3">
                      <NuxtLink :to="`/ecommerce/products/${product.id}`">
                        <img :src="product.product.image" alt="product-1(1)" class="img-fluid avatar-sm" />
                      </NuxtLink>
                    </div> -->
                    <div class="flex-grow-1">
                      <h5 class="mt-0 mb-1">
                        <NuxtLink :to="`/ecommerce/products/${product.id}`" class="text-reset">
                          {{ product.product.name }}
                        </NuxtLink>
                      </h5>
                      <span class="fs-14">{{ product.product.caption }}</span>
                    </div>
                  </div>
                </b-td>
                <!-- <b-td>{{ product.category }}</b-td>
                <b-td>{{ currency }}{{ product.price }}</b-td> -->
                <b-td :class="product.inventory === 'active' ? 'text-primary' : product.inventory === 'in-process' ? 'text-success' : 'text-danger'">
                  <i class="bx bxs-circle me-1" :class="product.inventory === 'active' ? 'text-primary' : product.inventory === 'in-process' ? 'text-success' : 'text-danger'"></i>
                  {{ product.inventory == 'active' ? 'postulado' : product.inventory == 'in-process' ? 'Aceptado' : 'Rechazado' }}
                </b-td>
                <b-td>
                  <b-button type="button" :variant="null" size="sm" class="btn-soft-secondary me-1">
                    <i class="bx bx-edit fs-18"></i>
                  </b-button>
                  <b-button type="button" :variant="null" size="sm" class="btn-soft-danger ms-1">
                    <i class="bx bx-trash fs-18"></i>
                  </b-button>
                </b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>

          <div class="align-items-center justify-content-between row g-0 text-center text-sm-start p-3 border-top">
            <div class="col-sm">
              <div class="text-muted">
                <span class="fw-semibold">7</span>
                de
                <span class="fw-semibold">15</span>
                Resultados
              </div>
            </div>
            <div class="col-sm-auto mt-3 mt-sm-0">
              <b-pagination class="m-0" pills size="md" v-model="currentPage" :per-page="perPageItem" :total-rows="data.body.length" />
            </div>
          </div>
        </div>
      </b-card>
    </b-col>
  </b-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PageBreadcrumb from '~/components/PageBreadcrumb.vue'
import { kebabToTitleCase } from '~/helpers/change-casing'
import { currency } from '~/helpers/constants'
import { data } from '~/pages/convocation/persons/data'

const perPageItem = ref(5)
const currentPage = ref(1)

definePageMeta({
  layout: 'default'
})
</script>
