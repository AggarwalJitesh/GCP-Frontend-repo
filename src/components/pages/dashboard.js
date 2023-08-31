import Rechart from "../inc/rechart";
import { Link} from "react-router-dom";
import Navigation from "../inc/navigation";
function Dashboard() {
  return (
    <>
      <div class="banner1">
        <Navigation />
        <div class="d-flex justify-content-center">
          <Rechart />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
