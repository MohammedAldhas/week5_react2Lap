
interface programer {
    name:string,
    progLan:string,
    exper:number,
    Company:string,

}


export default function  Programer (Props:programer){
    return(
        <>
        <div className="card">
            <h4>{Props.name}</h4>
            <h5>{Props.progLan}</h5>
            <h4>{Props.exper}</h4>
            <h4>{Props.Company}</h4>
        </div>
        </>
    )

}