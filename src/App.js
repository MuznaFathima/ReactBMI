
import { Button, Grid, TextField } from '@mui/material';
import './App.css';
import { Col, Row } from 'react-bootstrap';
import { useState } from 'react';



function App() {

  const[age,setAge]=useState()
  const[height,setHeight]=useState()
  const[weight,setWeight]=useState()
  const[bmi,setBmi]=useState()
  const[text,setText]=useState()


  console.log(age,height,weight);
  function calculateBmi() {
    if (age && height && weight)
     {
      const calculatedBmi = weight / ((height / 100) ** 2);
      const fixed=calculatedBmi.toFixed(1)
      setBmi(fixed);
  
      if (calculatedBmi <= 18.4) {
        setText("You are underweight");
      } else if (calculatedBmi <= 24.9) {
        setText("Your weight is normal");
      } else if (calculatedBmi <= 39.9) {
        setText("You are overweight");
      } else {
        setText("You are obese");
      }
    } else {
      alert('Fill all columns');
    }
  }

  const reset=()=>{

    setAge(" ")
    setHeight(' ')
    setWeight(" ")
    setBmi(" ")
    setText(" ")

  }

  return (
    // jsx code
    <div className='app'>
 <h1 className='heading'>BMI Calculator</h1>
      <Row className='row'>
        <Col md={4}></Col>


        <Col md={4}>
          <div className="container">

           
            {/* <div className='radio'>
              <input type="radio" name='gender' id='male' />
              <label htmlFor="male">Male</label>

              <input type="radio" name='gender' id='female' />
              <label htmlFor="female">Female</label>
            </div> */}
            <div className='age'>
              <h3 className='title'>Enter Your Age</h3>
              <TextField value={age || " "} onChange={e=>setAge(e.target.value)}
               id="outlined-basic" label="Age" variant="outlined" />
            </div>
            <div className='height'>
              <h3 className='title'>Enter Your Height</h3>
              <TextField value={height || " "} onChange={e=>setHeight(e.target.value)} id="outlined-basic" label=" height in Cm" variant="outlined" />
            </div>
            <div className='weight'>
              <h3 className='title'>Enter Your Weight</h3>
              <TextField value={weight || " "} onChange={e=>setWeight(e.target.value)} id="outlined-basic" label="weight in Kg" variant="outlined" />
            </div>
          <Grid container spacing={14} style={{marginTop:'40px',marginLeft:'65px'}}>
            
               <Grid item xs>
                  <Button onClick={calculateBmi} className='btn' variant="contained" color="success" >
                    Calculate
                  </Button>
               </Grid>
               <Grid item xs>
                  <Button onClick={reset} className='btn2' variant="contained" color="secondary">
                    Reset
                  </Button>
               </Grid>
              
          </Grid>


          </div>
        </Col>
        <Col md={4}><div className='output'>
          <h1 value={bmi|| " "}className='result'>{bmi}</h1>
          <h3 value={text|| " "} className='text'>{text}</h3>
          </div></Col>
      </Row>

    </div>
  );
}

export default App;
