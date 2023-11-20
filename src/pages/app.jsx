import React from "react";

import Menu from "../organisms/menu"
import Header from "../organisms/header"
import SubHeader from "../organisms/subHeader"
import Layout from "../templates/layout";
import "../styles/app.css"
function App() {
  return(
    <div className="App">
      <Layout>
        <Header />
        <Menu />
        <SubHeader />
      </Layout>
    </div>
);
}
export default App;