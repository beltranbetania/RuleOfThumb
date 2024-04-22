import { vi, describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'

import VotingContainer from '../VotingContainer.vue'

describe('Voting tumbs test', () => {
  test('events are dispached on click thumbs', async () => {
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

    const wrapper = mount(VotingContainer, {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn
        })
      ],
      props: { person }
    })

    expect(wrapper.find('p').text()).contains('in Entertainment') // check category is displayed

    const buttonUp = wrapper.findAll('button').at(0)
    const buttonDown = wrapper.findAll('button').at(1)
    const spy = (wrapper.vm.setVoteType = vi.fn())

    // positive thumb clicked, function is called

    await buttonUp.trigger('click')

    expect(spy).toHaveBeenCalled()
    // positive thumb clicked, function is called

    await buttonDown.trigger('click')

    expect(spy).toHaveBeenCalled()
  })
})
