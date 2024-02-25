import { useState } from "react";
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";
import { Container, Form, Background } from "./styles";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api.js";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
export function SignUp() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();
  function handleSingUp() {
    if (!name || !mail || !pass) {
      return alert("Preencha todos os campos");
    }

    api
      .post("/users", { name, mail, pass })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar.");
        }
      });
  }

  return (
    <Container>
      <Form>
        <h1>Rocketmovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>
        <div className="wrapper">
          <Input
            placeholder="Nome"
            type="text"
            icon={FiUser}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="E-mail"
            type="text"
            icon={FiMail}
            onChange={(e) => setMail(e.target.value)}
          />
          <Input
            placeholder="Senha"
            type="password"
            icon={FiLock}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>

        <Button title="Cadastrar" onClick={handleSingUp} />

        <Link to="/">
          <FiArrowLeft />
          Voltar para login
        </Link>
      </Form>
      <Background />
    </Container>
  );
}
