//git@github.com:mqttjs/MQTT.js.git


var mqtt = require('mqtt')
// var client  = mqtt.connect('mqtt://test.mosquitto.org')
var client  = mqtt.connect('mqtt://localhost:1883')

client.on('connect', function () {
  client.subscribe('presence', function (err) {
    if (!err) {
      client.publish('presence', '这是一个测试mqtt的')
    }
  })
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  // client.end()
})


setInterval(function(){
    client.publish("mqtt/demo",""+new Date().getTime())
},300)


function f2() {
  var client1  = mqtt.connect('mqtt://localhost:1883')
  client1.on('connect',function () {
    console.log("client is connedted!")
      client1.publish("mqtt/demo","------"+new Date().getTime())
      client1.end()
  })




}

setInterval(f2,1000)
