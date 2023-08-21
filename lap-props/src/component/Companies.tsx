import Serveces from "./Services";

interface programer {
  CompanyName: string;
  NumberOfBloyee: number;
  CompanyYear: number;
  typeOfServes: string;
  exper: number;
}

export default function Programer(Props: programer) {
  return (
    <>
      <div className="card">
        <h4>{Props.CompanyName}</h4>
        <h5>{Props.NumberOfBloyee}</h5>
        <h4>{Props.CompanyYear}</h4>
        <Serveces
          typeOfserveces={Props.typeOfServes}
          price={Props.exper}
        ></Serveces>
      </div>
    </>
  );
}
