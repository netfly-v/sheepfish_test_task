import {FormikErrors} from 'formik';
import {FormDataType} from '../constants/types';

export const addFormValidate = (values: FormDataType) => {
  const errors: FormikErrors<FormDataType> = {};
  if (!values.title) {
    errors.title = 'Required';
  } else if (!/^[A-Za-z]+$/.test(values.title)) {
    errors.title = 'Invalid title, use only letters!';
  }
  if (!values.author) {
    errors.author = 'Required';
  } else if (!/^[A-Za-z]+$/.test(values.author)) {
    errors.author = 'Invalid author, use only letters!';
  }
  if (!values.year) {
    errors.year = 'Required';
  }
  if (!values.rating) {
    errors.rating = 'Required';
  }
  return errors;
};
