import './App.css';
import React,{Component} from 'react';
import Display from './components/display';
import GeneralInfo from './components/generalinfo';
import EducationInfo from './components/educationinfo';
import ExperienceInfo from './components/experienceinfo';

class App extends Component{
  constructor(props){
    super(props)

    this.state={
      name:'',
      job:'',
      mail:'',
      phone:'',
      schoolname:'',
      course:'',
      studydate:'',
      companyname:'',
      position:'',
      summary:'',
      startdate:'',
      enddate:'',

      isComponentVisible:false,
    }

    this.submitforms = this.submitforms.bind(this);
    this.editforms = this.editforms.bind(this);
    this.addeducation= this.addeducation.bind(this)
  }
  
  submitforms(){
    let name = document.querySelector('.name');
    let job = document.querySelector('.job')
    let mail = document.querySelector('.mail');
    let phone= document.querySelector('.phone');
    let schoolname = document.querySelectorAll('.schoolname');
    schoolname = Array.from(schoolname);
    let course  = document.querySelector('.course');
    let studydate  = document.querySelector('.studydate');
    let companyname  = document.querySelector('.companyname');
    let position  = document.querySelector('.position');
    let summary  = document.querySelector('.summary');
    let startdate  = document.querySelector('.startdate');
    let enddate  = document.querySelector('.enddate');
    let hideforms = document.querySelectorAll('.infosection');
      hideforms.forEach(function(item){
      item.style.display = 'none';
    }) 

    console.log(schoolname[0].value)
    this.setState({
      name:name.value,
      job:job.value,
      mail:mail.value,
      phone:phone.value,
      
      schoolname:schoolname.value,

      course:course.value,
      studydate:studydate.value,
      companyname:companyname.value,
      position:position.value,
      summary:summary.value,
      startdate:startdate.value,
      enddate:enddate.value,
    })

    let displaywrapper = document.querySelector('.displaywrapper');
    if(displaywrapper){
    displaywrapper.style.display = 'block'
    }
    document.querySelector('.submit').style.display = 'none'
    document.querySelector('.edit').style.display = 'block'
  }


  editforms(){
    let displaywrapper = document.querySelector('.displaywrapper');
    let hideforms = document.querySelectorAll('.infosection');
    
    if(displaywrapper){
      displaywrapper.style.display = 'none';
    }

    document.querySelector('.submit').style.display = 'block'
    document.querySelector('.edit').style.display = 'none'
     
    hideforms.forEach(function(item){
      item.style.display = 'block';
    }) 
  }


  addeducation(){
    this.setState({
      isComponentVisible:!this.state.isComponentVisible
    });
  }


  render(){
    return (
      <div className="App">        
        <GeneralInfo/>
        <EducationInfo/>
        <button onClick = {this.addeducation} className='extras'>Add Education</button>
        {this.state.isComponentVisible ? <EducationInfo/> : null}   
        <ExperienceInfo/>
        <button className='extras'>Add Experience</button>
        <Display name ={this.state.name} mail={this.state.mail} phone={this.state.phone}  school ={this.state.schoolname} 
        course={this.state.course} date={this.state.studydate} company={this.state.companyname} position ={this.state.position} 
        summary={this.state.summary} startdate = {this.state.startdate} enddate = {this.state.enddate} job={this.state.job}/>
        
        
        <button onClick = {this.submitforms} className='submit'>Submit Application</button>
        <button onClick={this.editforms} className='edit'>Edit Application</button>

      </div>
    );
  }
}

export default App;