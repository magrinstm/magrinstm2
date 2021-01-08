const fs = require('fs-extra')

module.exports = left = async (bocchi, event) => {
    //console.log(event.action)
    const left = JSON.parse(fs.readFileSync('./database/group/left.json'))
    const isLeft = left.includes(event.chat)
    try {
        if (event.action == 'remove' && left) {
            const gChat = await bocchi.getChatById(event.chat)
            const pChat = await bocchi.getContact(event.who)
            const { contact, groupMetadata, name } = gChat
            const { contact, groupMetadata, name } = pChat
            const pepe = await bocchi.getProfilePicFromServer(event.who)
            const capt = `Tchauzinho @${event.who.replace('@c.us', '')} 👋`
            if (pepe == '' || pepe == undefined) {
                await bocchi.sendFileFromUrl(event.chat, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQcODjk7AcA4wb_9OLzoeAdpGwmkJqOYxEBA&usqp=CAU', 'profile.jpg')
            } else {
                await bocchi.sendPtt(from, `./media/tts/saiumaisum.mp3`, id)
                await bocchi.sendFileFromUrl(event.chat, pepe, 'profile.jpg')
                bocchi.sendTextWithMentions(event.chat, capt)
            }
        }
    } catch (err) {
        console.log(err)
    }
}
