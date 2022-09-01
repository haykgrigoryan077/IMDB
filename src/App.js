import { useEffect, useState } from 'react';
import './App.css';
import MovieBox from './components/MovieBox';
import getData from './contextFile';

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    getData(setData)
  }, [])

  return (
    <div className="App">
      <MovieBox
        data={data}
      />
    </div>
  );
}

export default App;
