import { mount } from '@vue/test-utils'
import TeamCard from '@/components/TeamCard'

describe('Testing TeamCard.vue', () => {
  it('should render name and team dex nr', () => {
    // when
    const wrapper = mount(TeamCard, {
      propsData: {
        team: {
          id: 2,
          name: 'Super Pokémon',
          game: 'Pokémon Diamant',
          type: 'Feuer',
          pokemonIds: []
        }
      }
    })

    // then
    const cardTitle = wrapper.find('.card-title')
    expect(cardTitle.text()).toBe('Super Pokémon - TeamDexNr: 2')
  })

  it.each`
    pokemonIds  | expected
    ${[]}               | ${'Diesem Team wurden noch keine Pokémon hinzugefügt.'}
    ${[{}]}             | ${'Zum Team gehören die Pokémon mit folgenden PokéDexNummern:'}
    ${[{}, {}]}         | ${'Zum Team gehören die Pokémon mit folgenden PokéDexNummern:'}
  `('should render fitting string when team is empty or filled (team.pokemonIds)', ({ pokemonIds, expected }) => {
    // when
    const testTeam = {
      id: 2,
      name: 'Super Pokémon',
      game: 'Pokémon Diamant',
      type: 'Feuer',
      pokemonIds: pokemonIds
    }
    const wrapper = mount(TeamCard, {
      propsData: {
        team: testTeam
      }
    })

    // then
    const cardTitle = wrapper.find('.card-title-two')
    expect(cardTitle.text()).toContain(`${expected}`)
  })
  it('should render pokemonIds count', () => {
    // when
    const wrapper = mount(TeamCard, {
      propsData: {
        team: {
          id: 2,
          name: 'Super Pokémon',
          game: 'Pokémon Diamant',
          type: 'Feuer',
          pokemonIds: [1, 2, 3, 4, 5, 6]
        }
      }
    })

    // then
    const cardTitle = wrapper.find('.card-title-two')
    expect(cardTitle.text()).toContain('1 - 2 - 3 - 4 - 5 - 6')
  })
  it('should render name, game and type', () => {
    // when
    const wrapper = mount(TeamCard, {
      propsData: {
        team: {
          id: 2,
          name: 'Super Pokémon',
          game: 'Pokémon Diamant',
          type: 'Feuer',
          pokemonIds: []
        }
      }
    })

    // then
    const cardTitle = wrapper.find('.card-text')
    expect(cardTitle.text()).toBe('Super Pokémon wurde für das Spiel Pokémon Diamant erstellt und besteht vor allem aus Pokémon vom Typ Feuer.')
  })
})
