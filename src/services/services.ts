import axios from './instance';

import {
  BandEditFormData,
  LoginFormData,
  MembersFormData,
  SocialMediaFormData,
} from 'types';

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

export const deleteMember = async (_id: string, token: string) => {
  return axios.delete(`band/member?id=${_id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const uploadAvatar = async (
  data: FormData,
  _id: string,
  token: string
) => {
  return axios.put(`band/member/avatar?id=${_id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const addSocialMedia = async (
  data: SocialMediaFormData,
  token: string
) => {
  return axios.post('band/social-media', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const editSocialMedia = async (
  data: SocialMediaFormData,
  _id: string,
  token: string
) => {
  return axios.patch(`band/social-media?id=${_id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteSocialMedia = async (_id: string, token: string) => {
  return axios.delete(`band/social-media?id=${_id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const uploadIcon = async (
  data: FormData,
  _id: string,
  token: string
) => {
  return axios.put(`band/social-media/icon?id=${_id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const editBandInfo = async (data: BandEditFormData, token: string) => {
  return axios.put('band/info', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
