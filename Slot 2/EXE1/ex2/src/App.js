import logo from './logo.svg';
import './App.css';

function App() {
  let chao1= (name) => console.log(`Xin chao, ${name}`);
  let person = {
    id:1,name:"Duc",age:30,address:"Da Nang"
  }
  return (
    <div className="App">
      
       <h1>Xin chao, day la bai tap ve ham trong React</h1>
       <h2>Toi la Tran Nguyen Duc</h2>
      <button onClick={()=>chao1("Duc")}>Goi ham chao1</button>
    <div className="card"> 
      <h3>Thong tin person</h3>
      <p>ID :{person.id}</p>
       <p>Name :{person.name}</p>
        <p>Age :{person.age}</p>
         <p>Address :{person.address}</p>
    </div>
    </div>
  );
}

export default App;
