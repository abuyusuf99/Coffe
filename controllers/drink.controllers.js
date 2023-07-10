const Drink = require('../models/Drink.model')


module.exports.drinkController ={
getDrinks:(req,res)=>{
    Drink.find({}).select("title").select("price").then((data)=>{
        res.json(data)
    })
},
createDrinks:(req,res)=>{
    Drink.create({
        title: req.body.title,
        price: req.body.price,
        instock: req.body.instock,
        caffeine: req.body.caffeine,
        volume: req.body.volume,
        description: req.body.description
        }).then((data)=>{
            res.json(data)
        }).catch((err)=>{
            res.json("Ошибка при добавлении нового напитка")
        })
},
getDrinksId:(req,res)=>{
    Drink.findById(req.params.id).then((data)=>{
        res.json(data)
    })
},
getDrinkTrue:(req,res)=>{
    Drink.find(({instock: true})).then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.json(err)
    })
},
deleteDrinks:(req,res)=>{
    Drink.findByIdAndRemove(req.params.id).then((data)=>{
        res.json(data)
    })
},
patchDrinks:(req,res)=>{
    Drink.findByIdAndUpdate(req.params.id,req.body).then((data)=>{
        res.json(data)
    })
}
}