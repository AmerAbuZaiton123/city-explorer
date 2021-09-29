import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Form from './component/Form';
import Location from './component/Location';
import Error from './component/Error';

export default class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
      cityName:'',
      lat: '',
      lon: '',
      show_Results: false,
      show_Error: false,
      Mass_Error: '',
        
    };
    }

    FormDataLocation=async(e)=>
    { e.preventDefault()
      let cityName1=e.target.value;
      this.setState({
        cityName:cityName1
      })
    }
   
     Submit = async(e) => {
      e.preventDefault(); 
        let Url=`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.cityName}&format=json`
       try{
            axios.get(Url).then(res=>{
              let data=res.data[0]
                 this.setState({
                 lat:data.lat,
                 lon:data.lon,
                 show_Results: true,
                 show_Error: false, 
              })
          console.log(data)
            }) 
           }
      catch{
      await  this.setState({
        show_Results: false,
        show_Error: true 
      })
    }
  
  }
  render() {
    return (
      <div>
     <Form FormDataLocation={this.FormDataLocation} Submit={this.Submit} />
     {this.state.show_Error && <Error show_Error={this.state.show_Error}/>}
     {this.state.show_Results&&<Location show_Results={this.state.show_Results} cityName={this.state.cityName}  lon={this.state.lon} lat={this.state.lat} />}       
      </div>
    )
  }
}
