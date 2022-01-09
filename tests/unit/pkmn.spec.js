import { mount } from '@vue/test-utils'
import PKMN from '@/views/PKMN.vue'
import PKMNCardList from '@/components/PKMNCardList'
import PKMNCreateForm from '@/components/PKMNCreateForm'

describe('Testing PKMN.vue', () => {
  it('should show page title', () => {
    // when
    const wrapper = mount(PKMN)

    // then
    expect(wrapper.text()).toMatch('Füge deine Pokémon hinzu')
  })

  it('should have pkmn card list component', () => {
    // when
    const wrapper = mount(PKMN)

    // then
    const cardList = wrapper.findComponent(PKMNCardList)
    expect(cardList.exists()).toBeTruthy()
  })

  it('should have pkmn create form component', () => {
    // when
    const wrapper = mount(PKMN)

    // then
    const createForm = wrapper.findComponent(PKMNCreateForm)
    expect(createForm.exists()).toBeTruthy()
  })
})
