import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import CryptoList from "./components/CryptoList";
import Pagination from "./components/Pagination";

function App() {
  const [coinsData, setCoinsData] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        );
        setCoinsData(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="app">
      <h1>Crypto gallery</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <CryptoList coinsData={currentPosts} />
          <Pagination
            totalPosts={coinsData.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
}

export default App;
