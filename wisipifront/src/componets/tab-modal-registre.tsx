import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import UserRegistrasion from './User-registry-form';

function ToubleTab() {
  return (
    <Tabs
      defaultActiveKey="user"
      id="uncontrolled-tab-example"
      className="mb-3" style ={{display: 'flex', flexDirection: 'row'}}
     
    >
       <Tab eventKey="user" title="Usario">
       <UserRegistrasion />
          </Tab>
          <Tab eventKey="transporter" title="Transportista">
            Tab content for Profile
       </Tab>
    </Tabs>
  );
}

export default ToubleTab;