<template>
  <p class="eyebrow_text">{{ voteEyebrow }}</p>
  <div class="person_button-card">
    <button class="up_voting_button" :class="{ up_voting_button_selected: vote == ButtonActions.POSITIVE_VOTE }"
      @click="setVoteType(ButtonActions.POSITIVE_VOTE)">
      <img class="thumb_voting_icon" src="../assets/img/thumbs-up.svg" aria-label="thumbs up" />
    </button>
    <button class="down_voting_button" :class="{ down_voting_button_selected: vote == ButtonActions.NEGATIVE_VOTE }"
      @click="setVoteType(ButtonActions.NEGATIVE_VOTE)">
      <img class="thumb_voting_icon" src="../assets/img/thumbs-down.svg" aria-label="thumbs up" />
    </button>
    <button class="person_vote_now-button" @click="voteNow()" :disabled='vote == ButtonActions.DEFAULT'>
      {{ voteText }}
    </button>
  </div>
</template>


<script setup>
import { ref, computed } from 'vue'
import { db } from '../firebase/init.js';
import { doc, updateDoc } from "firebase/firestore"
import { usePersonsListStore } from '@/stores/personsList'
import moment from 'moment';

const store = usePersonsListStore()

const props = defineProps({
  person: {
    type: Object,
    required: true,
  },
})

const ButtonActions = Object.freeze({
  POSITIVE_VOTE: 'POSITIVE_VOTE',
  NEGATIVE_VOTE: 'NEGATIVE_VOTE',
  VOTE_AGAIN: 'VOTE_AGAIN',
  DEFAULT: '',

});

var vote = ref(ButtonActions.DEFAULT)

var voteText = computed(() => {
  return vote.value == ButtonActions.VOTE_AGAIN ? 'Vote Again' : 'Vote Now'
})

const voteEyebrow = computed(() => {
  return vote.value == ButtonActions.VOTE_AGAIN ? 'Thank you for your vote!' : moment(props.person.lastUpdated).fromNow() + ' in ' + props.person.category.charAt(0).toUpperCase() + props.person.category.slice(1)
})

function setVoteType(voteType) {
  if (vote.value != ButtonActions.VOTE_AGAIN) {
    vote.value = voteType
  }
}

function voteNow() {

  switch (vote.value) {
    case ButtonActions.POSITIVE_VOTE:
      increasePositiveVotes()

      break;
    case ButtonActions.NEGATIVE_VOTE:
      increaseNegativeVotes()

      break;
    case ButtonActions.VOTE_AGAIN:
      vote.value = ButtonActions.DEFAULT

      break;
    default:
    // code block
  }
}

async function increasePositiveVotes() {
  store.setLoadingState(true)
  updateDoc(doc(db, "person", props.person.id), {
    votes: { positive: props.person.votes.positive + 1, negative: props.person.votes.negative }
  }).then(() => setCompletedVote());
}

async function increaseNegativeVotes() {
  store.setLoadingState(true)
  updateDoc(doc(db, "person", props.person.id), {
    votes: { negative: props.person.votes.negative + 1, positive: props.person.votes.positive }
  }).then(() => setCompletedVote());
}

function setCompletedVote() {
  vote.value = ButtonActions.VOTE_AGAIN
  store.setLoadingState(false)
}


</script>
