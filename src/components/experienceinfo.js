import { Component } from "react";


class ExperienceInfo extends Component{
    constructor(props){
      super(props)
    }
  
    render(){
      return(
        <div className='infosection'>
          <form>
            <fieldset>
                <legend>Work Experience</legend>
                <label htmlFor = 'companyname'>Enter Company Name</label>
                <input type='text' className = 'companyname' id = 'companyname'/>
                <br/>
                <label htmlFor='position'>Position Title</label>
                <input type='text' className='position' id='position'/>
                <br/>                
                <textarea className='summary' id='summary' placeholder='Job Description' cols='30' rows='5'/>
                <br/>
                <label htmlFor='startdate'>Start Date</label>
                <input type='text' className='startdate' id='startdate' placeholder='DD-MM-YYYY'/>
                <br/>
                <label htmlFor='enddate'>End Date</label>
                <input type='text' className='enddate' id='enddate' placeholder='DD-MM-YYYY'/>
            </fieldset>
          </form>
        </div>
      )
    }
}
  
export default ExperienceInfo  