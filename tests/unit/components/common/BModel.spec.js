import { shallowMount } from '@vue/test-utils';
import BModel from '@/components/common/BModal/index.vue';

describe('BModal.vue', () => {
  it('Should display modal window', async () => {
    const wrapper = shallowMount(BModel);

    await wrapper.setProps({
      isOpen: true,
    });

    const modal = wrapper.find('.modal');

    expect(modal.exists()).toBe(true);
  });

  it('Should close modal window', async () => {
    const wrapper = shallowMount(BModel, {
      propsData: {
        isOpen: true,
      },
    });

    await wrapper.setProps({
      isOpen: false,
    });

    const modal = wrapper.find('.modal');

    expect(modal.exists()).toBe(false);
  });

  it('Should have close button', () => {
    const wrapper = shallowMount(BModel, {
      propsData: {
        isOpen: true,
      },
    });

    const closeButton = wrapper.find('.modal__close');

    expect(closeButton.exists()).toBe(true);
  });

  it('Should trigger event after click on close button', async () => {
    const wrapper = shallowMount(BModel, {
      propsData: {
        isOpen: true,
      },
    });

    const closeButton = wrapper.find('.modal__close');

    await closeButton.trigger('click');

    expect(wrapper.emitted().close).toBeTruthy();
  });

  it('Should render all slots', async () => {
    const wrapper = shallowMount(BModel, {
      propsData: {
        isOpen: true,
      },
      slots: {
        default: '<p>Body</p>',
        header: '<h1>Header</h1>',
        actions: '<button>Button</button>',
      },
    });

    const header = wrapper.find('h1');
    const body = wrapper.find('p');
    const actions = wrapper.find('button');

    expect(header.exists()).toBe(true);
    expect(body.exists()).toBe(true);
    expect(actions.exists()).toBe(true);
  });

  it('Shouldn`t render actions', async () => {
    const wrapper = shallowMount(BModel, {
      propsData: {
        isOpen: true,
      },
      slots: {
        default: '<p>Body</p>',
        header: '<h1>Header</h1>',
      },
    });

    const header = wrapper.find('h1');
    const body = wrapper.find('p');
    const actions = wrapper.find('button');

    expect(header.exists()).toBe(true);
    expect(body.exists()).toBe(true);
    expect(actions.exists()).toBe(false);
  });

  it('Shouldn`t render body and actions', async () => {
    const wrapper = shallowMount(BModel, {
      propsData: {
        isOpen: true,
      },
      slots: {
        header: '<h1>Header</h1>',
      },
    });

    const header = wrapper.find('h1');
    const body = wrapper.find('p');
    const actions = wrapper.find('button');

    expect(header.exists()).toBe(true);
    expect(body.exists()).toBe(false);
    expect(actions.exists()).toBe(false);
  });

  it('Shouldn`t render modal without any slot', async () => {
    const wrapper = shallowMount(BModel, {
      propsData: {
        isOpen: true,
      },
    });

    const header = wrapper.find('h1');
    const body = wrapper.find('p');
    const actions = wrapper.find('button');

    expect(header.exists()).toBe(false);
    expect(body.exists()).toBe(false);
    expect(actions.exists()).toBe(false);
  });
});
