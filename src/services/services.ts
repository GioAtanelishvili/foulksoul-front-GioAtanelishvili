import axios from './instance';

export const getMembers = async () => {
  return axios.get('band/members');
};

export const getSocialMedia = async () => {
  return axios.get('band/social-media');
};

export const getBandDetails = async () => {
  return axios.get('band');
};
