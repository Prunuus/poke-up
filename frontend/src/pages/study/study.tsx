import './study.css';
import '../../styles/global.css';

function Study() {

  return (
    <>
      <div className="background-wrapper">
        <img src="../../assets/studybackground.svg" className="background"/>
        <img src="../../assets/TasksList.svg" className="tasks-list"/>

        <div className="list-text-box"/>
            //this is a work in progress
            <input type="text" placeholder="Add new task" className="input-box"/>

            <button className="plus-button">
                <img src="../../assets/plusbutton.svg" className="background"/>
            </button>

        </div>
    
    </>

      
    
  )
}

export default Study;