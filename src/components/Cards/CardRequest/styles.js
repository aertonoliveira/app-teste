import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  margin-top: 15px;
  height: 150px;
  padding: 7px;
  border-radius: 5px;
`;

export const ContainerStatus = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const StatusView = styled.View`
  width: 80px;
  height: 30px;
  align-items: center;
  background-color: ${props =>
    props.status === 'fechado' ? '#c62c36' : '#049301'};
  padding-bottom: 3px;
  padding-top: 3px;
  padding-left: 8px;
  padding-right: 8px;

  margin-bottom: 7%;
`;

export const ContainerFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2%;
`;

export const StatusText = styled.Text`
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

export const Balance = styled.Text`
  font-size: 17px;
  color: #000;
  font-weight: bold;
  text-align: right;
`;

export const Title = styled.Text`
  color: #000;
  margin-bottom: 10px;
`;

export const Name = styled.Text`
  color: #000;

  font-weight: bold;
`;

export const Service = styled.Text`
  font-size: 15px;
  color: #000;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Date = styled.Text`
  font-size: 25px;
  color: #000;
  margin-bottom: 10px;
`;

export const Value = styled.Text`
  font-size: 25px;
  color: #000;
`;
