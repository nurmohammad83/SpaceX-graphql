import { useQuery } from "@apollo/client";
import { Col, Row } from "antd";
import { GET_ROCKETS } from "../graphql/queries";
import { Rocket } from "../graphql/__generated__/graphql";
import RocketDetails from "./RocketDeatils";


const Rockets = () => {
    const {  data } = useQuery(GET_ROCKETS);
  return (
  <div>
    <h2 style={{textAlign:"center"}}>All Rockets</h2>
      <Row style={{padding:"40px 0"}} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {
            data?.rockets?.map((rocket:Rocket | null)=>(
                <Col span={12} key={rocket?.id}>
                <RocketDetails rocket={rocket}/>
            </Col>
            ))
        }
    </Row>
  </div>
  )
}
export default Rockets