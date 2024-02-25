import { Container } from "./styles";

export function Section({ title, children }) {
  return (
    <Container>
      <h2>{title}</h2>
      <div className="content">{children}</div>
    </Container>
  );
}
