const { SlashCommandBuilder, channelMention } = require('@discordjs/builders');
const { CommandInteraction, MessageEmbed } = require('discord.js');
const Discord = require("discord.js")

function ToFields(){
    const Fields = []

    for (const [Name, Data] of Object.entries(LinkCache)){
        let Value = Data[0] + " "
        for (let i = 1; i < Data.length; i++){
            Value += `[${i}] - ${Data[i]} `
        }
        
        Fields.push({name: Name, value: Value})
    }

    return Fields
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('links')
        .setDescription('Get a list of GHS links!'),

    async execute(interaction) {

        const newEmbed = new Discord.MessageEmbed()
            .setColor('049074')
            .setTitle('Global Hosting Services')
            .setURL('https://discord.gg/ksZY2E6Wpz')
            .setDescription('**__rashy#5119 & cartelero#0313__** are proud hosters of Global Hosting Services.')
            .setThumbnail("https://cdn.discordapp.com/attachments/933693278379978762/974417085226700850/IMG_6160.PNG")
            .addFields(ToFields())
            .setFooter('Bot made by rashy')
        interaction.reply({ embeds: [newEmbed] });
    }
    
}
