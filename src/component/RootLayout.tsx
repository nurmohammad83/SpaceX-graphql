
  import '../App.css'
  import { Layout } from "antd";
import Navbar from "./Navbar";
import FooterPage from './Footer';
  const {  Content } = Layout;
  
  const RootLayout = ({ children }:{children:React.ReactNode}) => {
    return (
      <Layout>
      <Navbar />
  
        <Content
          style={{
            padding: "0 24px",
            minHeight: "100vh",
          }}
        >
          {children}
        </Content>
  
       <FooterPage />
      </Layout>
    );
  };
  export default RootLayout;
  