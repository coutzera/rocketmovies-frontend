import { FiPlus, FiX } from "react-icons/fi";

import { Container } from "./styles";

export function NoteItem({ isNew = false, value, onClick, ...rest }) {
  return (
    <Container $isnew={isNew.toString()}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />

      <button onClick={onClick} type="button" className="button-alter">
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
