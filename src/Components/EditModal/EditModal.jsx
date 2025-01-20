import { FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";  
import { useVideoContext } from "../../Contexts/VideoContext";
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  ModalForm,
  Input,
  Select,
  TextArea,
  Button,
} from "./EditModal.styled";

const EditModal = ({ video, isOpen, onClose }) => {
  const [updatedVideo, setUpdatedVideo] = useState({ ...video });
  const { updateVideo } = useVideoContext();
  const [categories, setCategories] = useState([]); 

  useEffect(() => {

    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:3000/videos');
        const data = await response.json();
        const uniqueCategories = [...new Set(data.map(video => video.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error al obtener categorías:', error);
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedVideo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    updateVideo(video.id, updatedVideo);
    onClose(); // Cierra el modal después de guardar
  };

  return (
    <ModalOverlay >
      <ModalContent>
        <CloseButton onClick={onClose}>
          <FaTimes />
        </CloseButton>
        <h3>EDITAR CARD:</h3>
        <ModalForm>
          <label>Título</label>
          <Input
            type="text"
            name="title"
            value={updatedVideo.title}
            onChange={handleChange}
          />
          <label>Categoría</label>
          <Select
            name="category"  // Cambiado de "categoria" a "category" para coincidir con el modelo de datos
            value={updatedVideo.category}
            onChange={handleChange}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Select>
          <label>Imagen</label>
          <Input
            type="url"
            name="photo"
            value={updatedVideo.photo}
            onChange={handleChange}
          />
          <label>Video</label>
          <Input
            type="url"
            name="link"  // Cambiado de "videoUrl" a "link" para coincidir con el modelo de datos
            value={updatedVideo.link}
            onChange={handleChange}
          />
          <label>Descripción</label>
          <TextArea
            name="description"
            value={updatedVideo.description}
            onChange={handleChange}
          />
          <Button type="button" onClick={handleSave}>
            GUARDAR
          </Button>
        </ModalForm>
      </ModalContent>
    </ModalOverlay>
  );
};

export default EditModal;