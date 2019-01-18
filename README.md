mqtt-demo的demo项目
## mqtt-server
git@github.com:toke/docker-mosquitto.git
## mqtt-client
git@github.com:mqttjs/MQTT.js.git

## 在浏览器中使用方法，用webpack打包：
···
npm install -g browserify // install browserify
cd node_modules/mqtt
npm install . // install dev dependencies
browserify mqtt.js -s mqtt > browserMqtt.js // require mqtt in your client-side app
npm install -g webpack // install webpack
cd node_modules/mqtt
npm install . // install dev dependencies
webpack mqtt.js ./browserMqtt.js --output-library mqtt
···
