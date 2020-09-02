module.exports = {
    create: (req, res) => {
        const db = req.app.get('db')
        const { name, description, price, image_url } = req.body

        db.create_product([name, description, price, image_url]).then(product => {
            res.status(200).send(product)
        }).catch(err => {
            res.status(500).send('Could not create produt')
            console.log(err.message)
        })
    },
    getOne: (req, res) => {
        const db = req.app.get('db')
        const { product_id } = req.params

        db.read_product(product_id).then(product => {
            res.status(200).send(product)
        }).catch(err => {
            res.status(500).send('Could not find product')
            console.log(err.messsage)
        })
    },
    getAll: (req, res) => {
        const db = req.app.get('db')

        db.read_products().then(products => {
            res.status(200).send(products)
        }).catch(err => {
            res.send(500).send('There was an issue getting products')
            console.log(err.message)
        })
    },
    update: (req, res) => {
        const db = req.app.get('db')
        const { product_id } = req.params
        const { desc } = req.query

        console.log(desc)
        db.update_product([product_id, desc]).then(products => {
            console.log(products)
            res.status(200).send(products)
        }).catch(err => {
            res.status(500).send('Could not update product')
            console.log(err.message)
        })
    },
    delete: (req, res) => {
        const db = req.app.get('db')
        const { product_id } = req.params

        db.delete_product([product_id]).then(products => {
            res.status(200).send(products)
        }).catch(err => {
            res.status(500).send(`Could not delete product`)
            console.log(err.message)
        })
    }
}