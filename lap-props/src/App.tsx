import Companies from "./component/Companies";
import Programer from "./component/Programers";
import "./App.css";

function App() {
  return (
    <>
      <div className="cont">
        <Programer
          name="محمد الدهاس"
          progLan="css,HTML,JavaSvript"
          exper={4}
          Company="giji4"
        ></Programer>

        <Programer
          name="بندر الكعبي"
          progLan="css,HTML,JavaSvript"
          exper={6}
          Company="طويق"
        ></Programer>
        <Programer
          name="خالد العتيبي"
          progLan="css,HTML,JavaSvript"
          exper={2}
          Company="شركة 3"
        ></Programer>
      </div>

      <div className="cont">
        <Companies
          CompanyName="شركة الشاي"
          NumberOfBloyee={600}
          CompanyYear={50}
          typeOfServes="خداتنا "
          exper={3131}
        ></Companies>
        <Companies
          CompanyName="شركة m"
          NumberOfBloyee={590}
          CompanyYear={30}
          typeOfServes="خداتنا "
          exper={3131}
        ></Companies>
        <Companies
          CompanyName="شركة T"
          NumberOfBloyee={550}
          CompanyYear={50}
          typeOfServes="خداتنا "
          exper={3131}
        ></Companies>
      </div>
    </>
    // <div className="card">
    // <h4>{Props.CompanyName}</h4>
    // <h5>{Props.NumberOfBloyee}</h5>
    // <h4>{Props.CompanyYear}</h4>
  );
}

export default App;
