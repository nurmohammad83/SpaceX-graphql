/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Row, Carousel } from "antd";
import {
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { useQuery } from "@apollo/client";
import { GET_SHIPS } from "../graphql/queries";
import { Ship } from "../graphql/__generated__/graphql";

const contentStyle = {
  height: "425px",
  color: "#000",
};

const Hero = () => {
    const limit = 10;
    const offset = 5;
    const {  data } = useQuery(GET_SHIPS,{
      variables: { limit,offset },
    });
  return (
    <Carousel effect="fade" autoplay style={{ margin: "100px 0",height:"100%" }}>
      {/* slider-1 */}
      {
        data?.ships?.map((ship:Ship | null)=>(
            <div>
            <Row>
              <Col
              style={{display:"flex" ,flexDirection:"column",justifyContent:"center",alignItems:"center"}}
                lg={{
                  span: 12,
                }}
              >
                <h1 style={{ fontSize: "50px",textAlign:"center" }}>
                  {ship?.name}
                </h1>
                <div
                  className="line"
                  style={{
                    height: "5px",
                    margin: "20px 0",
                    background: "#000",
                    width: "95%",
                  }}
                ></div>
    
                <p
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "90%",
                    color: "gray",
                    margin: "10px 0px",
                  }}
                >
                  <span>
                    <CalendarOutlined /> {ship?.year_built}
                  </span>
                  <span>
                    <CommentOutlined /> {ship?.type}
                  </span>
                  <span style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap:"5px"
                  }}>
                    <ProfileOutlined /> {ship?.active ? <p>Active</p>:<p>Deactivate</p>}
                  </span>
                </p>
    
                <p style={{ fontSize: "20px", padding:"0 12px" }}>
                SpaceX's Starship spacecraft and super heavy rocket – the gleaming stainless steel rocket envisioned as a “fully reusable transportation system”...
                </p>
              </Col>
    
              <Col
                lg={{
                  span: 12,
                }}
                style={contentStyle}
              >
                <img
                  src={ship?.image ? ship.image : "https://images.unsplash.com/photo-1682687982185-531d09ec56fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"}
                  style={{ height: "100%", width: "100%" }}
                  alt=""
                />
              </Col>
            </Row>
          </div>
        ))
      }
     
    </Carousel>
  );
};
export default Hero;
