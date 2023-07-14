import { Outlet } from "react-router-dom";
import Header from "../components/common/header/Header";
import DefaultFooter from "../components/common/footer/defaultFooter";

export default function MainLayout() {
  return (
    <div>
      <Header />
      <div className="my-1">
        <Outlet />
      </div>
      <DefaultFooter />
    </div>
  );
}
