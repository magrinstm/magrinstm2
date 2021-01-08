const fs = require('fs-extra')
const { prefix } = JSON.parse(fs.readFileSync('config.json'))

exports.ownerOnly = () => {
    return `Só o meu dono pode usar!`
}

exports.doneOwner = () => {
    return `Prontinho, chefe!`
}

exports.adminOnly = () => {
    return `Você não é admin.`
}

exports.notNsfw = () => {
    return `NSFW OFF!`
}

exports.nsfwOn = () => {
    return `NSFW ON, Utilize #menu 5 para ver minhas funções`
}

exports.nsfwOff = () => {
    return `NSFW OFF!`
}

exports.nsfwAlready = () => {
    return `NSFW JÁ ESTÁ ON.`
}

exports.addedGroup = (chat) => {
    return `Olá, pessoas do grupo, *${chat.contact.name}*!\n\nSou o botzin Khaadaj, use #menu para ver minhas funções.`
}

exports.notAdmin = () => {
    return `Não é admin.`
}

exports.adminAlready = () => {
    return `Já é admin!`
}

exports.botNotAdmin = () => {
    return `Bot não é admin!`
}

exports.received = (pushname) => {
    return `Olá ${pushname}!\nObrigado!.`
}

exports.profile = (username, status, premi, benet, adm) => {
    return `-----[ *Perfil Info* ]-----\n\n➸ *Nome*: ${username}\n➸ *Status*: ${status}\n➸ *Premium*: ${premi}\n➸ *Admin*: ${adm}`
}

exports.detectorOn = (name, formattedTitle) => {
    return `*「 ANTILINK DE GRUPO 」*\n\nAtenção aos residentes do grupo ${(name || formattedTitle)}\n\nEste grupo tem um detector de link de grupo, se um membro enviar um aqui, ele será expulso automaticamente..\n\nIsso é tudo, obrigado.\n\n- Admin do: ${(name || formattedTitle)}`
}

exports.detectorOff = () => {
    return `Antilink desativado!`
}

exports.detectorOnAlready = () => {
    return `Antilink já está ativado.`
}

exports.linkDetected = () => {
    return `*「 ANTILINK DE GRUPO 」*\n\nLink detectado!\nVocê quebrou as regras e com isso será exterminado!\n\nVolta pro lobby~`
}

exports.levelingOn = () => {
    return `Sistema de level ativado!`
}

exports.levelingOff = () => {
    return `Sistema de level desativado!`
}

//exports.wait = () => {
//    return `Aguarde...`
//}

exports.levelingOnAlready = () => {
    return `Sistema de level já está ativado.`
}

exports.levelingNotOn = () => {
    return `Sistema de level não está ativado!`
}

//exports.levelNull = () => {
//    return `Você não tem nível, ainda...`
//}

exports.welcome = (event) => {
    return `Seja muito bem-vindo (a) @${event.who.replace('@c.us', '')}!\n\nEspero que se sinta em casa aqui em nosso grupo\n\nLeia as regras na descrição!`
}

exports.welcomeOn = () => {
    return `Boas-vindas ativado!`
}

exports.welcomeOff = () => {
    return `Boas-vindas desativado!`
}

exports.welcomeOnAlready = () => {
    return `Boas-vindas já ativado.`
}

exports.autoStikOn = () => {
    return `Auto-sticker ativado!`
}

exports.autoStikOff = () => {
    return `Auto-sticker desativado!`
}

exports.autoStikOnAlready = () => {
    return `Auto-sticker já está ativado.`
}

exports.afkOn = (pushname, reason) => {
    return `**「 MODO AFK ON 」*\n\n➸ *Nome*: ${pushname}\n➸ *Motivo*: ${reason}`
}

exports.afkOnAlready = () => {
    return `AFK já está ativado.`
}

exports.afkMentioned = (getReason, getTime) => {
    return `*「 AFK 」*\n\nSssshh! Ele (a) está em modo AFK!\n➸ *Motivo*: ${getReason}`
}

exports.afkDone = (pushname) => {
    return `Olá, *${pushname}*\nBem-vindo (a) de volta!`
}

exports.playstore = (app_id, title, developer, description, price, free) => {
    return `➸ *Nama*: ${title}\n➸ *ID*: ${app_id}\n➸ *Developer*: ${developer}\n➸ *Gratis*: ${free}\n➸ *Harga*: ${price}\n➸ *Deskripsi*: ${description}`
}

exports.shopee = (nama, harga, terjual, shop_location, description, link_product) => {
    return `➸ *Nama*: ${nama}\n➸ *Harga*: ${harga}\n➸ *Terjual*: ${terjual}\n➸ *Lokasi*: ${shop_location}\n➸ *Link produk*: ${link_product}\n➸ *Deskripsi*: ${description}`
}

//exports.pc = (pushname) => {
//    return `*「 REGISTRATION 」*\n\nAkun kamu berhasil terdaftar! Silakan cek pesan ku di private chat mu ya ${pushname}~ :3\n\nNote:\nJika kamu tidak menerima pesan, artinya kamu belum save nomor bot.`
//}

exports.menu = () => {
    return `
------[ Menus ]-----

Olá, aqui está o menu:

*[1]* Figurinhas
*[2]* BOT Menu
*[3]* Recursos
*[4]* Admin menu
*[5]* NSFW menu
*[6]* Grupo menu
*[7]* Level Menu
*[8]* Regras
--------------------
*[9]* Comandos extras
*[10]* Ajuda detalhada
*[11]* Ajuda com prints

_Modo de usar:_ Envie *${prefix}menu* _e o numero_
Exemplo: ${prefix}menu 8

*${prefix}donate* _para ver formas de doar_

*${prefix}dono* _para falar com o dono_
_(caso queira ele em seu grupo, 5 reais)_

Faça bom uso de mim ✨!
`
}

exports.menuSticker = () => {
    return `
-----[ Figurinha ]-----

1. *${prefix}sticker*
_Utilize esse comando para fazer suas figurinhas comuns._

2. *${prefix}stickergif*
_Utilize esse comando para fazer suas figurinhas animadas._

3. *${prefix}foto*
_Marque a figurinha que deseja transformar em imagem._

4. *${prefix}perfil*
_Modo de usar:_ ${prefix}perfil @tag
*Pega a foto de perfil da pessoa.*

Utilize *${prefix}comandos* para ver outras formas de usar esses acima`
}

exports.menuBot = () => {
    return `
-----[ MENU BOT ]-----

1. *${prefix}regras*
_Para ver as regras!_

2. *${prefix}menu*
_Exibe a lista de menus._

3. *${prefix}info*
_Para ver informações do bot._

4. *${prefix}ping*
_Para ver a velocidade/ping do bot._

5. *${prefix}delete*
_Para apagar mensagens do bot (só adm)._

6. *${prefix}status*
_Para ver quantidade de mensagens e chats do bot_`
}

exports.menuRecursos = () => {
    return `
-----[ Recursos ]-----

1. *${prefix}tts*
Transforma texto em áudio:
_Modo de usar: *${prefix}tts* [idioma] [texto]_
Exemplo: *${prefix}tts* pt ola mundo
_pt é o idioma, o que vem depois é o texto que será falado_

2. *${prefix}afk*
Configure sua conta para o modo AFK, enviarei uma mensagem para as pessoas que mencionarem você.
_Modo de usar_: *${prefix}afk* [Motivo] 
Obs: Ao mandar uma mensagem o modo AFK será desativado

3. *${prefix}twitter*
Baixa vídeo do twitter
_Modo de usar:_*${prefix}twitter* [link]

4. *${prefix}audio*
Envia audios, use #audio para ver a lista
_Para ver a lista:_ *${prefix}audios
_Modo de usar:_ *${prefix}audio 4

5. *${prefix}neko*
Envia foto aleatória de neko anime (mulher gato)

6. *${prefix}anime* 
Envia foto aleatória de um personagem de anime

7. *${prefix}kiss* 
Usa sua foto e a de alguem para beijar
_Modo de usar:_ *${prefix}kiss* @tag

7. *${prefix}3d* 
Faz uma foto 3d do texto
_Modo de usar:_ *${prefix}3d* [texto]

9. *${prefix}lembrete*
O Bot irá te lembrar de fazer algo.

S = _Segundos_
M = _Minutos_
H = _Horas_
D = _Dias_

Modo de usar: *${prefix}lembrete* 10s , [e aqui o seu lembrete]

*Obs:* Não precisa colocar o [], é só para destacar.
`
}

exports.menuModeration = () => {
    return `
-----[ Admin Menu ]-----

1. *${prefix}add*
Adiciona pessoas no grupo
_Modo de usar: *${prefix}add* 5521985269439_

2. *${prefix}kick*
Bane alguem do grupo!
_Modo de usar: *${prefix}kick* @membro_

3. *${prefix}up*
Promove alguem para admin.
_Modo de usar: *${prefix}up* @membro_

4. *${prefix}down*
Rebaixa alguem de admin.
_Modo de usar: *${prefix}down* @membro_

5. *${prefix}leave*
Tira o bot do grupo.
_Modo de usar: *${prefix}leave*_

6. *${prefix}all*
Marca todos os cornos do grupo
_Modo de usar: *${prefix}all*_

`
}

exports.menuNsfw = () => {
    return `
-----[ NSFW +18 ]-----

1. *${prefix}lewds*
Envie imagens de anime obscenas.
 *${prefix}lewds*

2. *${prefix}waifu18*
Envie fotos waifu NSFW aleatórias.
_Modo de usar: *${prefix}waifu18*_

3. *${prefix}fetish*
Envia fotos de fetiche.
_Modo de usar: *${prefix}fetish* armpits/feets/thighs/ass/boobs/belly/sideboobs/ahegao_

4. *${prefix}avatar
Envia fotos hentai aleatórias.

5. *${prefix}yuri
Fotos Lesbicas de Anime (Hentai)

*Obs: Comandos para entretenimento adulto, não me responsabilizo por nada!*
`
}

exports.grupomenu = () => {
    return `
-----[ Grupo Menu ]-----

*Esse comando ativa o sistema de level.*

*${prefix}leveling enable* _(ativa)_
*${prefix}leveling disable* _(desativa)_

*Esse comando ativa o modo +18.*

*${prefix}nsfw enable* _(ativa)_
*${prefix}nsfw disable* _(desativa)_

*Esse comando ativa o boas-vindas.*

*${prefix}welcome enable* _(ativa)_
*${prefix}welcome disable* _(desativa)_

*Esse comando ativa o antilink de grupo.*

*${prefix}antilink enable* _(ativa)_
*${prefix}antilink disable* _(desativa)_

*Esse comando ativa figurinha automática.*

*${prefix}autostiker enable* _(ativa)_
*${prefix}autostiker disable* _(desativa)_
`
}

exports.rules = () => {
    return `
*-----[ Regras ]-----*

- _Não ligue para o bot, irá levar block e não será desbloqueado (a)_

- _Sem Spam/Flood!_
`
}

exports.donate = () => {
    return `
╔══✪〘 DONATE 〙✪══
║
╠➥ *PARA FAZER DONATES:*
╠➥ *VIA PIX:* 21985269439
╠➥ *PAYPAL:* guilhermeoliveira.alves@hotmail.com
╠➥ *Mercado Pago:* Mesmo email de cima.
╠➥ *O seu donate me ajuda e motiva à continuar!*
║
╚═〘 KHAADAJ BOT 〙
`
}

exports.dono = () => {
    return `
-----[ Dono ]-----

Aqui está o número do meu dono.

Chame apenas se for importante!

wa.me/+5527998447137
`
}

exports.comandos = () => {
    return `
*Comandos para fazer figurinha de uma foto:*
${prefix}sticker
${prefix}stiker
${prefix}stick
${prefix}stik
${prefix}s
${prefix}fig
${prefix}figurinha

*Comandos para fazer figurinha de um vídeo/gif:*

${prefix}stickergif
${prefix}stikergif
${prefix}stickgif
${prefix}stikgif
${prefix}sgif
${prefix}gif
${prefix}animada

*Comandos para fazer foto de uma figurinha comum:*

${prefix}stickertoimg
${prefix}stikertoimg
${prefix}toimg
${prefix}foto

*Obs:* _Você pode tanto enviar junto, quanto marcar (responder) a foto._

*Obs²:* _Não faz figurinha animada respondendo, apenas enviando junto!_

*Obs³:* _Você precisa marcar (responder) a figu que deseja transformar em foto!_
`
}
exports.ajuda1 = () => {
    return `
*O que cada comando faz:*

- *${prefix}Sticker:* _Faz figurinha comum_
- *${prefix}Stickergif:* _Faz figurinha animada_

- *${prefix}Stalkig:* _Resume o perfil da pessoa_
- *${prefix}TTS:* _Transforma texto em voz_

- *${prefix}Donate:* _Formas de me apoiar (💰)_
- *${prefix}Dono:* _Manda o número do meu dono_

Se ainda não entendeu, digite ${prefix}ajuda2`
}
exports.ajuda2 = () => {
    return `
Aqui estão exemplos para uso dos comandos:
*Pode ficar tranquilo, esses links são apenas prints!*

- ${prefix}Sticker > https://prnt.sc/vxppgv
- ${prefix}Stickergif > https://prnt.sc/vxpqr1

*Obs:* _É necessário a vírgula para dividir entre encima ou embaixo._
*Obs²:* _Sempre ter um espaço antes e depois da vírgula._

- ${prefix}Stalkig > https://prnt.sc/vxpy7o (se der erro, ponha o @)

- ${prefix}TTS > https://prnt.sc/vxpz7r

- ${prefix}Donate > https://prnt.sc/vxq038
- ${prefix}Dono > https://prnt.sc/vxq0fj`
}

exports.menuOwner = () => {
    return `
-----[ Dono ]-----
Olá, chefe!

1. *${prefix}bc*
Faz uma transmissão
_Modo de usar: *${prefix}bc* <texto>_

2. *${prefix}clearall*
Apaga todos os chats
_Modo de usar: *${prefix}clearall*_

3. *${prefix}ban*
Proibe alguem de usar o bot.
_Modo de usar: *${prefix}ban* add/del @user/55dddNUM_

4. *${prefix}leaveall*
Sai de todos os grupos.
_Modo de usar: *${prefix}leaveall*_

5. *${prefix}shutdown*
Não sei o que faz kk
_Modo de usar: *${prefix}shutdown*_

7. *${prefix}premium*
Adicionar / remover usuários premium.
_Modo de usar: *${prefix}premium* add/del @user_

8. *${prefix}setstatus*
Faz alguma coisa com status
_Modo de usar: *${prefix}status* teks_
`
}

exports.menuLeveling = () => {
    return `
-----[ Levels ]-----

*${prefix}leveling enable* _(ativa)_
*${prefix}leveling disable* _(desativa)_

1. *${prefix}level*
Para ver o seu nível
_Modo de usar: *${prefix}level*_`
}

exports.audios1 = () => {
    return `
*[1]* _Banido_
*[2]* _Mc Poze Puto_
*[3]* _Gemidão_
*[4]* _Taca o Pau_
*[5]* _Vittar Q Dlç_
*[6]* _Acabou a bagunça_
*[7]* _Aaaleluia_
*[8]* _Apaga isso_
*[9]* _Aplausos plateia_
*[10]* _Bati o cu na parede_
*[11]* _Cê é o bichão mesmo_
*[12]* _Dá uma sugada_
*[13]* _Cala boca bando de corno_
*[14]* _Cavalo_
*[15]* _Cala boca macaco_
*[16]* _Chupa meu pinto_`
}

exports.audios2 = () => {
    return `
*[17]* _Continua (Credits)_
*[18]* _Cricricri_
*[19]* _Desliga o pc AGORA!_
*[20]* _E eu sei lá porra_
*[21]* _É mesmo é?_
*[22]* _Amigo estou aqui_
*[23]* _FBI OPEN THE DOOR_
*[24]* _MÚSICA FORTNITE_
*[25]* _JOHN CENA_
*[26]* _NOBRU APELÃO_
*[27]* _PROERD_
*[28]* _REI DO GADO_
*[29]* _VITAS_
*[30]* _GEMIDO_
*[31]* _ADM TIRA ESSE MLK_

_*Sugestões no PV do Dono:*_
#Dono`
}