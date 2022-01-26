import { shallowMount } from '@vue/test-utils';
import AlertItem from '@/components/features/Alerts/AlertItem.vue';

describe('AlertItem.vue', () => {
  it('Should have right reason and timestamp', async () => {
    const wrapper = shallowMount(AlertItem, {
      propsData: {
        reason: 'Some reason',
        timestamp: '2021-08-03T15:43:22.333Z',
      },
    });

    const alertItemText = wrapper.find('.alert-item__text');
    const time = wrapper.find('time');

    expect(alertItemText.text()).toBe('Some reason');
    expect(time.text()).toBe('03.08.2021 18:08');
  });
});
