const {Router} = require("express")
const {drinkController} = require("../controllers/drink.controllers")
const router = Router()


router.get('/Drinks',drinkController.getDrinks)
router.post('/Drinks', drinkController.createDrinks)
router.get('/Drinks/:id',drinkController.getDrinksId)
router.get('/Drink/instock',drinkController.getDrinkTrue)
router.delete('/Drinks/:id',drinkController.deleteDrinks)
router.patch('/Drinks/:id',drinkController.patchDrinks)

module.exports = router