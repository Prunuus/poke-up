import './study.css';
import '../../styles/global.css';
import Stopwatch from './components/Stopwatch';

function Study() {

  return (
    <>
      <div className="background-wrapper">
        <div className="grid-column"> 
          
          <div className="tasklist-container">
            {/*
            <img src="../../assets/studybackground.svg" className="background"/>
            <img src="../../assets/TasksList.svg" className="tasks-list"/>

            <div className="list-text-box">
              //this is a work in progress
              <input type="text" placeholder="Add new task" className="input-box"/>

              <button className="plus-button">
                  <img src="../../assets/plusbutton.svg" className="background"/>
              </button>
            </div>
            */}
          </div>
          <div className='stopwatch-box'>
            <Stopwatch/>
          </div>
          <div className="banner-container">
            {/*insert banner here*/}
          </div>
        </div>
      </div>
        
    
    </>

      
    
  )
}

export default Study;