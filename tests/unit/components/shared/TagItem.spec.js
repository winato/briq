import { shallowMount } from '@vue/test-utils';
import TagItem from '@/components/shared/Tags/TagItem.vue';

describe('Tags.vue', () => {
  it('Should render tag item', () => {
    const wrapper = shallowMount(TagItem, {
      propsData: {
        label: 'hello-world',
      },
    });

    expect(wrapper.html()).toBeTruthy();
  });

  it('Should render tag item text without dashes', () => {
    const wrapper = shallowMount(TagItem, {
      propsData: {
        label: 'hello-world',
      },
    });

    expect(wrapper.html()).toBe(('<div class="tag-item">hello world</div>'));
  });
});
