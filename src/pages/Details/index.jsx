import { FiClock } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { api } from "../../services/api.js";

import { Container, Content } from "./styles.js";
import { Tag } from "../../components/Tag";
import { Stars } from "../../components/Stars";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { useAuth } from "../../hooks/auth.jsx";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();
  const { user } = useAuth();

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movies/${params.id}`);
      setData(response.data);
    }
    fetchMovie();
  }, []);

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente excluir o filme?");
    if (confirm) {
      await api.delete(`/movies/${params.id}`);
      navigate(-1);
    }
  }
  return (
    <Container>
      <Header />
      {data && (
        <main>
          <ButtonText title="Voltar" onClick={handleBack} />
          <Content>
            <div className="header">
              <h1>{data.title}</h1>
              <Stars rating={data.rating} size={25} />
            </div>

            <div className="publish">
              <div className="author">
                <img src={avatarURL} alt={user.name} />
                <span>Por {user.name}</span>
              </div>
              <div className="datetime">
                <FiClock />
                <span>{data.updated_at}</span>
              </div>
            </div>
            {data.tags && (
              <div className="tags">
                {data.tags.map((tag) => (
                  <Tag key={String(tag.id)} title={tag.name} />
                ))}
              </div>
            )}
            <div className="description">{data.description}</div>
            <div className="input-wrapper">
              <Button title="Excluir filme" onClick={handleRemove} />
            </div>
          </Content>
        </main>
      )}
    </Container>
  );
}
