import React from 'react';
import styles from './AboutInternQuest.module.css';
import './AboutInternQuest.module.css';
import {Card} from 'react-bootstrap';
// import {Particles} from 'react-particles';

// const patriclesOptions={
//   particles:{
//       number:{
//           value:100,
//           density:{
//               enable:true,
//               value_area:1000
//           }
//       }
//   }
// }

const AboutInternQuest = () => (
  <div className={styles.AboutInternQuest} data-testid="AboutInternQuest">
  
    <Card className={styles.chead}>
      <Card.Body className={styles.cbody}>
          <h3 style={{textAlign:'center'}}  className="text-black display-3"> WELCOME </h3>
          <p style={{textAlignLast:'center'}} className="text-cyan">Since our opening, we have helped many to improve and learn new skills.<br/>
            Our commitment for exceptional service and incomparable customer care<br/> keeps
             our community coming back again and again.</p>
      </Card.Body>
    </Card>
  </div>
);

AboutInternQuest.propTypes = {};

AboutInternQuest.defaultProps = {};

export default AboutInternQuest;