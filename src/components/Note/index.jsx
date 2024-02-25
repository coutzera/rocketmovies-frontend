import { Container } from "./styles";
import { Tag } from "../Tag";
import { Stars } from "../Stars";

export function Note({ data, children, ...rest }) {
  return (
    <Container {...rest}>
      <div className="header">
        <h1>{data.title}</h1>
        <Stars rating={data.rating} size={12} />
      </div>
      <div className="description">{children}</div>

      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}
