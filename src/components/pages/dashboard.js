import Rechart from "../inc/rechart";
import { Link, useLocation } from "react-router-dom";
import Navigation from "../inc/navigation";
function Dashboard(props) {
  const { state } = useLocation();
  const { username } = state;
  return (
    <>
      <div class="banner1">
        <Navigation />
        <div class="d-flex justify-content-center">
          <Rechart />
        </div>
      </div>
      <div>
        <p>username: {username}</p>
      </div>
    </>
  );
}

export default Dashboard;
