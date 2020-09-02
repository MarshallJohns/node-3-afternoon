module.exports = {
    create: (req, res) => {
        const db = req.app.get('db')
        const { name, description, price, image_url } = req.body

        db.create_product([name, description, price, image_url]).then(product => {
            res.status(200).send(product)
        }).catch(err => {
            res.status(500).send('Could not create produt')
        })
    },
    getOne: (req, res) => {
        const db = req.app.get('db')
        const { product_id } = req.body

        db.read_product([product_id]).then(product => {
            res.status(200).send(product)
        })
    },
    getAll: (req, res) => { },
    update: (req, res) => { },
    delete: (req, res) => { }
}