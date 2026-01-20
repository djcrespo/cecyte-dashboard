<template>
  <label v-if="label" :for="id" class="form-label text-muted">{{ label }}</label>
  <input :id="id" :type="type ?? 'text'" v-bind="$attrs" />
</template>

<script setup lang="ts">
import Choices from 'choices.js'
// import {type Options} from "choices.js/src/scripts/interfaces/options"
import type { InputType } from 'bootstrap-vue-next'

type ChoicesInputPropsType = {
  id: string
  type?: InputType
  label?: string
  choiceOptions?: object
}
const props = defineProps<ChoicesInputPropsType>()

onMounted(() => {
  new Choices(`#${props.id}`, props.choiceOptions)
})
</script>
