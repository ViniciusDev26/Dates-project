import mongoose from 'mongoose';
const AcontecimentoSchema = new mongoose.Schema({
    data: Date,
    nome: String,
    nota: Number,
    observacoes: String
});

export default mongoose.model('Acontecimento', AcontecimentoSchema);