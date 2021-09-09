import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { H6 } from '../../Text';

export const Container = styled(RectButton)`
  height: 50px;
  border: 1px solid ${props => (props.color ? props.color : '#ccc')};
  border-radius: 25px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Text = styled(H6)`
  color: ${props => (props.color ? props.color : '#ccc')};
  font-weight: bold;
`;
