import logo from './logo.svg';
import './App.css';

function App() {
  var person={fname:'Syeed',sname:'Imtiaz'};
  var style={color:'gold'};

  const products=[
    {name:"Jacket",price:"170"},
    {name:"T-shirt",price:"150"}
  ]



  return (
    <div className="App">
  
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={style}>
        
        My name is {person.fname+" "+person.sname} .
        </p>
        <p style={{color:'lightblue'}}>My App</p>
        <Person></Person> 
        <Props course="React" teacher="Jhnkr"></Props>
      </header>
      <ProductCard product={products[0]}></ProductCard>
    </div>
     
  );
}

function Person() {

  const pstyle={
    margin:'10px',
    border:'2px solid gold',
    padding:'15px'
  }

  return (
    <div>
      <h1 style={pstyle}>React</h1>
    </div>
  )
}

function Props(pr){
  return (
    <div>
     <h3>Course name: {pr.course}</h3> 
     <h3>Instructor :{pr.teacher}</h3> 

    </div>
  )
}

function ProductCard(props){
  
  const {name,price}=props.product ;//Destructure 
  return(
  <div>
    { <h1>{name}</h1>/* De-structure */ }
    <h2>{props.product.price}</h2>
  </div>

)
}



export default App;
