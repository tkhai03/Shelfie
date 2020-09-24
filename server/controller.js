module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db')
        // const {name, price, imgurl} = req.body

        /*app.get(/'test', (req, res) => {
            console.log('THIS IS A TEST')
            res.send('You did it')*/

        db.get_inventory()
        .then((products) => res.status(200).send(products))
        .catch((err) => {
            res.status(400).send( "We've encountered some technical difficulties")
            console.log(err)
        })
    },
    newProduct: (req, res) => {
        const db = req.app.get('db')
        const {name, price, imgurl} = req.body

        db.create_product(name, price, imgurl)
        .then((products) => res.status(200).send(products))
    }
}