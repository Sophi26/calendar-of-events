const Express = require("express");
const BodyParser = require("body-parser");
const fs = require("fs");

let app = Express();
let jsonParser = BodyParser.json();

app.use(Express.static(__dirname + "/public"));

// получение списка данных
app.get(
    "/api/events",
    (req, res) => {          
        const content = fs.readFileSync("events.json", "utf8");    
        const events = JSON.parse(content);   
        res.send(events);
    });

// получение отправленных данных
app.post(
    "/api/events",
    jsonParser,
    (req, res) => {         
        if (!req.body) return res.sendStatus(400);      
        const eventName = req.body.name;    
        const eventStartData = req.body.startData;
        const eventEndData = req.body.endData;    
        let event = {
            name: eventName,
            startData: eventStartData + '+03:00',
            endData: eventEndData + '+03:00'
        };         
        let data = fs.readFileSync("events.json", "utf8");    
        let events = JSON.parse(data);
        // добавляем пользователя в массив  
        events.push(event);    
        data = JSON.stringify(events);
        // перезаписываем файл с новыми данными    
        fs.writeFileSync("events.json", data);    
        res.json(event);
    }); 

app.listen(8081, () => {    
    console.log("Сервер ожидает подключения...");
});