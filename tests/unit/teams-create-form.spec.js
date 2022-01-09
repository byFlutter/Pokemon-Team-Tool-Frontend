import { mount } from '@vue/test-utils'
import TeamsCreateForm from '@/components/TeamsCreateForm'

describe('Testing TeamsCreateForm.vue', () => {
  it('should not show form by default', () => {
    // when
    const wrapper = mount(TeamsCreateForm)

    // then
    expect(wrapper.find('#teams-create-offcanvas').classes()).not.toContain('show')
  })
})
