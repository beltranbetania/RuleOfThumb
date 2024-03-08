<template>
    <div class="gauge_bar">
        <div class="gauge_bar_content bg-positive_percent " :style="{ '--gauge-percentage': positiveVotesPercentaje }">
            <div class="gauge_bar_container_data gauge_bar_container_positive_data">
                <img class="thumb_bar_icon" src="../assets/img/thumbs-up.svg" />
                <p class="gauge_bar_text gauge_bar_text_positive"> {{ positiveVotesPercentaje }} </p>
            </div>
        </div>
        <div class="gauge_bar_content bg-negative_percent" :style="{ '--gauge-percentage': negativeVotesPercentaje }">
            <div class="gauge_bar_container_data gauge_bar_container_negative_data">
                <p class="gauge_bar_text_negative gauge_bar_text">{{ negativeVotesPercentaje }} </p>
                <img class="thumb_bar_icon" src="../assets/img/thumbs-down.svg" />
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