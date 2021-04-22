import authReducer from '../../reducers/auth';

test('should setup login uid', () => {
  const uid = 'ytryutyt66556';
  const state = authReducer(undefined, {
    type: 'LOGIN',
    uid,
  });
  expect(state.uid).toBe(uid);
});

test('should return no uid given logout action', () => {
  const state = authReducer(undefined, { type: 'LOGOUT' });
  expect(state).toEqual({});
});
