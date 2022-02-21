
import './App.css';
import FooterComponent from './components/FooterComponent';
import FormComponent from './components/FormComponent';

function App() {
  return (
    <>
    <div className="container p-5 bg-light">
      <FormComponent/>
    </div>

    <div className='fixed-bottom'>
    <FooterComponent/>
    </div>
    </>
  );
}

export default App;
