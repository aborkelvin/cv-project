import React,{ Component } from "react";

class Educationdetail extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="educationd">                    
                <h2 className='details'>{this.props.school} </h2>
                <h2 className='details'>{this.props.course}<span className="dated right">{this.props.date}</span></h2>                
            </div>

        )
    }
}

class Display extends Component{
    constructor(props){
        super(props)
        
        this.state={
            isComponentVisible:false,
        }
    }



    render(){
        return(
            <div className ='displaywrapper'>                
                <h1 className='leader'>{this.props.name}</h1>
                <h2 className='' id='jobd'>{this.props.job}</h2>
                <h2 className='contact'>Mail: {this.props.mail}</h2>
                <h2 className="contact">Phone: {this.props.phone}</h2>
                <hr/>        
                <h1 className='lead'>Education</h1>
                <Educationdetail school={this.props.school} course={this.props.course} date={this.props.date}/>

                {/* To be used for adding extra education details */}
                {this.state.isComponentVisible ? <Educationdetail school={this.props.school} course={this.props.course} date={this.props.date}/>: null}   

                <div className="experienced">                
                    <h1 className='lead'>Work Experience</h1>
                    <h2 className='details companyd'>{this.props.company} </h2>
                    <h2 className='details positiond'> {this.props.position} <span className="ranged right">{this.props.startdate} to {this.props.enddate}</span></h2>            
                    <h2 className='details summaryd' id='summaryid'>*{this.props.summary}</h2>
                </div>
            </div>
        )
    }
}


export default Display