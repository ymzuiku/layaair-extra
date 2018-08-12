import finger from 'fingerprintjs2';

function getFinger(cb) {
  try {
    new finger().get((res, comp) => {
      cb(res, comp);
    });
  } catch (err) {
    console.warn('finger get error', err);
  }
}

export default getFinger
