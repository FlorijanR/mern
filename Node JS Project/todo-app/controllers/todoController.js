let data = [{ item: 'Feed the dog' }, { item: 'Learn Node JS' }, { item: 'Go Shopping' }]

const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = (app) => {
    app.get('/todo', (req, res) => {
        res.render('todo', { todos: data })
    })

    app.post('/todo', urlencodedParser, (req, res) => {
        data.push(req.body)
        res.json(data)
    })

    app.delete('/todo/:item', (req, res) => {
        console.log(data);
        data = data.filter((todo) => {
          const formattedTodo = todo.item.trim().toLowerCase();
          const formattedItem = req.params.item.trim().toLowerCase();
          return formattedTodo !== formattedItem;
        });
        console.log(data);
        res.json(data);
      });
}