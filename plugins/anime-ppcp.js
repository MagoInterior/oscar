import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
let anu = await fetch('https://api.akuari.my.id/randomimage/ppcouple')
let url = await anu.json()
let { hasil } = url 
let weem = '♾𝙶𝙻𝙾𝚂𝙿𝙾𝚃'
m.reply(wait)
await conn.sendButton(m.chat, 'Cowok', weem, hasil.cowok, [['⇄ Next ⇄', `${usedPrefix + command}`]], m)
await conn.sendButton(m.chat, 'Cewek', weem, hasil.cewek, [['⇄ Next ⇄', `${usedPrefix + command}`]], m)
}
handler.help = ['ppcp']
handler.tags = ['internet']
handler.command = /^(ppcp)$/i

export default handler
