const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

Array.prototype.bubbleSort = function() {
    var n = this.length;
    while(n !== 0) {
        var newn = 0;
        for(var i = 1; i < this.length; i++) {
            if(this[i] < this[i - 1]) {
                var save = this[i];
                this[i] = this[i - 1];
                this[i - 1] = save;
                newn = i;
            }
        }
        n = newn;
    }
    return this;
}

app.post('/sort',jsonParser,(req,res) => {
    const numbers = req.body.numbers;
    const numArr = numbers.split(',');
    const result = numArr.bubbleSort();
    debugger;
    res.send({result});
})

app.use(bodyParser.json())
app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});