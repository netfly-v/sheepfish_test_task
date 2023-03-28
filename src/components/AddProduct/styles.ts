import {Field, Form} from 'formik';
import styled from 'styled-components';

export const AddProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 15px 200px;
`;

export const Label = styled.label`
  margin-top: 45px;
`;

export const StyledField = styled(Field)`
  width: 100%;
  height: 35px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${({theme}) => theme.palette.common.black};
  font-family: Poppins;
`;

export const FormElementWrapper = styled.div<{$isLeft?: boolean; $isRight?: boolean}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: ${({$isLeft}) => $isLeft && '20px'};
  margin-left: ${({$isRight}) => $isRight && '20px'};
`;

export const FormLineWrapper = styled.div`
  display: flex;
`;

export const SubmitButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 45px;
`;

export const StyledSubmitButton = styled.input`
  cursor: pointer;
  border: none;
  padding: 15px 48px;
  background-color: ${({theme}) => theme.palette.background.black};
  color: ${({theme}) => theme.palette.common.white};
  font-family: Poppins;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  border-radius: 5px;
  :hover {
    background-color: ${({theme}) => theme.palette.background.darkGray};
  }
`;
