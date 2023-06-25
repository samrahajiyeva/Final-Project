const { body, validationResult } = require('express-validator')

const activityValidation = [
    body('title').notEmpty().withMessage('Activity title is required!'),
    body('day').notEmpty().withMessage('Remaining Days is required!'),
    body('content').notEmpty().withMessage('Content field is required !'),
    body('season').notEmpty().withMessage('Season is required !'),
    body('location').notEmpty().withMessage('Location is required !'),
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            res.status(422).json({ message: errors.array()[0].msg })
        }
        next()
    },
]

module.exports = activityValidation