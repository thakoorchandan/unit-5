import "./App.css";
import useFetch from "./Utils/useFetch";

function App() {
  const { loading, error, data } = useFetch(
    "https://reqres.in/api/users?page=2"
  );

  return loading ? (
    <h2 className="App">Loading Data...</h2>
  ) : data?.data.length === 0 || error ? (
    <h2 className="App">Data Not Found</h2>
  ) : (
    <div className="App">
      {data?.data.map((item) => (
        <h1>{item.first_name}</h1>
      ))}
    </div>
  );
}

export default App;
