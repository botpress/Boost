const fs = require('fs')

const configPath = './modules_config/botpress-messenger.json'

let content = JSON.parse(fs.readFileSync(configPath))

content.applicationID = ''
content.accessToken = ''
content.appSecret = ''
content.error = ''
content.message = ''
content.verifyToken = '1234567890'
content.connected = false

fs.writeFileSync(configPath, JSON.stringify(content))
