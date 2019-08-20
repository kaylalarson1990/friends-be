const express = require('express');
const app = express();
const cors = require('cors')

app.set('port', process.env.PORT || 3001);
app.locals.friends = [
    {id: 1, name: 'Taylor', gender: 'female', nickname: 'Tay'},
    {id: 2, name: 'Anneke', gender: 'female', nickname: 'Aneeky'},
    {id: 3, name: 'Ryan', gender: 'male', nickname: 'Ry'},
    {id: 4, name: 'Steve', gender: 'male', nickname: 'n/a'},
    {id: 5, name: 'Emily', gender: 'female', nickname: 'Em'},
    {id: 6, name: 'Evan', gender: 'male', nickname: 'n/a'},
    {id: 7, name: 'Sergio', gender: 'male', nickname: 'Serge'},
    {id: 8, name: 'Scott', gender: 'male', nickname: 'n/a'},
    {id: 9, name: 'Kayla', gender: 'female', nickname: 'KayMudge'},
    {id: 10, name: 'Christian', gender: 'female', nickname: 'Chrispy or Bear'}
]

app.use(cors());

app.get('/', (req, res) => {
    const { friends } = app.locals;
    res.status(200).json({ friends })
})

app.listen(app.get('port'), () => {
    console.log(`listening on port ${app.get('port')}`)
})