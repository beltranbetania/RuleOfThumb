<template>
    <div class="gauge-bar">
        <div class="gauge-bar__content bg-positive_percent " :style="{ '--gauge-percentage': positiveVotesPercentaje }">
            <div class="gauge-bar_container_data gauge-bar_container_positive_data">
                <img class="thumb_bar_icon" src="../assets/img/thumbs-up.svg" alt="Thumb up"/>
                <p class="gauge-bar__text gauge-bar__text--positive"> {{ positiveVotesPercentaje }} </p>
            </div>
        </div>
        <div class="gauge-bar__content bg-negative_percent" :style="{ '--gauge-percentage': negativeVotesPercentaje }">
            <div class="gauge-bar_container_data gauge-bar_container_negative_data">
                <p class="gauge-bar__text--negative gauge-bar__text">{{ negativeVotesPercentaje }} </p>
                <img class="thumb_bar_icon" src="../assets/img/thumbs-down.svg" alt="Thumb down"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    positiveVotes: Number,
    negativeVotes: Number,
})

const positiveVotesPercentaje = computed(() => {
    return Math.round(getPercentaje(props.positiveVotes, props.positiveVotes + props.negativeVotes) * 10) / 10 + '%'
})

const negativeVotesPercentaje = computed(() => {
    return Math.round(getPercentaje(props.negativeVotes, props.positiveVotes + props.negativeVotes) * 10) / 10 + '%'
})

function getPercentaje(value, total) {
    return value * 100 / total
}

</script>