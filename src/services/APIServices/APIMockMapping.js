import axios from '../../config/axios.config';

export const APIMockMapping = async () => {
  try {
    const result = await axios.get('/mapping/map');

    return result;
  } catch (error) {
    Promise.reject(error);
  }
};
