import { mount } from '@vue/test-utils'
import Teams from '@/views/Teams.vue'
import TeamsCardList from '@/components/TeamsCardList'
import TeamsCreateForm from '@/components/TeamsCreateForm'

describe('Testing Teams.vue', () => {
  it('should show page title', () => {
    // when
    const wrapper = mount(Teams)

    // then
    expect(wrapper.text()).toMatch('Erstelle dein eigenes Team')
  })

  it('should have teams card list component', () => {
    // when
    const wrapper = mount(Teams)

    // then
    const cardList = wrapper.findComponent(TeamsCardList)
    expect(cardList.exists()).toBeTruthy()
  })

  it('should have teams create form component', () => {
    // when
    const wrapper = mount(Teams)

    // then
    const createForm = wrapper.findComponent(TeamsCreateForm)
    expect(createForm.exists()).toBeTruthy()
  })
})
