import FlexContainer from "./FlexContainer";
import { data } from "../module-data";
import Card from "react-bootstrap/Card";

const Item = ({ name, id, className }) => (
  <Card
    style={{ width: `18rem` }}
    className={`border mb-3 p-3 ms-3 ${className}`}
    key={id}
  >
    {name}
  </Card>
);

function Lab3() {
  return (
    <>
      <h1>Lab3</h1>
      <FlexContainer element={Item} data={data} />
    </>
  );
}

export default Lab3;
