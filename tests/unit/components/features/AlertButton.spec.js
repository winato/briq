import { shallowMount } from '@vue/test-utils';
import AlertButton from '@/components/features/Alerts/AlertButton.vue';
import store from '@/store';

describe('AlertButton.vue', () => {
  it('Should trigger open function', async () => {
    const open = jest.spyOn(AlertButton.methods, 'open');

    await shallowMount(AlertButton, {
      store,
      propsData: {
        id: 'e4ad7321-434c-46a8-9f04-9a87ef34a651',
      },
    }).find('.alert-button').trigger('click');

    expect(open).toHaveBeenCalled();
  });

  it('Should have icon', () => {
    const wrapper = shallowMount(AlertButton, {
      propsData: {
        id: 'e4ad7321-434c-46a8-9f04-9a87ef34a651',
      },
    });

    const image = wrapper.find('img');

    expect(image).toBeTruthy();
  });
});
