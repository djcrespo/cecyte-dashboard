<template>
  <PageBreadcrumb title="Nueva convocatoria" subtitle="Ecommerce" />
  <b-row>
    <b-col>
      <b-card no-body id="horizontalwizard">
        <b-card-header>
          <ul class="nav nav-tabs card-header-tabs border-0">
            <li class="nav-item">
              <a href="#" class="nav-link pb-3 active">
                <i class="bx bxs-contact me-2" />
                <span class="d-none d-sm-inline">Datos generales</span>
              </a>
            </li>
          </ul>
        </b-card-header>
        <b-card-body>
          <div class="tab-content pt-0">
            <div class="tab-pane show active" id="generalDetail">
              <GeneralDetail />
            </div>
            <div class="d-flex flex-wrap gap-2 wizard justify-content-between mt-3">
              <div class="first me-2">
                <a class="btn btn-secondary"> Cancelar </a>
              </div>
              <div class="last me-2">
                <a class="btn btn-primary"> Guardar </a>
              </div>
            </div>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import PageBreadcrumb from '~/components/PageBreadcrumb.vue'
import GeneralDetail from '~/pages/convocation/convocations/components/GeneralDetail.vue'
import ProductImages from '~/pages/ecommerce/products/create/components/ProductImages.vue'
import MetaData from '~/pages/ecommerce/products/create/components/MetaData.vue'
import Finish from '~/pages/ecommerce/products/create/components/Finish.vue'

const productTab = ref<number>(1)

definePageMeta({
  layout: 'default'
})
</script>
