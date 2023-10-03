import {
    ProfileOutlined,

  } from "@ant-design/icons";
  import '../App.css'
  import { Layout, Menu } from "antd";
  const { Header } = Layout;

const Navbar = () => {
  return (
    <Header
    style={{
      display: "flex",
      justifyContent: "space-between",
    }}
  >
    <div className="brand-logo">
      <h1>
        <a
          href="/"
          style={{
            color: "white",
            backgroundColor: "#404040",
            padding: "5px 10px",
            borderRadius: "3px",
          }}
        >
          SpaceX
        </a>
      </h1>
    </div>
    <Menu theme="dark" mode="vertical" className='menu_items'>
      <a href="/allNews" style={{marginRight:"15px",fontSize:"15px"}}>
          <ProfileOutlined />
          All Rockets
      </a>
    </Menu>
  </Header>
  )
}
export default Navbar