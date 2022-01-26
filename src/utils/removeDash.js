const removeDash = (string) => {
  if (typeof string === 'string' && Boolean(string)) {
    return string.replace(/-/g, ' ');
  }

  return '';
};

export default removeDash;
