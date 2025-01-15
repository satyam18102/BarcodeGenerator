import Barcode from 'react-barcode';
import './App.css'
import { Input } from "@chakra-ui/react"
import { Field } from "./components/ui/field"
import { Button } from "@chakra-ui/react"
import { LuArrowRight } from "react-icons/lu"
import { useState } from "react"
import { Spinner, VStack } from "@chakra-ui/react"

function App() {
  let [text,setText]=useState("");
  let [loading,setLoading]=useState(false);
  let [value,setValue]=useState();



  let handleChange=(evt)=>{
    setText(evt.target.value);
  }
  
  let handleSubmit= async(evt)=>{
    setLoading(true);
    evt.preventDefault();
    let bar=text.toUpperCase();
    setValue(bar);
    setText();
    setLoading(false);
  };
if(!loading){
  return (
    <>
      <form onSubmit={handleSubmit}>
      <Field >
      {/* <Heading size="4xl" mb="4" className="not">Barcode Generator</Heading> */}
      <h1>Barcode Generator</h1>
        <Input placeholder="Search City" mb="6" onChange={handleChange} required value={text} />
        <Button colorPalette='teal' type="submit" mb="9" variant="solid">
        Generate Barcode <LuArrowRight />
      </Button>
      <Barcode className="barcode" value={value} background='#fff' lineColor='#000' fontSize="25" width='2' font='monospace'/>
        <br />
      </Field>
      </form>
    </>
  )
}
  if(loading){
    return(
      <div>
      <VStack colorPalette="teal">
        <Spinner color="colorPalette.600" className="loader"/>
        <Heading color="colorPalette.600" size="xl" mb="8">Loading...</Heading>
      </VStack> 
      </div>
    )
  }
}

export default App
