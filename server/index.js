import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import postRoutes from './Routes/Posts.js';

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use('/posts', postRoutes);
const CONNECTION_URL =
	'mongodb+srv://Pratham_11:Pratham2712@cluster0.evdzl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose
	.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => app.listen(PORT, () => console.log(`Listening to ${PORT}`)))
	.catch((err) => console.log(err.message));

mongoose.set('useFindAndModify', false);
