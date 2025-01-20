import React, { useState } from "react";
import { useVideoContext } from "../../Contexts/VideoContext";
import {
  FormContainer,
  Input,
  Textarea,
  Button,
  FormTitle,
} from "./NewVideo.styled";

const NewVideo = () => {
  const { addVideo } = useVideoContext();
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    photo: "",
    link: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addVideo(formData);
    setFormData({
      title: "",
      category: "",
      photo: "",
      link: "",
      description: "",
    });
  };

  const handleReset = () => {
    setFormData({
      title: "",
      category: "",
      photo: "",
      link: "",
      description: "",
    });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle style={{fontFamily: "Just Another Hand"}}>NUEVO VIDEO</FormTitle>
      <Input
        type="text"
        name="title"
        placeholder="Título"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        name="category"
        placeholder="Categoria"
        value={formData.category}
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        name="photo"
        placeholder="URL de la Imagen"
        value={formData.photo}
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        name="link"
        placeholder="URL del Vídeo"
        value={formData.link}
        onChange={handleChange}
        required
      />
      <Textarea
        name="description"
        placeholder="Descripción"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <Button type="submit">Guardar</Button>
      <Button type="button" onClick={handleReset}>
        Limpiar
      </Button>
    </FormContainer>
  );
};

export default NewVideo;
