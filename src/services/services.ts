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
  id: string,
  token: string
) => {
  return axios.patch(`band/member?id=${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteMember = async (id: string, token: string) => {
  return axios.delete(`band/member?id=${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const uploadAvatar = async (
  data: FormData,
  id: string,
  token: string
) => {
  return axios.put(`band/member/avatar?id=${id}`, data, {
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
  id: string,
  token: string
) => {
  return axios.patch(`band/social-media?id=${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteSocialMedia = async (id: string, token: string) => {
  return axios.delete(`band/social-media?id=${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const uploadIcon = async (data: FormData, id: string, token: string) => {
  return axios.put(`band/social-media/icon?id=${id}`, data, {
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

export const uploadBandImage = async (data: FormData, token: string) => {
  return axios.put('band/image', data, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });
};
