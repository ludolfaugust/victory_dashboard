import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import "./home.scss";
import Widget from "../widget/Widget";

const Home = () => {
  return (
    <div className="home">
      
      <Sidebar /> 
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="Besucher" />
          <Widget type="CTA" />
          <Widget type="Gesamtumsatz" />
          <Widget type="Umsatz letzte 30 Tage" />
        </div>
      </div>
    </div>
  );
};

export default Home;
