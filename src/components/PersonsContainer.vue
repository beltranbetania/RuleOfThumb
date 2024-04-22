<template>
    <div class="rulings-container">
        <div class="rulings-container__header">
            <h1>Previous Rulings</h1>
            <select v-model="selected" class="rulings-container__selector desk_visible" @change="saveCollectionType($event)" aria-label="Select an option">
                <option v-for="option in options" :value="option.value" :key="option.value" >
                    {{ option.text }}
                </option>
            </select>
        </div>
        <div :class="{ 'flex-container--grid': showGrid, 'flex-container--list': !showGrid  }">
            <PersonCard v-for="person in people" :person="person" :key="person.id"/>
        </div>
    </div>
</template>

<script setup>

import PersonCard from './PersonCard.vue'
import { db } from '../firebase/init.js';
import { collection, onSnapshot } from "firebase/firestore"
import { ref, onMounted, computed } from 'vue'
import { usePersonsListStore } from '@/stores/personsList'

const store = usePersonsListStore()

const CollectionType = Object.freeze({
  LIST: 'L',
  GRID: 'G',
});

const selected = ref(CollectionType.LIST)

const options = ref([
    { text: 'List', value: CollectionType.LIST },
    { text: 'Grid', value: CollectionType.GRID },
])

var people = ref([])

const showGrid = computed(() => {
    return selected.value == CollectionType.GRID
})

function saveCollectionType(event) {
    store.setGridState(event.target.value == CollectionType.GRID)
}

onMounted(async () => {
    store.setLoadingState(true)
    onSnapshot(collection(db, 'person'), (querySnapshot) => {
        const fbPersons = [];
        querySnapshot.forEach((doc) => {
            const person = {
                id: doc.id,
                name: doc.data().name,
                description: doc.data().description,
                category: doc.data().category,
                picture: doc.data().picture,
                lastUpdated: doc.data().lastUpdated,
                votes: doc.data().votes,
            }
            fbPersons.push(person)
        });
        people.value = fbPersons
        store.setLoadingState(false)
    });
})

</script>
