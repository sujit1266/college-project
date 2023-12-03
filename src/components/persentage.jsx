import "../styling/persentage.css";


const Showpersentage = (props) => {
     return (
          <div className="outerpersentage-div">
               <div className={props.classname}>
                    {props.persent}
               </div>
               <p>{props.name}</p>
          </div>
     )
}

export default Showpersentage;