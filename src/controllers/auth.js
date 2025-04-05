/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
export const handleGihubCallBack = (req,res) => {
    res.redirect('/api-docs');
};

export const handleLogout = (req, res) => {
    req.logout((error) => {
        if (error) return res.status(500).send(error.message);
        res.redirect('/api-docs');
    })
}