const Discord = require('discord.js')

module.exports = async (client, interaction, args) => {
  let row = new Discord.ActionRowBuilder().addComponents(
    new Discord.ButtonBuilder()
      .setLabel('Sponsor on GitHub')
      .setURL('https://github.com/sponsors/iamvikshan')
      .setStyle(Discord.ButtonStyle.Link)
  )

  client.embed(
    {
      title: `${client.user.username} ・Donate`,
      desc: 'Love the bot? \n\nClick the button below to sponsor the project \nand help keep <@1009149789914546287> alive and advance further.\n\nThanks for using <@1009149789914546287> and all the support!\n\nIt means the world to us❤️',
      thumbnail: client.user.avatarURL({ dynamic: true }),
      url: 'https://github.com/sponsors/iamvikshan',
      components: [row],
      type: 'editreply'
    },
    interaction
  )
}
