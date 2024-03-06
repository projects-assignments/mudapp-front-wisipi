import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import UserRegistration from './User-registry-form';
import TransporterRegistration from './Transporter-registry-form';

function ToubleTab() {
  return (
    <Tabs
      defaultActiveKey="user"
      id="uncontrolled-tab-example"
      className="mb-3" style ={{display: 'flex', flexDirection: 'row'}}
     justify
    >
       <Tab eventKey="user" title="Usuario">
       <UserRegistration />
          </Tab>
          <Tab eventKey="transporter" title="Transportista">
           <TransporterRegistration/>
       </Tab>
    </Tabs>
  );
}

export default ToubleTab;