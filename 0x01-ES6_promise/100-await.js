import { uploadPhoto, createUser } from './utils';

function res(promise) {
  return promise().then((value) => value);
}

export default async function asyncUploadUser() {
  try {
    return {
      photo: res(uploadPhoto),
      user: res(createUser),
    };
  } catch (e) {
    return ({
      photo: null,
      user: null,
    });
  }
}
