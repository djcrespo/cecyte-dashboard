<template>
    <b-form id="generalDetailForm" method="post" action="#">
        <b-row>
            <b-col lg="6">
                <div class="mb-3">
                    <b-form-group label="Nombre de la convocatoria" label-for="productName">
                        <b-form-input type="text" id="productName" placeholder="" />
                    </b-form-group>
                </div>
            </b-col>
            <b-col lg="6">
                <div class="mb-3">
                    <b-form-group label="Tipo de plaza" label-for="productSummary">
                        <b-form-select>
                            <b-form-select-option :value="null">Seleccione una opción</b-form-select-option>
                            <b-form-select-option value="shopping1">Maestro(a)</b-form-select-option>
                            <b-form-select-option value="shopping2">Administrativo</b-form-select-option>
                            <b-form-select-option value="shopping3">Secretario(a)</b-form-select-option>
                            <b-form-select-option value="shopping4">Técnico(a)</b-form-select-option>
                        </b-form-select>
                    </b-form-group>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col lg="12">
                <div class="mb-3">
                    <label class="form-label">Descripción de la convocatoria</label>
                    <QuillEditor theme="snow" :toolbar="toolbar" style="height: 195px" content="" content-type="html" />
                </div>
            </b-col>
        </b-row>
        <div class="mb-3">
            <b-form-group label="Observaciones" label-for="comment">
                <b-form-textarea type="text" id="comment" :rows="3" />
            </b-form-group>
        </div>
    </b-form>
</template>
<script setup lang="ts">
import { QuillEditor } from '@vueup/vue-quill'

const toolbar = [[{ font: [] }, { size: [] }], ['bold', 'italic', 'underline', 'strike'], [{ color: [] }, { background: [] }], [{ script: 'super' }, { script: 'sub' }], [{ header: [false, 1, 2, 3, 4, 5, 6] }, 'blockquote', 'code-block'], [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }], ['direction', { align: [] }], ['link', 'image', 'video'], ['clean']]

const inlineStackedOptions = [
    { text: 'Online', value: 'online' },
    { text: 'Offline', value: 'offline' },
    { text: 'Draft', value: 'draft' }
]

const inlineStackedSelected = ref('online')
</script>
