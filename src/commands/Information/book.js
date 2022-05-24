const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageEmbed } = require('discord.js');
const Discord = require("discord.js")
const  LinkCache = require("../../../cachefolder/linkcache");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("book")
        .setDescription("Make your room reservation here:")
        .addStringOption((option) => 
            option.setName("leaguename").setDescription("Input League/Tournament Name Here:").setRequired(true)
        )
        .addStringOption((option) => 
            option.setName("locations").setDescription("Input Location Needed Here:").setRequired(true)
        )
        .addStringOption((option) => 
            option.setName("roomnum").setDescription("Input Room Number Here:").setRequired(true)
        )
        .addStringOption((option) => 
            option.setName("linking").setDescription("Input Room Link Here:").setRequired(true)
        )
        .addStringOption((option) => 
            option.setName("time").setDescription("Input Time Frame Here:").setRequired(true)
        ),
    async execute(interaction){

        const allowedChannelIds = ["975798151267110914", "935973453029322881","935973374147047434","935973466040057946","935973662807457822","935973710903529522","977628655062773792", "978403693043007538"]

        const isInAllowedInChannel = allowedChannelIds.includes(interaction.channelId)

        if (isInAllowedInChannel === false) 
        return interaction.reply("You cannot use that command in this channel")

// Put the rest of the command code here

        const LeagueName = interaction.options.getString("leaguename");
        const Locations = interaction.options.getString("locations");
        const RoomNum = interaction.options.getString("roomnum");
        const Linking = interaction.options.getString("linking");
        const Time = interaction.options.getString("time");
      
        const roomObject = {
            leaguename: LeagueName,
            locations: Locations,
            roomnum: RoomNum,
            linking: Linking,
            time: Time

        }
            const bookEmbed = new Discord.MessageEmbed()
                .setColor('049074')
                .setTitle('Global Hosting Services')
                .setURL('https://discord.gg/ksZY2E6Wpz')
                .setDescription(`\n\nTo book a room please use the following command. /book in any of the 5 booking channels.\n\n`)
                .addFields(
                    { name: "League or Tournament Name", value: `${LeagueName}`  },
                    { name: "Location", value: `${Locations}`  },
                    { name: "Room Number", value: `${RoomNum}`  },
                    { name: "Room Link", value: `${Linking}`  },
                    { name: "Time Frame", value: `${Time}`  }
                  )
                .setThumbnail("https://cdn.discordapp.com/attachments/933693278379978762/974417085226700850/IMG_6160.PNG")
                .setFooter({text : "Bot created by rashy"})
                interaction.reply({ embeds: [bookEmbed] });
    
        
        LinkCache.push(roomObject);
    }

};