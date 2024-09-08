const mongo = require("mongoose");
const blogSchema = require("../model/blog.model");
require('dotenv').config();

const mongourl = process.env.DB_URL;
console.log(mongourl);
const option = {
	useNewUrlParser: true,
	useUnifiedTopology: true

};



mongo.set('strictQuery', true);

mongo.connect(`${mongourl}`,option);

const createData = async (data)=>{
	const collection = new blogSchema(data);
	const dataRes = await collection.save();
	return dataRes;
}

const getAll = async ()=>{
	const data = await blogSchema.find();
	return data;
}

const getByQuery = async (query)=>{
	const data = await blogSchema.find(query);
	return data;
}

module.exports = {
	createData: createData,
	getAll: getAll,
	getByQuery: getByQuery
}