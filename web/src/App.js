import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Bar} from './components/navbar.js';
import Container from 'react-bootstrap/esm/Container.js';
import { BrowserRouter as Router } from 'react-router-dom'
import {Routes, Route} from 'react-router-dom';
import { QuestPage } from './pages/QuestPage.js';
import {Row} from 'react-bootstrap'
import { LandingPage } from './pages/LandingPage.js';
import { BonusPage } from './pages/BonusPage.js';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, get } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app); 

const dbRef = ref(getDatabase());

async function getQuests(db) {
  const questsCol = collection(db, 'quests')
}

function App() {
  return (
    <div>
    <Row>
      <div className='App-navbar'>
      <Container fluid>
      <Bar />
      </Container>
      </div>
    </Row>
    <Row>
      <div className='App'>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/quests' element={<QuestPage/>}/>
        <Route path='/bonus' element={<BonusPage/>}/>
      </Routes>
      </div>
    </Row>
    </div>
  );
}

export default App;
