import React from 'react';
import {connect} from 'react-redux';
import {FormDataType} from '../../constants/types';
import {addProductThunk} from '../../store/thunks/productsThunk';
import {Text} from '../../ui-kit/Typography/Text';
import {
  AddProductWrapper,
  StyledForm,
  FormLineWrapper,
  FormElementWrapper,
  Label,
  StyledField,
  SubmitButtonWrapper,
  StyledSubmitButton,
} from './styles';
import {ToastContainer} from 'react-toastify';
import {Formik, ErrorMessage} from 'formik';
import {addFormValidate} from '../../helpers/validations';

type AddProductPageProps = {
  addProduct: (d: FormDataType) => void;
};

const AddProductPage: React.FC<AddProductPageProps> = ({addProduct}) => {
  const onSubmit = (values: FormDataType) => {
    console.log(values);
    addProduct(values);
  };

  return (
    <AddProductWrapper>
      <Formik
        initialValues={{title: '', author: '', year: undefined, rating: undefined}}
        validate={addFormValidate}
        onSubmit={(values, {setSubmitting}) => {
          onSubmit(values);
          setSubmitting(false);
        }}>
        {({isSubmitting, values, handleChange}) => (
          <StyledForm>
            <FormLineWrapper>
              <FormElementWrapper $isLeft>
                <Label>
                  <Text size={'medium'}>Title</Text>
                  <StyledField type="text" name="title" onChange={handleChange} value={values.title} />
                </Label>
                <ErrorMessage name="title" component="div" />
                <Label>
                  <Text size={'medium'}>Author</Text>
                  <StyledField type="text" name="author" onChange={handleChange} value={values.author} />
                </Label>
                <ErrorMessage name="author" component="div" />
              </FormElementWrapper>
              <FormElementWrapper $isRight>
                <Label>
                  <Text size={'medium'}>Year</Text>
                  <StyledField
                    type="number"
                    name="year"
                    placeholder="YYYY"
                    min="1900"
                    max="2023"
                    onChange={handleChange}
                    value={values.year}
                  />
                </Label>
                <ErrorMessage name="year" component="div" />
                <Label>
                  <Text size={'medium'}>Rating</Text>
                  <StyledField
                    type="number"
                    name="rating"
                    min="1"
                    max="5"
                    onChange={handleChange}
                    value={values.rating}
                  />
                </Label>
                <ErrorMessage name="rating" component="div" />
              </FormElementWrapper>
            </FormLineWrapper>

            <SubmitButtonWrapper>
              <StyledSubmitButton type="submit" value="Add new product" disabled={isSubmitting} />
            </SubmitButtonWrapper>
          </StyledForm>
        )}
      </Formik>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="colored"
      />
    </AddProductWrapper>
  );
};

const mapDispatchToProps = {
  addProduct: addProductThunk,
};

export default connect(null, mapDispatchToProps)(AddProductPage);
