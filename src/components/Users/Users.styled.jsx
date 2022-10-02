import styled from '@emotion/styled';
import { FormStyles } from 'components/Form/Form.styled';

export const FindUser = FormStyles.withComponent('div');

export const DeleteBtn = styled.button`
  border: 0;
  padding: 7px;
  border-radius: 10px;
  margin-left: 10px;
  cursor: pointer;
`;

export const User = styled.li`
  :not(:last-child) {
    margin-bottom: 7px;
  }
`;
