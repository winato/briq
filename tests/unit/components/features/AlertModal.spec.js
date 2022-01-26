import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import AlertModal from '@/components/features/Alerts/AlertModal.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('AlertModal.vue', () => {
  describe('methods', () => {
    let actions;
    let store;
    let mutations;

    beforeEach(() => {
      actions = {
        createAlertAction: jest.fn(),
      };
      mutations = {
        closeModal: jest.fn(),
      };

      store = new Vuex.Store({
        modules: {
          alerts: {
            actions,
            mutations,
            namespaced: true,
          },
        },
      });
    });

    describe('createAlert', () => {
      it('Should trigger createAlertAction and close method', async () => {
        const wrapper = shallowMount(AlertModal, { store, localVue });

        wrapper.vm.close = jest.fn();

        await wrapper.vm.createAlert();

        expect(actions.createAlertAction).toHaveBeenCalled();
        expect(wrapper.vm.close).toHaveBeenCalled();
      });
    });

    describe('close', () => {
      it('Should trigget close modal and clear text', async () => {
        const wrapper = shallowMount(AlertModal, { store, localVue });

        await wrapper.setData({
          text: 'Some text',
        });

        await wrapper.vm.close();

        expect(mutations.closeModal).toHaveBeenCalled();
        expect(wrapper.vm.text).toBe('');
      });
    });
  });
});
