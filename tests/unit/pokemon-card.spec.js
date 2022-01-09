import { mount } from '@vue/test-utils'
import PokemonCard from '@/components/PokemonCard'

describe('Testing PokemonCard.vue', () => {
  it('should render name and poke dex nr', () => {
    // when
    const wrapper = mount(PokemonCard, {
      propsData: {
        pokemon: {
          id: 1,
          name: 'Glurak',
          region: 'Kanto',
          type: 'Feuer',
          evolved: true,
          level: 100,
          team: []
        }
      }
    })

    // then
    const cardTitle = wrapper.find('.card-title')
    expect(cardTitle.text()).toBe('Glurak - PokéDexNr: 1')
  })
  it('should render name and team dex nr', () => {
    // when
    const wrapper = mount(PokemonCard, {
      propsData: {
        pokemon: {
          id: 1,
          name: 'Glurak',
          region: 'Kanto',
          type: 'Feuer',
          evolved: true,
          level: 100,
          team: {
            id: 2,
            name: 'Super Pokemon',
            game: 'Pokémon Diamant',
            type: 'Feuer',
            pokemonIds: [1]
          }
        }
      }
    })

    // then
    const cardTitle = wrapper.find('.card-title-two')
    expect(cardTitle.text()).toBe('Team: Super Pokemon, DexNr: 2')
  })

  it('should render pokemon data', () => {
    // when
    const wrapper = mount(PokemonCard, {
      propsData: {
        pokemon: {
          id: 1,
          name: 'Glurak',
          region: 'Kanto',
          type: 'Feuer',
          evolved: true,
          level: 100,
          team: []
        }
      }
    })

    // then
    const cardTitle = wrapper.find('.card-text')
    expect(cardTitle.text()).toBe('Glurak stammt aus der Region Kanto und befindet sich auf Level 100. Es gehört dem Typ Feuer an und ist entwickelt.')
  })

  it.each`
    evolved | expected
    ${true}    | ${'entwickelt'}
    ${false}   | ${'nicht entwickelt'}
  `('should render evolution status (status is $evolved)', ({
    evolved,
    expected
  }) => {
    // when
    const testPokemon = {
      name: 'Glurak',
      region: 'Kanto',
      type: 'Feuer',
      evolved: evolved,
      level: 100,
      team: []
    }
    const wrapper = mount(PokemonCard, {
      propsData: {
        pokemon: testPokemon
      }
    })

    // then
    const cardTitle = wrapper.find('.card-text')
    expect(cardTitle.text()).toContain(`und ist ${expected}`)
  })
})
