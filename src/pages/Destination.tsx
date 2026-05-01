import { useParams } from "react-router-dom";

export function DestinationPage() {
  const { id } = useParams();
  return (
    <div>
      <h1>Destination Page {id}</h1>
    </div>
  );
}
