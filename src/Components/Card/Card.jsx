import { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { CardActions, CardContainer, IconButton } from "./Card.styled";
import { useVideoContext } from "../../Contexts/VideoContext";
import EditModal from "../EditModal/EditModal";

const Card = ({ video }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); // Estado para controlar si se está reproduciendo el video
  const { deleteVideo } = useVideoContext();

  const handleEdit = () => {
    setIsModalOpen(true); // Abre el modal de edición
  };

  const handleDelete = () => {
    const confirmed = window.confirm("¿Estás seguro de que deseas eliminar este video?");
    if (confirmed) {
      deleteVideo(video.id);
    }
  };

  // Función para cerrar el video
  const handleCloseVideo = (e) => {
    e.stopPropagation(); // Detiene la propagación del evento
    setIsPlaying(false);
  };
  
  const handleVideoContainerClick = (e) => {
    e.stopPropagation();
  };

  const handlePlayClick = () => {
    setIsPlaying(true); // Mostrar el video
  };

  // Usar useEffect para verificar cuando isPlaying cambia
  useEffect(() => {
    console.log("isPlaying ha cambiado:", isPlaying); // Verificar si isPlaying cambia correctamente
  }, [isPlaying]);

  return (
    <CardContainer>
      <div onClick={handlePlayClick} style={{ position: "relative", cursor: "pointer" }}>
        {!isPlaying ? (
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "200px",
              backgroundImage: `url(${video.photo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span
              className="play-icon"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "50px",
                color: "white"
              }}
            >
              ▶
            </span>
          </div>
        ) : (
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 999,
              width: "80%",
              height: "80%",
              backgroundColor: "black"
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src={video.link}
              title={video.title}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            <button
              onClick={handleCloseVideo}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "transparent",
                border: "none",
                color: "white",
                fontSize: "30px",
                cursor: "pointer",
                zIndex: 1000,
              }}
            >
              ✖
            </button>

          </div>
        )}
      </div>

      <CardActions>
        <IconButton onClick={handleDelete}>
          <FaTrashAlt />
        </IconButton>

        <IconButton onClick={handleEdit}>
          <FaEdit />
        </IconButton>
      </CardActions>

      {isModalOpen && (
        <EditModal
          video={video}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </CardContainer>
  );
};

export default Card;
