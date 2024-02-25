import { Container } from "./styles";
import { MdOutlineStarOutline, MdOutlineStarPurple500 } from "react-icons/md";

export function Stars({ rating, size }) {
  let myArray = new Array(5).fill(undefined);

  return (
    <Container>
      {myArray.map((e, index) => {
        if (index + 1 <= rating) {
          return (
            <li key={String(index)} className="bg">
              <MdOutlineStarPurple500 size={size} />
            </li>
          );
        } else {
          return (
            <li key={String(index)}>
              <MdOutlineStarOutline size={size} />
            </li>
          );
        }
      })}
    </Container>
  );
}
