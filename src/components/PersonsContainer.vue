<template>
    <div class="rulings_container">
        <div class="person_container_header">
            <h1>Previous Rulings</h1>
            <select v-model="selected" class="person_container_selector desk_visible" @change="saveCollectionType($event)">
                <option v-for="option in options" :value="option.value">
                    {{ option.text }}
                </option>
            </select>
        </div>
        <div class="desk_visible" :class="{ flex_container_grid: showGrid }">
            <PersonCard v-for="person in people" :person="person" />
        </div>
        <div class="mobile_visible flex_container_row">
            <PersonCard v-for="person in people" :person="person" />
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
