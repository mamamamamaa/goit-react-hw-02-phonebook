import styled from '@emotion/styled';
import { Form } from 'formik';

export const FormStyles = styled(Form)`
  padding: 20px;
`;

export const Label = styled.label`
  font-weight: 500;
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const SubmitBtn = styled.button`
  border: 0;
  padding: 10px;
  border-radius: 10px;

  cursor: pointer;
`;
