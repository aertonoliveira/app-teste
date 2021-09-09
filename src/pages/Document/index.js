import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";

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
import { useEffect } from "react";

import { useSelector } from "react-redux";

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

export default function Document({ route }) {
  const navigation = useNavigation();
  const [picture, setPicture] = useState();

  const { data, option } = route.params;

  const userId = useSelector((state) => state.user.profile.id);

  useEffect(() => {
    setPicture(null);
  }, []);

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
          `/documents?document_type=id_front&user=${userId}`,
          document,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      } catch (error) {
        console.log(error);
      }

      await setPicture(null);

      if (option === "front") {
        navigation.navigate("SendDocumentsReverse", { data });
      } else {
        navigation.navigate("SendDocumentsFace", { data });
      }
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
        // <Camera type={Camera.Constants.Type.back}>
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
