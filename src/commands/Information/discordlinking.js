const { SlashCommandBuilder } = require('@discordjs/builders');
const  LinkCache = require("../../../cachefolder/linkcache");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("edit")
        .setDescription("Input the links you want to add to that location:")
        .addStringOption((option) => 
            option.setName("region").setDescription("Input Region Here:").setRequired(true)
        )
        .addStringOption((option) => 
            option.setName("link").setDescription("Input Link Here:").setRequired(true)
        )
        .addStringOption((option) => 
            option.setName("roomid").setDescription("Input Room # Here:").setRequired(true)
        ),
    async execute(interaction){

        const allowedChannelIds = ["975798151267110914"]

        const isInAllowedInChannel = allowedChannelIds.includes(interaction.channelId)

        if (isInAllowedInChannel === false) 
        return interaction.reply("You cannot use that command in this channel")

// Put the rest of the command code here

        const roomRegion= interaction.options.getString("region");
        const roomURL = interaction.options.getString("link");
        const roomNumber = interaction.options.getString("roomid");


        const roomObject = {
            region: roomRegion,
            link: roomURL,
            roomid: roomNumber

        }
        LinkCache.push(roomObject);
        await interaction.reply("Embed was edited...")
    
    }
};

// DISCORDLINKING.js // /edit command.
