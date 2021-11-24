
export default function handler(req, res) {
    const login = req.body.login
    const password = req.body.password

    if (login === 'shamshod' && password === 'qwerty123' ) {
        res.status(200).json({status: 'ok'})
    } else {
        res.status(200).json({status: 'false', login: login, password: password})
    }
}
