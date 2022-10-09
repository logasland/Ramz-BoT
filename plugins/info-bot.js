let fs = require('fs')
let handler = async (m, { conn }) => {
let ArdXNasBot = `*─ 「 INFO - BOT - OWNER 」 ─*
▢ *IG Adit*: @Dityabotz

• *SEWA BOT HUB*: 
• wa.me/6281316235253 (Adit)
• wa.me/6281226512906 (Norris)

📣 *Join OUR group FREE BOT* 👇
https://chat.whatsapp.com/LF0rq140SmDDHd3nQ62SVm 
`
conn.sendMessage(
    m.chat, 
    {
      location: { degreesLatitude: undefined, degreesLongitude: undefined, jpegThumbnail: fs.readFileSync('./media/Maung.jpg') },
      caption: ArdXNasBot,
      footer: 'Diamond FF',
      buttons: [{buttonId: '.menu', buttonText: {displayText: 'MENU 🏵️'}, type: 1}],
      headerType: 1
    }
)
}
handler.help = ['infosc']
handler.tags = ['main']
handler.command = /^info(sc|script|scriptbot)?$/i

handler.exp = 30

module.exports = handler
