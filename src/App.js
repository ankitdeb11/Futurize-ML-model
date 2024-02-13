
import './App.css';
import Features from './components/features/Features';
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <>


      <Header />

      <main className='main'>
        <Home />
        <Features />

      </main>



    </>
  );
}

export default App;
