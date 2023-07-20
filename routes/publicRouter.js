const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/v1/:
 *   get:
 *     summary: Server Home Page
 *     description: Server Home Page
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Welcome to nexa sound
 */
router.get('/', (req,res) => {
    return res.json({
        success : true,
        message : "Welcome to nexa sound"
    })
})

module.exports = router;
