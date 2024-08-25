// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import Dashboard from './components/Dashboard';
import SidePanel from './components/SidePanel';

function App() {
    return (
        <Container fluid>
            <Row>
                <h2 className='text-center p-2 m-0'>Dashboard</h2>
                <hr className='m-0' />
                <Col lg={10} className='p-3 dashboard'>
                    <Dashboard />
                </Col>
                <Col lg={2} className='border-start p-3 border-secondary-subtle sidepanel'>
                    <SidePanel />
                </Col>
            </Row>
        </Container>
    );
}

export default App;