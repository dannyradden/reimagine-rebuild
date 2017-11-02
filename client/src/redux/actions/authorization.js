import createApiRequest from '../../utils/createApiRequest';

export default function fetchUser() {
  return {
    type: 'FETCH_SIGNATURES',
    promise: createApiRequest('current_user', 'GET')
  };
}
