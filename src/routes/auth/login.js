const axios = require('axios');

module.exports = async (req, res) => {
    try{
        const mutation = `
            mutation register($email: String!, $password: String!){
                register(email: $email, password: $password)
            }
        `
        const { data } = await axios.post(process.env.GRAPHQL_ENDPOINT,
            {
                query: mutation,
                variables: {
                    email: req.body.email,
                    password: req.body.password
                }
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        const jwtToken = data.data.login

        res.cookie('jwtToken', jwtToken, {maxAge: 900000, httpOnly: true})

        res.redirect('/')
    }catch(err){
        console.log(err);
        res.redirect('/auth/register')
    }
}