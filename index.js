const { create, Client } = require('@open-wa/wa-automate')
const { color, options } = require('./tools')
const { ind, eng } = require('./message/text/lang/')
const figlet = require('figlet')
const msgHandler = require('./message')
const config = require('./config.json')
const ownerNumber = config.ownerBot
const fs = require('fs-extra')

const start = async (bocchi = new Client()) => {
    console.log(color(figlet.textSync('KhaadajBot', 'Larry 3D'), 'cyan'))
    console.log('[KHAADAJ]', color('AGORA O PAI TA ON!'))

    // Force it to keep the current session
    bocchi.onStateChanged((state) => {
        console.log('[KHAADAJ STATUS]', state)
        if (state === 'NÃO PAREADO') bocchi.forceRefocus()
        if (state === 'CONFLITO') bocchi.forceRefocus()
        if (state === 'NÃO INICIADO') bocchi.forceRefocus()
    })

    // Set all received message to seen
    //bocchi.onAck((x) => {
    //    const { to } = x
    //    if (x !== 3) bocchi.sendSeen(to)
    //})

    // Listening added to group
    bocchi.onAddedToGroup(async (chat) => await bocchi.sendText(chat.groupMetadata.id, ind.addedGroup(chat)))

    // Listening to messages
    bocchi.onMessage((message) => {
        bocchi.getAmountOfLoadedMessages()
            .then((msg) => {
                if (msg >= 1000) {
                    console.log('[KHAADAJ]', color(`Limpando ${msg} mensagens...`, 'yellow'))
                    bocchi.cutMsgCache()
                    console.log('[KHAADAJ]', color('Cache Limpo!', 'yellow'))
                }
            })
        msgHandler(bocchi, message) // Message handler
    })

    // Block person who called bot
    bocchi.onIncomingCall(async (callData) => {
        await bocchi.sendText(callData.peerJid, ind.blocked(ownerNumber))
        await bocchi.contactBlock(callData.peerJid)
        console.log(color('[BLOCK]', 'red'), color(`${callData.peerJid} FOI BLOQUEADO. MOTIVO:`, 'yellow'), color('LIGOU PARA O BOT', 'cyan'))
    })

    // Listen to group's event
    bocchi.onGlobalParicipantsChanged(async (event) => {
        const _welcome = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
        const isWelcome = _welcome.includes(event.chat)
        const botNumbers = await bocchi.getHostNumber() + '@c.us'
        try {
            if (event.action === 'add' && event.who !== botNumbers && isWelcome) {
                const pic = await bocchi.getProfilePicFromServer(event.who)
                if (pic === undefined) 
                    //await bocchi.sendFileFromUrl(event.chat, 'https://i.imgur.com/UxvMPUz.png', 'profile.png', '')
                //} else {
                    //await bocchi.sendFileFromUrl(event.chat, pic, 'profile.jpg', '')
                
                await bocchi.sendTextWithMentions(event.chat, ind.welcome(event))
            }
        } catch (err) {
            console.error(err)
        }
    })
}

// Creating session
create(options(start))
    .then((bocchi) => start(bocchi))
    .catch((err) => console.error(err))
