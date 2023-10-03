import {
  FacebookFilled,
  LinkedinFilled,
  GoogleSquareFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import "../App.css";
import { Layout } from "antd";
const { Footer } = Layout;

const FooterPage = () => {
  return (
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      <div className="line"></div>
      <h2
        style={{
          fontSize: "28px",
        }}
      >
        SpaceX
      </h2>
      <p className="social_icons">
        <a href="/">
          <FacebookFilled />
        </a>
        <a href="/">
          <TwitterSquareFilled />
        </a>
        <a href="/">
          <GoogleSquareFilled />
        </a>
        <a href="/">
          <LinkedinFilled />
        </a>
      </p>
      SpaceX ©2023 Created by Nur Mohammad
    </Footer>
  );
};
export default FooterPage;
