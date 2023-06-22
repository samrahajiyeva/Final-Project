const { body, validationResult } = require('express-validator')

const blogValidation = [
    body('title').notEmpty().withMessage('Blog title is required'),
    body('date').notEmpty().withMessage('Date is required !'),
    body('content').notEmpty().withMessage('Content is required !'),
    body('poster').notEmpty().withMessage('Poster is required !'),
    body('comment').notEmpty().withMessage('Comment is required !'),
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            res.status(422).json({ message: errors.array()[0].msg })
        }
        next()
    },
]

module.exports = blogValidation