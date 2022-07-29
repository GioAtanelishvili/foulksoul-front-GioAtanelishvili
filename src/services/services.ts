import axios from './instance';

import { LoginFormData, MembersFormData } from 'types';

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

export const addMember = async (data: MembersFormData, token: string) => {
  return axios.post('band/member', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteMember = async (_id: string, token: string) => {
  return axios.delete(`band/member?id=${_id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const editMember = async (
  data: MembersFormData,
  _id: string,
  token: string
) => {
  return axios.patch(`band/member?id=${_id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
