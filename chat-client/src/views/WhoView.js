<<<<<<< HEAD
import { useParams } from "react-router-dom";

function WhoView() {
  let { id } = useParams();
  return <div>Chi siamo {id}</div>;
}
export default WhoView;
=======
const WhoView = () => (
  <div>
    Chi siamo
  </div>
);

export default WhoView;
>>>>>>> bcc0dd19413792a8629c9f147b1e11d410deed1a
