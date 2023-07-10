const express = require('express')
const app = express()
const mongoose = require('mongoose')
app.use(express.json())

app.use(require('./routes/drink.route'))






app.listen(2000,()=>{
    console.log("Сервер подключен")
})
mongoose.connect("mongodb+srv://Muslim:***Muslim95@cluster0.b4yowf9.mongodb.net/Coffee").then(()=>{
console.log('Сервер MongoDb подключен');
}).catch(()=>{
    console.log("Ошибка соединения с севрером MongoDB");
})