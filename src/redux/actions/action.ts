export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

export const ation = (payload = 1) => ({
  type: INCREMENT_COUNTER,
  payload,
});
