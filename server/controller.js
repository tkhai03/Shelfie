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
    },
    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.delete_product(id)
        .then(() => res.status(200).send([]))
    },
    editProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {name, price, imgurl} = req.body

        db.edit_product([name, price, imgurl, id])
        .then(() => res.sendStatus(200))
    }
}