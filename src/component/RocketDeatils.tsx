import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card,  } from 'antd';
import { Rocket } from '../graphql/__generated__/graphql';

const { Meta } = Card;

function RocketDetails({ rocket }:{rocket:Rocket | null}) {

  return (
    <Card
        style={{ width: 600, marginTop: 16 }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
          <Meta
          style={{textAlign:"center"}}
            title={rocket?.name}
            description={rocket?.description}
          />
      </Card>
  )
}
export default RocketDetails
