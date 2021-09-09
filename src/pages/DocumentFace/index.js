import React, { useState, useEffect, useContext } from "react";

import { ActivityIndicator } from "react-native";
import { useDispatch } from "react-redux";

import { signUpFinished } from "../../store/modules/auth/actions";

import api from "../../services/api";

import {
  ContainerLoading,
  Container,
  Content,
  // Camera,
  CaptureView,
  CaptureButton,
  CaptureIcon,
  ContainerPicture,
  Picture,
  ContainerButtons,
  AcceptButton,
  AcceptIcon,
  RejectButton,
  RejectIcon,
} from "./styles";

import { useSelector } from "react-redux";

import AuthContext from "../../pages/Auth/AuthContext";

import { useNavigation } from "@react-navigation/native";

const PendingView = () => (
  <ContainerLoading>
    <ActivityIndicator size="large" color="#fff" />
  </ContainerLoading>
);

const PictureView = ({ image, setPicture, handleSendDocument }) => (
  <Content>
    <ContainerPicture>
      <Picture source={{ uri: image.uri }} />
      <ContainerButtons>
        <RejectButton onPress={() => setPicture()}>
          <RejectIcon />
        </RejectButton>
        <AcceptButton onPress={() => handleSendDocument(image)}>
          <AcceptIcon />
        </AcceptButton>
      </ContainerButtons>
    </ContainerPicture>
  </Content>
);

export default function DocumentFace({ route }) {
  const dispatch = useDispatch();
  const [picture, setPicture] = useState();
  const { setRegistred } = useContext(AuthContext);

  const navigation = useNavigation();

  const userId = useSelector((state) => state.user.profile.id);

  const [position, setPosition] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    setPicture(null);
    setPosition(Camera.Constants.Type.front);
  }, []);

  const { data, option } = route.params;

  async function takePicture(camera) {
    const options = { quality: 0.5, base64: true };
    let data = await camera.takePictureAsync(options);

    setPicture(data);
  }

  async function handleSendDocument() {
    try {
      const document = new FormData();

      document.append("document", {
        uri: picture.uri,
        type: "jpg/jpeg", //picture.type,
        name: `${new Date().getTime()}.jpg`,
      });

      try {
        const result = await api.post(
          `/documents?document_type=self&user=${userId}`,
          document,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        const updateSendDocument = await api.put(
          `/senddocument?user=${userId}`
        );
      } catch (error) {
        console.log(error);
      }

      navigation.navigate("Menu");

      setRegistred(true);
      dispatch(signUpFinished());
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      {picture ? (
        <PictureView
          image={picture}
          setPicture={setPicture}
          handleSendDocument={handleSendDocument}
        />
      ) : (
        <></>
        // <Camera type={position}>
        //   {({ camera, status }) => {
        //     if (status !== "READY") {
        //       return <PendingView />;
        //     }
        //     return (
        //       <CaptureView>
        //         <CaptureButton onPress={() => takePicture(camera)}>
        //           <CaptureIcon />
        //         </CaptureButton>
        //       </CaptureView>
        //     );
        //   }}
        // </Camera>
      )}
    </Container>
  );
}
