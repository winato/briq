import NotFound from '@/views/Errors/NotFound.vue';
import { shallowMount } from '@vue/test-utils';

describe('NotFound', () => {
  it('Should render error page', () => {
    const wrapper = shallowMount(NotFound);

    const title = wrapper.find('h1');
    const subTitle = wrapper.find('h4');
    const goBack = wrapper.find('a');

    expect(title).toBeTruthy();
    expect(subTitle).toBeTruthy();
    expect(goBack).toBeTruthy();
  });
});
