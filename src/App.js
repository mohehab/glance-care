import { getMoviesData } from './utils/data';
import { useEffect } from 'react';
import Header from './components/Header';

function App() {
  useEffect(() => {
    getMoviesData()
  }, [])
  
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
