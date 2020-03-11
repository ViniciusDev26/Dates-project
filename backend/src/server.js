import express from 'express';
import routes from './routes';
import mongoose from 'mongoose';
import cors from 'cors';

mongoose.connect('mongodb+srv://oministack:123@cluster-7otrh.mongodb.net/datasRelacionamento?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3334);