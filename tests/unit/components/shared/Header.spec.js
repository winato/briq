import { shallowMount } from '@vue/test-utils';
import Header from '@/components/shared/Header/index.vue';
import Statistic from '@/components/features/Statistic/index.vue';

describe('Header.vue', () => {
  it('Should render Statistic component inside', () => {
    const wrapper = shallowMount(Header, {
      stubs: ['router-link'],
    });

    expect(wrapper.findComponent(Statistic)).toBeTruthy();
  });

  it('Should render logo', () => {
    const wrapper = shallowMount(Header, {
      stubs: ['router-link'],
    });

    expect(wrapper.find('img')).toBeTruthy();
  });
});
