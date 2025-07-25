import { Tabs } from 'antd';
import AllIterenaryTab from './AllIterenaryTab';
import { FavouriteTab } from './FavouriteTab';
import { TamplateTab } from './TamplateTab';
import TabLabel1 from './TabLabel1';
import TabLabel2 from './TabLabel2';
import TabLabel3 from './TabLabel3';



function WorkplaceTab() {
  return (
    <div>
            <Tabs
    defaultActiveKey="1"
    items={[
      {
        label: <TabLabel1/>,
        key: '1',
        children: <AllIterenaryTab/>,
      },
      {
        label: <TabLabel2/>,
        key: '2',
        children: <FavouriteTab/>,
        
      },
      {
        label: <TabLabel3/>,
        key: '3',
        children: <TamplateTab/>,
      },
    ]}
  />
    </div>
  )
}

export default WorkplaceTab