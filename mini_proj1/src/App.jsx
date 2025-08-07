import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegisterForm_class from './RegisterForm_class';
import RegisterForm_hooks from './RegisterForm_hooks';

function App() {
  return (<>
    <h1>Registration Forms Demo</h1>
    <br />
    <Router>
      <nav style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '30px' }}>
        <Link
          to='/registration_class'
          style={{
            padding: '10px 20px',
            textDecoration: 'none'
          }}
        >
          Registration Class
        </Link>
        <span style={{ margin: '0 10px', fontSize: '20px', alignSelf: 'center' }}>|</span>
        <Link
          to='/registration_hooks'
          style={{
            padding: '10px 20px',
            textDecoration: 'none'
          }}
        >
          Registration Hooks
        </Link>
      </nav>

      <Routes>
        <Route path='*' element={<h1>404 File Not Found</h1>} />
        <Route path='/registration_hooks' element={<RegisterForm_hooks />} />
        <Route path='/registration_class' element={<RegisterForm_class />} />
      </Routes>
    </Router>

  </>);
}
export default App;