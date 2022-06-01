import {Component} from 'react'

class EducationInfo extends Component{
    constructor(props){
      super(props)
    }
  
    render(){
      return(
        <div className='infosection'>
          <form>
            <fieldset>
                <legend>Education</legend>
                <label htmlFor= 'schoolname'>Enter School Name</label>
                <input type='text' className = 'schoolname' id = 'schoolname'/>
                <br/>
                <label htmlFor='course'>Course of study</label>
                <input type='text' className='course' id='course'/>
                <br/>
                <label htmlFor='studydate'>Date of study</label>
                <input type='text' className='studydate' id='studydate' placeholder='DD-MM-YYYY'/>
            </fieldset>
          </form>
        </div>
      )
    }
  }

export default EducationInfo