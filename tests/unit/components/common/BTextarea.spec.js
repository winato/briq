import BTextarea from '@/components/common/BTextarea/index.vue';
import { shallowMount } from '@vue/test-utils';

describe('BTextarea', () => {
  it('Should set value to textarea and emit input event', async () => {
    const wrapper = shallowMount(BTextarea);
    const textarea = wrapper.find('textarea');
    const value = 'Some value';

    await textarea.setValue(value);

    expect(textarea.element.value).toBe(value);
    expect(wrapper.emitted('input')[0]).toEqual([value]);
  });

  it('Should display the placeholder in textarea', () => {
    const placeholderText = 'Some placeholder';

    const wrapper = shallowMount(BTextarea, {
      propsData: {
        placeholder: placeholderText,
      },
    });

    const textarea = wrapper.find('textarea');

    expect(textarea.attributes('placeholder')).toBe(placeholderText);
  });
});
