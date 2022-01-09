import { mount } from '@vue/test-utils'
import PKMNCreateForm from '@/components/PKMNCreateForm'

describe('Testing PKMNCreateForm.vue', () => {
  it('should not show form by default', () => {
    // when
    const wrapper = mount(PKMNCreateForm)

    // then
    expect(wrapper.find('#pkmn-create-offcanvas').classes()).not.toContain('show')
  })
})
