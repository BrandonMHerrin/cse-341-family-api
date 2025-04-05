export const handleDefaultGet = (req, res) => {
    if (req.session.passport?.user) {
        return res.status(200).send(req.session.passport.user);
    }
    return res.status(200).send("No user signed in.")
}