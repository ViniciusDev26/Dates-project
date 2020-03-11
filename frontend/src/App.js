import React, {useState, useEffect} from 'react';
import Table from './components/Table/index';
import Form from './components/Form/index';
import api from './services/api';
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

function App() {
  const [body,setBody] = useState([]);

  useEffect(()=>{
    async function listAcontecimentos(){
      const response = await api.get("/indexAcontecimento");
      
      setBody(response.data);
    }
  
    listAcontecimentos();
  }, []);


  const request = {
    title: "Datas do Relacionamento:",
    headers: ["data", "nome", "relevancia"],
    body: body
  }

  return (
    <div className="container">
      <Table request={request}/>
      <Form />
    </div>
  );
}

export default App;
