var http = require('http'), express = require('express'), app = express();

app.set('port', process.env.PORT || 3000); 
 
app.get('/api/maths/add/:num1/:num2', function (req, res) {
        if(isNaN(req.params.num1)||isNaN(req.params.num2)) {
                res.status(400).json({executed: false, result: "Not numeric parameters"});
        } else {
                res.status(200).json({executed: true, result: parseInt(req.params.num1)+parseInt(req.params.num2)});
        }
});

http.createServer(app).listen(app.get('port'), function(){});

