import styled from 'styled-components/native';
import { H6 } from '../../Text';

export const Container = styled.TouchableOpacity`
  height: 50px;
  background: #3b9eff;
  border-radius: 25px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Text = styled(H6)`
  color: ${props => (props.color ? props.color : '#fff')};
  font-weight: bold;
`;
