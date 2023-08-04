
import logo from './logo.svg';
import './App.css';


function App() {
  var person={fname:'Syeed',sname:'Imtiaz'};
  var style={color:'gold'};

  const products=[
    {name:"Jacket",price:"170"},
    {name:"T-shirt",price:"150"},
    {name:"Shoe",price:"1150"}
  ]

  const teachers=["Jamil sir","Amanullah sir","Tanvir sir","Hasin sir","Kafi sir"];
   
  const listyle={
    margin:'10px',
    border:'2px solid gold',
    padding:'15px',
    listStyle:'none' 
  }

  const cardStyle={
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    margin:'10px',
    gap:'15px'
  }

  const productNames=products.map(product=>product.name);
  console.log(productNames);

  return (
    <div className="App">
  
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p style={style}>
        
        My name is {person.fname+" "+person.sname} .
        </p>
        <p style={{color:'lightblue'}}>My App</p>
        <Person></Person> 
        <Props course="React" teacher="Jhnkr"></Props>
       
       <p>Teachers name:</p>
       <ul style={listyle}>
         {
           teachers.map(sir=><li>{sir}</li>)
         }
       </ul>
       

      </header>
      
    
      <div style={cardStyle}>
        {
       products.map(pd=> <ProductCard product={pd}></ProductCard> )
        }
        </div>
    
      <ProductCard product={products[0]}></ProductCard>
      <ProductCard product={products[1]}></ProductCard>
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
  
  const cardStyle={
    margin:'10px',
    border:'2px solid grey',
    padding:'15px'
  }

  const {name,price}=props.product ;//Destructure 
  return(
  <div style={cardStyle}>
     <h1>{name}</h1>  {/* De-structure  */}
                     
    <h2>{price}</h2> {/* without De-structure  */}
  </div>

)
}



export default App;
