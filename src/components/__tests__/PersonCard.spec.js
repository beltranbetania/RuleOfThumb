import { vi, describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { usePersonsListStore } from '@/stores/personsList'

import PersonCard from '../PersonCard.vue'

describe('Card rendering', () => {
  test('renders the correct data on card with negative votes', () => {
    const person = {
      name: 'Kanye West',
      description: 'Born in Atlanta and raised in Chicago',
      category: 'entertainment',
      picture: 'kanye.png',
      lastUpdated: '2020-03-10T23:08:57.892Z',
      votes: {
        positive: 23,
        negative: 36
      }
    }

    const wrapper = mount(PersonCard, {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn
        })
      ],
      props: { person }
    })

    const store = usePersonsListStore()

    store.isGrid = false

    expect(wrapper.classes()).toEqual(expect.arrayContaining(['person__card--list']))
    expect(wrapper.find('p').text()).toBe('Kanye West') // check name
    expect(wrapper.findAll('p').at(1).text()).toBe('Born in Atlanta and raised in Chicago') // check description
    const gaugeIcon = wrapper.findAll('div').at(1)
    expect(gaugeIcon.findAll('div').at(1).classes()).toEqual(
      expect.arrayContaining(['person__gauge-icon--negative'])
    ) // check negative button
  })

  test('renders the correct data on card with positive votes', () => {
    const person = {
      name: 'Malala Yousafzai',
      description: 'The daughter of educational activist Ziauddin.',
      category: 'politics',
      picture: 'malala.png',
      lastUpdated: '2020-12-10T23:41:07.120Z',
      votes: {
        positive: 18,
        negative: 3
      }
    }

    const wrapper = mount(PersonCard, {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn
        })
      ],
      props: { person }
    })

    expect(wrapper.classes()).toEqual(expect.arrayContaining(['person__card--list']))
    expect(wrapper.find('p').text()).toBe('Malala Yousafzai') // check name
    expect(wrapper.findAll('p').at(1).text()).toBe('The daughter of educational activist Ziauddin.') // check description
    const gaugeIcon = wrapper.findAll('div').at(1)
    expect(gaugeIcon.findAll('div').at(1).classes()).toEqual(
      expect.arrayContaining(['person__gauge-icon--positive'])
    ) // check positive button
  })
})
