import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate, useResolvedPath } from "react-router-dom";
import { MdMovieEdit, MdOutlineHowToVote } from "react-icons/md";

import { api } from "../../services/api";

import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";

export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewMovie() {
    if (!title) {
      return alert("Digite o título do filme!");
    }
    if (newTag) {
      return alert(
        "Você deixou uma tag no campo para adicionar, porém não adicionou. Clique no + para adicionar ou deixe o campo vazio"
      );
    }
    await api.post("/movies", { title, description, rating, tags });
    alert("Filme cadastrado com sucesso.");
    navigate(-1);
  }

  return (
    <Container>
      <Header />
      <main>
        <Link to="/">
          <FiArrowLeft />
          Voltar
        </Link>
        <Form>
          <header>
            <h1>Novo filme</h1>
          </header>

          <div className="input-wrapper">
            <Input
              type="text"
              placeholder="Título"
              icon={MdMovieEdit}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              type="number"
              placeholder="Sua nota (de 0 a 5)"
              icon={MdOutlineHowToVote}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>

          <div className="input-wrapper">
            <Textarea
              placeholder="Observações"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <Section title="Marcadores">
            <div className="section-wrapper">
              {tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => {
                    handleRemoveTag(tag);
                  }}
                />
              ))}
              <NoteItem
                isNew
                placeholder="Nova Tag"
                onChange={(e) => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <div className="input-wrapper">
            <Button title="Excluir filme" className="invert-color" />
            <Button title="Salvar Alterações" onClick={handleNewMovie} />
          </div>
        </Form>
      </main>
    </Container>
  );
}
