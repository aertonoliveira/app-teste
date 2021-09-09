import styled from "styled-components/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

// import { RNCamera } from "react-native-camera";
import colors from "../../utils/GlobalStyles/colors";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.Background};
`;

export const Content = styled.View`
  flex: 1;
  padding-top: ${width * 0.4}px;
  justify-content: center;
  align-items: center;
`;

export const ContainerLoading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Preview = styled.View``;

// export const Camera = styled(RNCamera).attrs({
//   androidCameraPermissionOptions: {
//     title: "Permission to use camera",
//     message: "We need your permission to use your camera",
//     buttonPositive: "Ok",
//     buttonNegative: "Cancelar",
//   },
// })`
//   flex: 1;
//   justify-content: flex-end;
//   align-items: center;
// `;

export const CaptureView = styled.View`
  flex: 0;
  flex-direction: row;
  justify-content: center;
`;

export const CaptureButton = styled.TouchableOpacity`
  border-radius: 5px;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  margin-bottom: 150px;
`;

export const CaptureIcon = styled(Icon).attrs({
  name: "camera",
  size: 80,
  color: "#00325a",
})``;

export const ContainerPicture = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Picture = styled.Image`
  flex: 1;
  width: 300px;
  height: 300px;
`;

export const ContainerButtons = styled.View`
  flex: 1;
  flex-direction: row;
  padding-top: 20px;
`;

export const AcceptButton = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  background-color: green;
  margin: 10px 30px;
`;

export const AcceptIcon = styled(Icon).attrs({
  name: "check",
  size: 40,
  color: "#00325a",
})``;

export const RejectButton = styled(AcceptButton)`
  background-color: red;
`;

export const RejectIcon = styled(AcceptIcon).attrs({
  name: "close",
})``;
