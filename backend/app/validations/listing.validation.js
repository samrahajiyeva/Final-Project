const { body, validationResult } = require('express-validator')

const listingValidation = [
    body('title').notEmpty().withMessage('Listing Title is required'),
    body('tripType').notEmpty().withMessage('Trip type is required !'),
    body('place').notEmpty().withMessage('Place is required !'),
    body('activity').notEmpty().withMessage('Activity is required !'),
    body('content').notEmpty().withMessage('Listing Content is required !'),
    body('price').notEmpty().withMessage('Price is required !'),
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            res.status(422).json({ message: errors.array()[0].msg })
        }
        next()
    },
]

module.exports = listingValidation