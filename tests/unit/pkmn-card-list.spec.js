import { mount } from '@vue/test-utils'
import PKMNCardList from '@/components/PKMNCardList'
import PokemonCard from '@/components/PokemonCard'

describe('Testing PKMNCardList.vue', () => {
  it('should render a pokemon card for each pokemon', () => {
    // when
    const wrapper = mount(PKMNCardList, {
      propsData: {
        pkmn: [
          {
            id: 1,
            name: 'Glurak',
            region: 'Kanto',
            evolved: true,
            type: 'Feuer',
            level: 100,
            team: []
          },
          {
            id: 2,
            name: 'Bisasam',
            region: 'Hoenn',
            evolved: false,
            type: 'Pflanze',
            level: 2,
            team: []
          }
        ]
      }
    })

    // then
    const pokemonCards = wrapper.findAllComponents(PokemonCard)
    expect(pokemonCards.length).toBe(2)
  })
})
