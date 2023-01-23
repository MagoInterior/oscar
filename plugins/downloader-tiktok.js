import fetch from 'node-fetch'
import fs from 'fs'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
  let res = await fetch(`https://api.vhtear.com/tiktokdl?link=https://www.tiktok.com/@goodponsel/video/6913737919450729729&apikey=APIKEY=${text}`)
  let res2 = await res.json()
  let x = res2.result
  await m.reply(`${global.wait}`)
let cap = `${ucapan()}\n\nNih ${name}\nCara Simpan\n\n1. Download Dulu Vidio Nya Kalau Sudah\n2. Masuk Ke Dalam Vidio Nya\n3. Lalu Tekan Titik3 Pojok Kanan Atas\n4. Lalu Pilih Yang Ada Bacaan  Simpan `
conn.sendFile(m.chat, x.link, 'tiktok.mp4', cap, m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok)$/i
handler.limit = false

export default handler
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Cuy 🌄"
  }
  if (time >= 10) {
    res = "Siang Cuy ☀️"
  }
  if (time >= 15) {
    res = "Sore Cuy 🌇"
  }
  if (time >= 18) {
    res = "Malam Cuy 🌙"
  }
  return res
}
