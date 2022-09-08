import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol';

const Widget = ({ type }) => {
  let data;


  const diff = 20;

  switch (type) {
    case "Besucher":
      data = {
        title: "BESUCHER",
        amount: ``,
        isMoney: false,
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor:  "#1E1A26",
              color: "white",
            }}
          />
        ),
      };
      break;
    case "CTA":
      data = {
        title: "CTA",
        isMoney: false,
        amount: "",
        link: "",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "#1E1A26",
              color: "white",
            }}
          />
        ),
      };
      break;
    case "Gesamtumsatz":
      data = {
        title: "GESAMTUMSATZ",
        isMoney: true,
        link: "",
        icon: (
          <EuroSymbolIcon
            className="icon"
            style={{ backgroundColor: "#1E1A26", color: "white" }}
          />
        ),
      };
      break;
    case "Umsatz letzte 30 Tage":
      data = {
        title: "UMSATZ LETZTE 30 TAGE",
        isMoney: true,
        link: "",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "#1E1A26",
              color: "white",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
           {data.amount} {data.isMoney ? "€" : ""}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
