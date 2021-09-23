
import DefaultConfig from '../config/config.default';
import TestConfig from '../config/config.test';
import DevConfig from '../config/config.dev';
import ProdConfig from '../config/config.prod';

export const config = (() => {
  if (process.env.NODE_ENV === 'development') {
    return { ...DefaultConfig, ...DevConfig };
  } else if (process.env.NODE_ENV === 'test') {
    return { ...DefaultConfig, ...TestConfig };
  } else if (process.env.NODE_ENV === 'production') {
    return { ...DefaultConfig, ...ProdConfig };
  } else {
    return DefaultConfig;
  }
})();
