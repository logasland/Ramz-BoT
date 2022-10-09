let fs = require('fs')
let handler = async (m, { conn }) => {
let ArdXNasBot = `💎 _*List Harga DIAMOND FF  Harga tidak tetap*_

5 DM.         : 1,269
20 DM.       : 3,380
50 DM.       : 7,402
70 DM.       : 9,659
140 DM.     : 18,868
355 DM.     : 46,595
720 DM.     : 92,340
2000 DM.   : 252,750
Member Mingguan.  : 28,550
Member Bulanan.     : 85,700
PENTING ❗❗ : _*sewaktu2 harga akan berubah tanyakan admin terlebih dahulu sebelum transaksi*_
Chat untuk beli : Wa.me/6288220924312/?text=hai+kak+beliDM+FF`
conn.sendMessage(
    m.chat, 
    {
      location: { degreesLatitude: undefined, degreesLongitude: undefined, jpegThumbnail: fs.readFileSync('./media/Maung.jpg') },
      caption: ArdXNasBot,
      footer: 'Diamond FF',
      buttons: [{buttonId: '.diamond', buttonText: {displayText: 'DIAMOND💎'}, type: 1}],
      headerType: 1
    }
)
}
handler.help = ['diamondff']
handler.tags = ['main']
handler.command = /^(diamondff|diamondfreefire|dmff|freefire)$/i


handler.exp = 30

module.exports = handler
