import {Component} from 'react'

class GeneralInfo extends Component{
    constructor(props){
      super(props)
    }
  
    render(){
      return(
        <div className='infosection'>
          <form className = 'general'>
            <fieldset>
            <legend>Personal Info</legend>
            <label htmlFor='name'>Enter Name</label>
            <input type='text' className='name' id='name' placeholder = 'Enter full Name'/>
            <br/>
            <label htmlFor='job'>Title:</label>
            <input type='text' className='job' id='job'/>
            <br/>
            <label htmlFor='mail'>Enter Mail</label>
            <input type = 'email' className='mail' id= 'mail'/>
            <br/>
            <label htmlFor='phone'>Enter Phone Number</label>
            <input type='tel' className='phone' id='phone' />
            </fieldset>
            
          </form>
        </div>
      )
    }
  }

export default GeneralInfo