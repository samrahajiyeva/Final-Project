const { body, validationResult } = require('express-validator')

const shopValidation = [
    body('title').notEmpty().withMessage('Title is required'),
    body('content').notEmpty().withMessage('Content is required !'),
    body('price').notEmpty().withMessage('Product Price is required !'),
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            res.status(422).json({ message: errors.array()[0].msg })
        }
        next()
    },
]

module.exports = shopValidation