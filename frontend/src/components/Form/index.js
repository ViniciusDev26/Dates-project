import React, {useState} from 'react';
import api from '../../services/api';
import swal from 'sweetalert';
import moment from 'moment';
import 'moment/locale/pt-br';

moment.locale('pt-BR');

export default function Form() {
  const [nome, setNome] = useState("");
  const [nota, setNota] = useState("");
  const [data, setData] = useState(moment().format("L"));
  const [observacoes, setObservacoes] = useState("");

  async function handleSubmit(event){
    event.preventDefault();

    if(!nota || nota > 5)
      return swal("Erro!", "Nota maior que 5 ou indefinida!", "error");

    if(!nome)
      return swal("Erro!", "Preencha o nome", "error");

    api.post('/storeAcontecimento', {
      nome, 
      nota, 
      observacoes,
      data:moment(data, "DD-MM-YYYY")._d}
    ).then(()=>{
      swal("Sucesso!", "data cadastrada com sucesso!", "success");
    }).catch((err)=>{
      console.log(err);
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col s6">
          <label htmlFor="nome">Nome</label>
          <input 
            id="nome" 
            value={nome}
            onChange={event => {setNome(event.target.value)}}
          />
        </div>

        <div className="col s4">
          <label htmlFor="data">Data:</label>
          <input 
            id="data"
            value={data}
            onChange={event => {setData(event.target.value)}}
          />
        </div>

        <div className="col s2">
          <label htmlFor="nota">Nota:</label>
          <input 
            id="nota"
            value={nota}
            onChange={event => {setNota(event.target.value)}}
          />
        </div>

        <div className="col s12">
          <label htmlFor="observacoes">Observações:</label>
          <input 
            id="observacoes"
            value={observacoes}
            onChange={event => {setObservacoes(event.target.value)}}
          />
        </div>

        <button 
          type="submit"
          className="col s4 offset-s4 waves-effect waves-light btn"
        >Submit</button>
      </div>
    </form>
  );
}