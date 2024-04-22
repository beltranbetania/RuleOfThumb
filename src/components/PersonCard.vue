<template>
  <div :class="{ 'person__card--grid': isGrid, 'person__card--list': !isGrid }"
    :style="{ '--card-background': getPersonImage(person) }">
    <div class="person__gauge-icon">
      <div :class="{ 'person__gauge-icon--align': isGrid }"> 
        <div :class="{'person__gauge-icon--positive': isPositiveOpinions, 'person__gauge-icon--negative': !isPositiveOpinions }">
          <img v-if="isPositiveOpinions" src="../assets/img/thumbs-up.svg" alt="Thumb up"/>
          <img v-else src="../assets/img/thumbs-down.svg" alt="Thumb down"/>
        </div>
      </div>
      <div :class="{ 'person-container--grid': isGrid, 'person-container--list': !isGrid }">
        <div class="person-content" :class="{ 'person-content--grid': isGrid }">
          <p class="person-content__name" :class="{ 'person-content__name--card': isGrid }">
            {{ person.name }}
          </p>
          <p class="person-content__desc">{{ person.description }}</p>
        </div>
        <div>
          <VotingContainer :person="person" />
        </div>
      </div>
    </div>
    <GaugeBar :positiveVotes="person.votes.positive" :negativeVotes="person.votes.negative" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import VotingContainer from './VotingContainer.vue'
import GaugeBar from './GaugeBar.vue'
import { storeToRefs } from 'pinia'
import { usePersonsListStore } from '@/stores/personsList'

const store = usePersonsListStore()
const { isGrid } = storeToRefs(store)

const props = defineProps({
  person: {
    type: Object,
    required: true,
  },
})

const isPositiveOpinions = computed(() => {
  return props.person.votes.positive > props.person.votes.negative
})

function getPersonImage(person) {
  return 'url(' + person.picture + ')'
}


</script>
