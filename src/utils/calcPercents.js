const createPercents = (amount) => {
  if (typeof amount === 'number' && !Number.isNaN(amount)) {
    return `${amount * 100}%`;
  }

  return '0%';
};

export default createPercents;
