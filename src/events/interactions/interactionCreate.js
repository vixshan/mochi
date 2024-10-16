const { InteractionType } = require('discord.js')
const { getSettings } = require('@schemas/Guild')
const {
  commandHandler,
  contextHandler,
  statsHandler,
  suggestionHandler,
  ticketHandler,
  todHandler,
  reportHandler,
} = require('@src/handlers')
const {
  handleSetupButton,
  handleSetupModal,
  handleRemindButton,
  handleRemindModal,
} = require('@handlers/guild')

/**
 * @param {import('@src/structures').BotClient} client
 * @param {import('discord.js').BaseInteraction} interaction
 */
module.exports = async (client, interaction) => {
  if (!interaction.guild) {
    return interaction
      .reply({
        content: 'Command can only be executed in a discord server',
        ephemeral: true,
      })
      .catch(() => {})
  }

  // Slash Commands
  if (interaction.isChatInputCommand()) {
    await commandHandler.handleSlashCommand(interaction)
  }

  // Context Menu
  else if (interaction.isContextMenuCommand()) {
    const context = client.contextMenus.get(interaction.commandName)
    if (context) await contextHandler.handleContext(interaction, context)
    else
      return interaction
        .reply({ content: 'An error has occurred', ephemeral: true })
        .catch(() => {})
  }

  // Buttons
  else if (interaction.isButton()) {
    switch (interaction.customId) {
      case 'TICKET_CREATE':
        return ticketHandler.handleTicketOpen(interaction)

      case 'TICKET_CLOSE':
        return ticketHandler.handleTicketClose(interaction)

      case 'SUGGEST_APPROVE':
        return suggestionHandler.handleApproveBtn(interaction)

      case 'SUGGEST_REJECT':
        return suggestionHandler.handleRejectBtn(interaction)

      case 'SUGGEST_DELETE':
        return suggestionHandler.handleDeleteBtn(interaction)

      case 'truthBtn':
        return todHandler.handleTodButtonClick(interaction)

      case 'dareBtn':
        return todHandler.handleTodButtonClick(interaction)

      case 'randomBtn':
        return todHandler.handleTodButtonClick(interaction)

      case 'MOCHI_SETUP':
        return handleSetupButton(interaction)

      case 'MOCHI_REMIND':
        return handleRemindButton(interaction)
    }
  }

  // Modals
  else if (interaction.type === InteractionType.ModalSubmit) {
    switch (interaction.customId) {
      case 'SUGGEST_APPROVE_MODAL':
        return suggestionHandler.handleApproveModal(interaction)

      case 'SUGGEST_REJECT_MODAL':
        return suggestionHandler.handleRejectModal(interaction)

      case 'SUGGEST_DELETE_MODAL':
        return suggestionHandler.handleDeleteModal(interaction)

      case 'MOCHI_SETUP_MODAL':
        return handleSetupModal(interaction)

      case 'MOCHI_REMIND_MODAL':
        return handleRemindModal(interaction)

      default:
        if (interaction.customId.startsWith('report_modal_')) {
          return reportHandler.handleReportModal(interaction)
        }
    }
  }

  const settings = await getSettings(interaction.guild)

  // Track stats
  if (settings.stats.enabled)
    statsHandler.trackInteractionStats(interaction).catch(() => {})
}
