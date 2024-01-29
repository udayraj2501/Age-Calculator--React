import { useState } from "react";
import styled from "styled-components";

const Appcontainer = styled.div`
   width:100%;
   height:100vh;
   background-color:#7281dd;
   display:flex;
   align-items:center;
   justify-content:center;
   
`;

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    
`;

const Heading = styled.h1`
   font-size: 50px;
   font-weight:bold;
   margin:50px;
   color:white;
`;

const Calculate = styled.div`
    width:450px;
    height:80px;
    font-size:100px;
    background-color:#a6b0f0;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:10px;
    margin-bottom:30px;
`;

const Input = styled.input`
   width:250px;
   padding:10px;
   margin-right:10px;
   border:none;
`;

const Button = styled.button`
   padding:10px;
   margin-left:10px;
   margin-right:10px;
   cursor:pointer;
   background-color:yellow;
   border:none;
   border-radius:5px;
`;

const Final = styled.div`

`;

const Ans = styled.p`
   display : ${ ({age}) => age ? 'block' : 'none'}
`;


function App() {
  const [age, setAge] = useState("");
  const [ans , setAns] = useState("")
  

  const calculateAge  = () => {

    const currentDate = new Date();
    const enteredDate = new Date(age);

    let cy = currentDate.getFullYear();
    let ey = enteredDate.getFullYear();
    let cm = currentDate.getMonth() + 1;
    let em = enteredDate.getMonth() + 1;
    let cd = currentDate.getDate();
    let ed = enteredDate.getDate();

    let yd , md, dd;
    yd = cy - ey ;
    
    if( cm >= em){
      md = cm - em;
    }
    else{
      yd--;
      md = 12 + cm - em;
    }

    if( cd >= ed){
      dd = cd - ed;
    }
    else{
      md--;
      dd = 30 + cd -ed;
    }

  

    
    setAns(`${yd} years , ${md} mongths and ${dd} days `)

  }

  return (
    <Appcontainer>
      <Container>
        <Heading>Age Calculator</Heading>

        <Calculate>
          <Input 
          type="date" 
          placeholder="Enter text"
          onChange = { (event) => setAge(event.target.value)}>   
         </Input>
          <Button 
          onClick = { () => {
            calculateAge()
          }}>Calculate</Button>
        </Calculate>

        <Final>
        {ans && <Ans age={age}>Your Age is {ans}</Ans>}
        </Final>
      </Container>
    </Appcontainer>
  );
}

export default App;
