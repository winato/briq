import { shallowMount } from '@vue/test-utils';
import BButton from '@/components/common/BButton/index.vue';

describe('BButton.vue', () => {
  it('Should trigger the cleck event', async () => {
    const wrapper = shallowMount(BButton);
    const button = wrapper.find('button');

    await button.trigger('click');

    expect(wrapper.emitted().click).toBeTruthy();
  });

  it('Should render the slot with text', () => {
    const slot = 'Button';
    const wrapper = shallowMount(BButton, {
      slots: {
        default: [slot],
      },
    });

    expect(wrapper.text()).toBe(slot);
  });
});
