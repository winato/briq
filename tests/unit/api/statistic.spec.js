import flushPromises from 'flush-promises';
import statisticServices from '@/api/statistic';

jest.mock('@/api/statistic');

describe('api/statistic', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('getStatistic success', async () => {
    statisticServices.getStatistic.mockResolvedValueOnce();

    statisticServices.getStatistic();

    await flushPromises();

    expect(statisticServices.getStatistic).toHaveBeenCalledTimes(1);
  });
});
