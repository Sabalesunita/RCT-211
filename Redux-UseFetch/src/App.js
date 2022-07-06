
 
import './App.css';
import { useFetch } from './Hooks/useFetch';
 

function App() {
 
 const {data, loading, error} = useFetch()

  return (
    <div className="App">
      {loading && "Loading"}
      {data?.length > 0 && 
      data.map((item) => {
        return <div key={item.id}> {item.login}</div>
        
      })}
    </div>
  );
}

export default App;

