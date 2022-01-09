import { mount } from '@vue/test-utils'
import TeamsCardList from '@/components/TeamsCardList'
import TeamCard from '@/components/TeamCard'

describe('Testing TeamsCardList.vue', () => {
  it('should render a team card for each team', () => {
    // when
    const wrapper = mount(TeamsCardList, {
      propsData: {
        teams: [
          {
            id: 1,
            name: 'Super Team',
            game: 'Pokémon Diamant',
            type: 'Feuer',
            pokemonIds: []
          },
          {
            id: 2,
            name: 'Legendäre Pokémon',
            game: 'Pokémon GO',
            type: 'Wasser',
            pokemonIds: []
          }
        ]
      }
    })

    // then
    const teamCards = wrapper.findAllComponents(TeamCard)
    expect(teamCards.length).toBe(2)
  })
})
