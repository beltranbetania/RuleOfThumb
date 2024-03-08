<script setup>

import HeaderComponent from './components/Header.vue'
import BeCountedBannerComponent from './components/BeCountedBanner.vue'
import FooterComponent from './components/Footer.vue'
import BottomBannerComponent from './components/BottomBanner.vue'
import PersonsContainer from './components/PersonsContainer.vue'
import { FadeLoader } from "vue3-spinner";
import { usePersonsListStore } from '@/stores/personsList'
import { storeToRefs } from 'pinia'

const store = usePersonsListStore()
const { loading } = storeToRefs(store)

</script>

<template>
<div >
  <HeaderComponent />
  <div class="max-centered">
    <BeCountedBannerComponent />
    <PersonsContainer />
    <BottomBannerComponent />
    <FooterComponent />
  </div>
  <FadeLoader class="spinnerPosition" :loading="loading"/>
</div>
</template>