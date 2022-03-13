import { useParams } from "react-router-dom";

function WhoView() {
  let { id } = useParams();
  return <div>Chi siamo {id}</div>;
}
export default WhoView;
