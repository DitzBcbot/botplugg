import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6283133162295', 'Ditz', true],
   ['6283133162295', 'adit 🗿', true],
    ['6283133162295', 'adit 2 😱', true],
     ['6283133162295', 'adit 3 😇', true],
     ['6283133162295', 'adit 4 😖', true],
     ['6283133162295', 'adit 5 😏✌️', true],
     ['6283133162295', 'cuma adit own ny 🗿', true]
     
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = ['6283133162295'] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  violetics: 'https://violetics.pw',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': '493053acc612476f',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://violetics.pw': 'beta',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.packname = ''
global.gc = 'https://chat.whatsapp.com/Dxtz9xAxial3A43AJetabY'
global.author = 'Ragil Bot 🗿🏳️‍🌈'
global.wm =  '⌤︎\n𝚁︎\n𝙰︎\n𝙶︎\n𝙸︎\n𝙻︎\n︎\n⌂︎\n︎\n𝗕︎\n𝗢︎\n𝗧︎\n✦︎\n❒︎\nwa.me/62831331622952︎\n︎\n︎\n⌦   𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙱𝚈 𝚁𝙰𝙶𝙸𝙻 𝙱𝙾𝚃   ⌫\n                     © ②⓪②②'

global.multiplier = 69 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🎖️',
      limit: '🎳',
      health: '❤️',
      exp: '✉️',
      money: '💰',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈',
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Updated - config.js"))
  import(`${file}?update=${Date.now()}`)
})