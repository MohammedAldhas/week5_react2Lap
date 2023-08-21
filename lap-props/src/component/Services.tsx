interface serveces {
    typeOfserveces:string,
    price:number,

    

}
// أنواع الخدمات والأسعار المتوقعة.

export default function  Serveces (Props:serveces){
    return(
        <>
        
            
            <h5>{Props.typeOfserveces}</h5>
            <h5>{Props.price}</h5>
            
        
        </>
    )

}