<template>
  <div :class="{ person_card_grid: isGrid, person_card: !isGrid }"
    :style="{ '--card-background': getPersonImage(person) }">
    <div class="gauge_icon_container">
      <div :class="{ gauge_icon_align: isGrid }"> 
        <div :class="{ gauge_icon_positive: isPositiveOpinions, gauge_icon_negative: !isPositiveOpinions }">
          <img v-if="isPositiveOpinions" src="../assets/img/thumbs-up.svg" />
          <img v-else src="../assets/img/thumbs-down.svg" />
        </div>
      </div>
      <div :class="{ person_container_grid: isGrid, person_container: !isGrid }">
        <div class="person_content" :class="{ person_content_grid: isGrid }">
          <p class="person_content_name" :class="{ person_content_name_card: isGrid }">
            {{ person.name }}
          </p>
          <p class="person_content_desc">{{ person.description }}</p>
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
import { ref, computed } from 'vue'
import VotingContainer from './VotingContainer.vue'
import GaugeBar from './GaugeBar.vue'
import { storeToRefs } from 'pinia'
import { usePersonsListStore } from '@/stores/personsList'

const store = usePersonsListStore()
const { isGrid } = storeToRefs(store)

const props = defineProps({
  name: 'PersonCard',
  person: {
    type: Object,
    required: true,
  },
})

const isPositiveOpinions = computed(() => {
  return props.person.votes.positive > props.person.votes.negative
})

const gaugeIconImage = computed(() => {
  return "../assets/img/thumbs-down.svg"
})

function getPersonImage(person) {
  return 'url(' + person.picture + ')'
}


</script>
