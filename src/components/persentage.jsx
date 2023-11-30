import "./persentage.css";


const Showpersentage = (props) => {
     return (
          <div>
               <div className={props.classname}>
                    {props.persent}
               </div>
          </div>
     )
}

export default Showpersentage;