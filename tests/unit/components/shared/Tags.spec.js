import { shallowMount } from '@vue/test-utils';
import Tags from '@/components/shared/Tags/index.vue';
import TagItem from '@/components/shared/Tags/TagItem.vue';

describe('Tags.vue', () => {
  it('Should render 3 tag items', () => {
    const wrapper = shallowMount(Tags, {
      propsData: {
        tags: ['one', 'two', 'three'],
      },
      stubs: ['TagItem'],
    });

    const tags = wrapper.findAllComponents(TagItem);

    expect(tags).toHaveLength(3);
  });
});
