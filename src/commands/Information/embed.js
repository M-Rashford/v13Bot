const { SlashCommandBuilder, channelMention } = require('@discordjs/builders');
const { CommandInteraction, MessageEmbed } = require('discord.js');
const Discord = require("discord.js")
const  LinkCache = require("../../../cachefolder/linkcache");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('links')
        .setDescription('Get a list of GHS links!'),

    async execute(interaction) {
        const chicagoRooms = LinkCache.filter((room) => room.region === "Chicago");
        const miamiRooms = LinkCache.filter((room) => room.region === "Miami");
        const newyorkRooms = LinkCache.filter((room) => room.region === "New York");
        const seattleRooms = LinkCache.filter((room) => room.region === "Seattle");
        const germanyRooms = LinkCache.filter((room) => room.region === "Germany");
        const londonRooms = LinkCache.filter((room) => room.region === "London");

        const chicagoRoomLinks = chicagoRooms.map(
            (room, roomNumber) => `🇺🇸 ${room.roomid}. ${room.link}`
        )
        const miamiRoomLinks = miamiRooms.map(
            (room, roomNumber) => `🇺🇸 ${room.roomid}. ${room.link}`
        )
        const newyorkRoomLinks = newyorkRooms.map(
            (room, roomNumber) => `🇺🇸 ${room.roomid}}. ${room.link}`
        )
        const seattleRoomLinks = seattleRooms.map(
            (room, roomNumber) => `🇺🇸 ${room.roomid}. ${room.link}`
        )
        const germanyRoomLinks = germanyRooms.map(
            (room, roomNumber) => `🇩🇪 ${room.roomid}. ${room.link}`
        )
        const londonRoomLinks = londonRooms.map(
            (room, roomNumber) => `🇬🇧 ${room.roomid}. ${room.link}`
        );

        const chicagoRoomString = chicagoRoomLinks.join("\n");
        const miamiRoomString = miamiRoomLinks.join("\n");
        const newyorkRoomString = newyorkRoomLinks.join("\n");
        const seattleRoomString = seattleRoomLinks.join("\n");
        const germanyRoomString = germanyRoomLinks.join("\n");
        const londonRoomString = londonRoomLinks.join("\n");


        const newEmbed = new Discord.MessageEmbed()
            .setColor('049074')
            .setTitle('Global Hosting Services')
            .setURL('https://discord.gg/ksZY2E6Wpz')
            .setDescription(`\n\nRashy and Anon are Proud Founders of Global Hosting Services. Our services supply every Haxball participant a room to play in, from scrimmages and pubs to official competitions. Our objective is to help leagues and international tournaments find hosts to play their official matches. We are here to help you.\n\nTo find out more information on our services, a discord link to our official discord server is above this message. Click on the "Global Hosting Services" title, and you will be directed to an invite link.  \n\n**__Chicago Rooms__**\n\n${chicagoRoomString}\n\n**__Miami Rooms__**\n\n${miamiRoomString}\n\n**__New York Rooms__**\n\n${newyorkRoomString}\n\n**__Seattle Rooms__**\n\n${seattleRoomString}\n\n**__Germany Rooms__**\n\n${germanyRoomString}\n\n**__London Rooms__**\n\n${londonRoomString}`)
            .setThumbnail("https://cdn.discordapp.com/attachments/933693278379978762/974417085226700850/IMG_6160.PNG")
            .setFooter('Bot created by rashy')
        interaction.reply({ embeds: [newEmbed] });
    }
   

}

// embed.js FILE // /links command. 

