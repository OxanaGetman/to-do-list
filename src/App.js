import './App.css';
import pic1 from './2.jpg';
import { DealList } from './DealList';

function App() {
  return (
    <div className='container'>
      <div className='parent'>
        <img className='pic1' src={pic1} width='200px' alt='pic1'/>
      </div>
      <div className='parent'>
        <h1>СПИСОК ДЕЛ</h1>
      </div>
      <DealList/>
    </div>
  );
}

export default App;
