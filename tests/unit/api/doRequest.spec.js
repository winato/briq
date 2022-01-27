import flushPromises from 'flush-promises';
import doRequest from '@/api/doRequest';

jest.mock('@/api/doRequest');

describe('api/statistic', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should do request', async () => {
    doRequest.mockResolvedValueOnce();

    doRequest();

    await flushPromises();

    expect(doRequest).toHaveBeenCalledTimes(1);
  });

  it('Should do request with right params success', async () => {
    doRequest.mockResolvedValueOnce();

    doRequest({
      method: 'GET',
      url: '/uri',
    });

    await flushPromises();

    expect(doRequest).toHaveBeenCalledWith({
      method: 'GET',
      url: '/uri',
    });
  });
});
