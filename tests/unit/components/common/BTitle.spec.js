import BTitle from '@/components/common/BTitle/index.vue';
import { shallowMount } from '@vue/test-utils';

describe('BTitle', () => {
  const wrapper = shallowMount(BTitle, {
    propsData: {
      type: 'main',
      tag: 'h1',
    },
    slots: {
      default: 'Hello world',
    },
  });

  it('Should have the "main" class', () => {
    expect(wrapper.classes()).toContain('main');
  });

  it('Should render h1 with right content', () => {
    const title = wrapper.html();

    expect(title).toBe('<h1 class="title main">Hello world</h1>');
  });

  it('Should update title to h2 with subtitle class and Hello world text', async () => {
    await wrapper.setProps({
      tag: 'h2',
      type: 'subtitle',
    });

    const title = wrapper.html();

    expect(title).toBe('<h2 class="title subtitle">Hello world</h2>');
  });
});
