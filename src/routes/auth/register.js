module.exports = (req, res) => {
    console.log(req.body);
    if (req.body.password !== req.body.confirmPass){
        res.send({error: "Your passwords do not match"})
        return
    }
    res.send('Post Main Auth Router')
}