import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
let anu = await fetch('https://api.akuari.my.id/randomimage/ppcouple')
let url = await anu.json()
let { hasil } = url 
let weem = 'βΎπΆπ»πΎππΏπΎπ'
m.reply(wait)
await conn.sendButton(m.chat, 'Cowok', weem, hasil.cowok, [['β Next β', `${usedPrefix + command}`]], m)
await conn.sendButton(m.chat, 'Cewek', weem, hasil.cewek, [['β Next β', `${usedPrefix + command}`]], m)
}
handler.help = ['ppcp']
handler.tags = ['internet']
handler.command = /^(ppcp)$/i

export default handler
