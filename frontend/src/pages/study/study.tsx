import './study.css';

function Study() {

  return (
    <>
      <div className="study-background-wrapper">
        <img src="../../../assets/studybackground.svg" className="study-background"/>
        <img src="../../../assets/TasksList.svg" className="study-tasks-list"/>

        <div className="study-list-text-box"/>
            //this is a work in progress
            <input type="text" placeholder="Add new task" className="study-input-box"/>

            <button className="plus-button">
                <img src="../../../assets/plusbutton.svg" className="study-background"/>
            </button>

        </div>
    
    </>

      
    
  )
}

export default Study;