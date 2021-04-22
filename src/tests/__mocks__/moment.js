// can't use:
// import moment from 'moment
// because it would try to import itself, so import the original with ...
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
  return moment(timestamp);
};
