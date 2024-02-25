import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiPlus, FiSearch } from "react-icons/fi";

import { Container, Content, Button } from "./styles";
import { Note } from "../../components/Note";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { api } from "../../services/api";

export function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movies?title=${search}`);
      setMovies(response.data);

      console.log(response.data);
    }
    fetchMovies();
  }, [search]);

  return (
    <Container>
      <Header>
        <Input
          placeholder="Pesquisar pelo título"
          icon={FiSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Header>
      <main>
        <div className="header">
          <h1>Meus filmes</h1>
          <Button to="/new">
            <FiPlus />
            Adicionar filme
          </Button>
        </div>
        <Content>
          {movies.map((movie) => (
            <Note
              key={String(movie.id)}
              data={movie}
              onClick={() => handleDetails(movie.id)}
            >
              <p>{movie.description}</p>
            </Note>
          ))}
        </Content>
      </main>
    </Container>
  );
}
