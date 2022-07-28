import axios from './instance';

import { LoginFormData } from 'types';

export const getMembers = async () => {
  return axios.get('band/members');
};

export const getSocialMedia = async () => {
  return axios.get('band/social-media');
};

export const getBandDetails = async () => {
  return axios.get('band');
};

export const login = async (data: LoginFormData) => {
  return axios.post('login', data);
};

export const deleteMember = async (_id: string, token: string) => {
  return axios.delete(`band/member?id=${_id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
