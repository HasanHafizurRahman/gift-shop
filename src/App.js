import { useState } from "react";
import "./App.css";
import GiftWrapper from "./pages/GiftWrapper";
import IntroPage from "./pages/IntroPage";
import SelectGift from "./pages/SelectGift";

function App() {
  const [page, setPage] = useState(1);
  return (
    <div>
      {page === 1 && <IntroPage setPage={setPage} />}
      {page === 2 && <SelectGift setPage={setPage} />}
      {page === 3 && <GiftWrapper setPage={setPage} />}
    </div>
  );
}

export default App;
