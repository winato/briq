import { shallowMount } from '@vue/test-utils';
import Alerts from '@/components/features/Alerts/index.vue';
import AlertItem from '@/components/features/Alerts/AlertItem.vue';
import alertMocks from '../../mocks/alerts';

describe('Alerts.vue', () => {
  it('Should render 3 alert items', () => {
    const wrapper = shallowMount(Alerts, {
      propsData: {
        alerts: alertMocks.frontDeskAlerts,
      },
      stubs: ['AlertItem'],
    });

    const alerts = wrapper.findAllComponents(AlertItem);

    expect(alerts).toHaveLength(3);
  });

  it('Should render 0 alert items', () => {
    const wrapper = shallowMount(Alerts, {
      propsData: {
        alerts: [],
      },
      stubs: ['AlertItem'],
    });

    const alerts = wrapper.findAllComponents(AlertItem);

    expect(alerts).toHaveLength(0);
  });
});
