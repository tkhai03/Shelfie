module.exports = {
    getInventory: (req, res, next) => {
        const db = req.app.get('db')
        // const {name, price, imgurl} = req.body

        db.getInventory()
        .then((products) => res.status(200).send(products))
        .catch((err) => {
            res.status(500).send( "We've encountered some technical difficulties")
            console.log(err)
        })
    }
}