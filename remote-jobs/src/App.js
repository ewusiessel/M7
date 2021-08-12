/* eslint-disable react/jsx-no-undef */
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={MainSearch} />
      {/* <Route path='/:companyId' component={CompanySearchResults}> */}
    </BrowserRouter>
  );
}

export default App;
