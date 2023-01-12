import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap"
import './App.css';
import data from "./data.json"
import Child from './Child'
import Chart from './Chart'
function App() {

  console.log(data.Scrip)
  return (
     <>
   
      <div className='container-fluid main'>
        <div className="row">
          <div className='col col-lg-9 col-md-12 col-sm-8 col-xs-12 m-auto mb-5 '>
            <Child data={data}/>
          </div>
          <div className='col col-lg-3 col-md-6 col-sm-8 col-xs-12 chart '>
            <h2>Portfolio</h2>
            <Chart/>
          </div>
        </div>
        
      </div>
     
      
     </>
  )
}

export default App;
