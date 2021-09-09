import React, { useRef, useState, useEffect } from "react";
import { Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import FormData from "form-data";

import api from "../../services/api";
import { Avatar } from "react-native-paper";
import ImagePicker from "react-native-image-picker";

import Icon from "react-native-vector-icons/MaterialIcons";
import {
  Container,
  LogoutButton,
  FormInput,
  Form,
  ImageView,
  EditImage,
  TextBtn,
  IconEditImage,
  IconCamera,
} from "./styles";

export default function Profile() {
  const [avatar, setAvatar] = useState();
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const userId = useSelector((state) => state.user.profile.id);

  useEffect(() => {
    async function loadImage() {
      const response = await api.get(`users/${userId}`);

      setAvatar(response.data.avatar);
    }

    loadImage();
  }, [userId]);

  function imagePickerCallback(data) {
    if (data.didCancel) {
      return;
    }
    if (data.error) {
      return;
    }
    if (!data.uri) {
      return;
    }

    setAvatar(data);
    uploadImage(data);
  }

  async function uploadImage(file) {
    try {
      setLoading(true);
      const avatar = new FormData();

      avatar.append("avatar", {
        uri: file.uri,
        type: file.type,
        name: `${new Date().getTime()}.jpg`,
      });

      await api.post("/avatars", avatar, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.log(error);
      Alert.alert("Tente novamente", "Houve um error ao alterar o perfil");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <ImageView>
        {/* <Icon name="account-circle" size={200} color={'#fff'} /> */}
        <Avatar.Image
          source={{
            uri: avatar
              ? avatar.path
              : "https://mltmpgeox6sf.i.optimole.com/w:761/h:720/q:auto/https://redbanksmilesnj.com/wp-content/uploads/2015/11/man-avatar-placeholder.png",
          }}
          size={80}
        />
        <IconEditImage
          onPress={() =>
            ImagePicker.showImagePicker(
              {
                title: "Mudar avatar",
                cancelButtonTitle: "cancelar",
                mediaType: "photo",
                takePhotoButtonTitle: "Tirar uma foto",
                chooseWhichLibraryTitle: "Selecionar imagem",
                chooseFromLibraryButtonTitle: "Selecionar",
                noData: true,
              },
              imagePickerCallback
            )
          }
        >
          <IconCamera />
        </IconEditImage>
      </ImageView>
      {/* <Form>
        <FormInput
          icon="person-outline"
          keyboardType="text"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Nome"
          returnKeyType="next"
        />
        <FormInput
          icon="person-outline"
          keyboardType="text"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Sobrenome"
          returnKeyType="next"
        />
        <FormInput
          icon="email"
          // keyboardType="email"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Email"
          returnKeyType="next"
        />
        <FormInput icon="lock-outline" passwordField placeholder="Senha" />
      </Form> */}
    </Container>
  );
}
