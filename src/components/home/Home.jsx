import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import "./home.scss";
import Widget from "../widget/Widget";
import visitsCountry from "../data/visitsCountry.json"
import VisitsCountry from "../charts/VisitsCountry";

const Home = () => {

  const sortVisitsCountry = visitsCountry.sort((a, b) => b.number - a.number);
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
        <div className="charts">
          <VisitsCountry
            title="Visits nach Ländern - Top 5"
            sortVisitsCountry={sortVisitsCountry}
          />
          <VisitsCountry
            title="Visits nach Ländern - Top 5"
            sortVisitsCountry={sortVisitsCountry}
          />
          
          
        </div>
      </div>
    </div>
  );
};

export default Home;
