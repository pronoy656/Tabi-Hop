import { Tabs } from 'antd';
import AllIterenaryTab from '../../../components/Workplace/AllIterenaryTab';
import { FavouriteTab } from '../../../components/Workplace/FavouriteTab';
import AdmminTabLabel from './AdminTabLabel';
import AdmminTabLabel2 from './AdminTabLabel2';
import { EditProfileTab } from './EditProfileTab';
import { ChangePasswordTab } from './ChangePasswordTab';




function AdminAccountTab() {
  return (
    <div>
            <Tabs
    defaultActiveKey="1"
    items={[
      {
        label: <AdmminTabLabel/>,
        key: '1',
        children: <EditProfileTab/>,
      },
      {
        label: <AdmminTabLabel2/>,
        key: '2',
        children: <ChangePasswordTab/>,
        
      },
    
    ]}
  />
    </div>
  )
}

export default AdminAccountTab