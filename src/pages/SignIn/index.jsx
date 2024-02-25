import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";
import { Container, Form, Background } from "./styles";

import { useAuth } from "../../hooks/auth";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
export function SignIn() {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  const { signIn } = useAuth();
  function handleSignIn() {
    signIn({ mail, pass });
  }
  return (
    <Container>
      <Form>
        <h1>Rocketmovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu Login</h2>
        <div className="wrapper">
          <Input
            placeholde="E-mail"
            type="text"
            icon={FiMail}
            onChange={(e) => setMail(e.target.value)}
          />
          <Input
            placeholde="Senha"
            type="password"
            icon={FiLock}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>

        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register">Criar Conta</Link>
      </Form>
      <Background />
    </Container>
  );
}
