import Acontecimento from '../models/Acontecimento';

export default {
  async store(req, res) {
    const { data, nome, nota, observacoes } = req.body;

    const acontecimento = await Acontecimento.create({data, nome, nota, observacoes});

    return res.json(acontecimento);
  },

  async index(req, res) {
    const response = await Acontecimento.find();

    return res.json(response);
  }
}