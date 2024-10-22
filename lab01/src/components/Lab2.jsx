import { useParams } from "react-router-dom";
import { data } from "../module-data";
import NotFound from "./NotFound";
import PersonProfile from "./PersonProfile";

function Lab2() {
  const { id } = useParams();
  const person = data.find((person) => person.id === parseInt(id));
  if (!person) {
    return <NotFound />;
  }
  return <PersonProfile {...person} />;
}

export default Lab2;

