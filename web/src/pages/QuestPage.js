import Container from 'react-bootstrap/esm/Container.js';
import {BrowserRouter as Router} from 'react-router-dom';
import { MappedTable } from '../components/table';
import { Row } from 'react-bootstrap';

export const QuestPage = (props) => {
    return (  
        <div className='quest-page'>
            <Row className='top-row'>
                <p class="text-center text-nowrap text-white">Welcome to the Quest panel, here you can adbhjawbdhjaw bdjhwahdjkwabdjnawbdhj awbd hjawbdjnawbd</p>
            </Row>
            <Row>
                <MappedTable/>
            </Row>
        </div>
      )
}