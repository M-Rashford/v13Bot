const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    allowedChannels: [933693278379978762],
    data: new SlashCommandBuilder()
        .setName("edit")
        .setDescription("Input the links you want to add to that location:")
        .addStringOption((option) => 
            option.setName("edit").setDescription("Input Links Here:").setRequired(true)

        )
        };