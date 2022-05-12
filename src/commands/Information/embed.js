const { SlashCommandBuilder, channelMention } = require('@discordjs/builders');
const { CommandInteraction, MessageEmbed } = require('discord.js');
const Discord = require("discord.js")

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
            .addFields(
                {
                    name: 'Chicago Rooms',
                    value: "🇺🇸 [#1] - https://www.haxball.com/play?c=WJ6fBf05iwI\n🇺🇸 [#2] - https://www.haxball.com/play?c=0IGfeXVRF-E\n🇺🇸 [#3] - https://www.haxball.com/play?c=2wh4vOmZWZ0\n🇺🇸 [#4] - https://www.haxball.com/play?c=N_r7dBdSmGU",

                },
            )
            .addFields(
                {
                    name: 'Miami Rooms',
                    value: "🇺🇸 [#1] - https://www.haxball.com/play?c=fjKqyyCN0pc\n🇺🇸 [#2] - https://www.haxball.com/play?c=WBFGWqdcsRM\n🇺🇸 [#3] - https://www.haxball.com/play?c=66ZMAYsRGU4\n🇺🇸 [#4] - https://www.haxball.com/play?c=2oB_uh2qT9g",
                },
            )
            .addFields(
                {
                    name: 'New York Rooms',
                    value: "🇺🇸 [#1] - https://www.haxball.com/play?c=E3wynWbe3hQ\n🇺🇸 [#2] - https://www.haxball.com/play?c=sPZRzd-_Hf4\n🇺🇸 [#3] - https://www.haxball.com/play?c=zWu3kN2f2Bo\n🇺🇸 [#4] - https://www.haxball.com/play?c=rbYG3XWbAcc",
                },
            )
            .addFields(
                {
                    name: 'Seattle Rooms',
                    value: "🇺🇸 [#1] - https://www.haxball.com/play?c=XDNVgk5Y4xw\n🇺🇸 [#2] - https://www.haxball.com/play?c=v4bX-bFWJpE",
                },
            )
            .addFields(
                {
                    name: 'Germany Rooms',
                    value: "🇩🇪 [#1] - https://www.haxball.com/play?c=-AkXs0AeEPA\n🇩🇪 [#2] - https://www.haxball.com/play?c=PpYxWwdIwos\n🇩🇪 [#3] - https://www.haxball.com/play?c=pG_Ohc4xSvA\n🇩🇪 [#4] - https://www.haxball.com/play?c=4A-ghUFr5oQ",
                },
            )
            .addFields(
                {
                    name: 'London Rooms',
                    value: "🇬🇧 [#1] - https://www.haxball.com/play?c=EhP0t8JiQNc\n🇬🇧 [#2] - https://www.haxball.com/play?c=fa1bHfDkfu0\n🇬🇧 [#3] - https://www.haxball.com/play?c=tTzclTxbAH8\n🇬🇧 [#4] - https://www.haxball.com/play?c=UwguN2Dd8XQ",
                },
            )
            .setFooter('Bot made by rashy')
        interaction.reply({ embeds: [newEmbed] });
    }
}
