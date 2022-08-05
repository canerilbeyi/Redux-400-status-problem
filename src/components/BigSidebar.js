import NavLinks from "./NavLinks";
import Logo from "../components/Logo";
import Wrapper from "../assets/wrappers/BigSidebar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BigSidebar = ({ x }) => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  // console.log(x);
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen
            ? "sidebar-container"
            : "sidebar-container  show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Link to={"/"}>
              <Logo />
            </Link>
          </header>
          <NavLinks />
        </div>
        {/* <div>{x}</div> */}
      </div>
    </Wrapper>
  );
};
export default BigSidebar;
