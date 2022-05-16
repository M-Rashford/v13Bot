const { SlashCommandBuilder } = require('@discordjs/builders');
const  LinkCache = require("../../../cachefolder/linkcache");

module.exports = {
    allowedChannels: ["933693278379978762"],
    data: new SlashCommandBuilder()
        .setName("edit")
        .setDescription("Input the links you want to add to that location:")
        .addStringOption((option) => 
            option.setName("region").setDescription("Input Region Here:").setRequired(true)
        )
        .addStringOption((option) => 
            option.setName("link").setDescription("Input Link Here:").setRequired(true)
        ),
    async execute(interaction){
        const roomRegion= interaction.options.getString("region");
        const roomURL = interaction.options.getString("link");


        const roomObject = {
            region: roomRegion,
            link: roomURL

        }
        LinkCache.push(roomObject);
        await interaction.reply("Embed was edited...")
    
    }
};

// DISCORDLINKING.js // /edit command.
