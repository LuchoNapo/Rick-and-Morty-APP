import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import {Spinner} from "reactstrap"
import "./App.css";
import { Filter } from "./components/Filter/Filter";
import { Cards } from "./components/Cards/Cards";
import { useState } from "react";
import { useEffect } from "react";
import { Footer } from "./components/Footer/Footer";
import { Pagination } from "./components/Pagination/Pagination";
import { Search } from "./components/Search/Search";
import { NavBar } from "./components/NavBar/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Episodes } from "./Pages/Episodes";
import { Location } from "./Pages/Location";
import { CardDetails } from "./components/Cards/CardDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />

        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

const Home = () => {
  const [page, setPage] = useState(1);
  const [fetchedData, setFectchedData] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [specie, setSpecie] = useState("");
  const api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}&status=${status}&gender=${gender}&species=${specie}`;
  const { info, results } = fetchedData;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      setFectchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center mb-4 mt-4 ubuntu">Characters</h1>
      <Search setSearch={setSearch} setPage={setPage} />
      <div className="container">
        <div className="row">
          <Filter
            setSpecie={setSpecie}
            setGender={setGender}
            setStatus={setStatus}
            setPage={setPage}
          />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page="/" results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination info={info} page={page} setPage={setPage} />
    </div>
  );
};

export default App;
