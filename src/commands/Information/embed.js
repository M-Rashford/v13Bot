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
        const losangelesRooms = LinkCache.filter((room) => room.region === "Los Angeles");
        const saopauloRooms = LinkCache.filter((room) => room.region === "Sao Paulo");
        const germanyRooms = LinkCache.filter((room) => room.region === "Germany");
        const londonRooms = LinkCache.filter((room) => room.region === "London");
        const mumbaiRooms = LinkCache.filter((room) => room.region === "Mumbai");
  
        


        const chicagoRoomLinks = chicagoRooms.map(
            (room, roomNumber) => `πΊπΈ ${room.roomid}. ${room.link}`
        )
        const miamiRoomLinks = miamiRooms.map(
            (room, roomNumber) => `πΊπΈ ${room.roomid}. ${room.link}`
        )
        const newyorkRoomLinks = newyorkRooms.map(
            (room, roomNumber) => `πΊπΈ ${room.roomid}}. ${room.link}`
        )
        const seattleRoomLinks = seattleRooms.map(
            (room, roomNumber) => `πΊπΈ ${room.roomid}. ${room.link}`
        )
        const losangelesRoomLinks = losangelesRooms.map(
            (room, roomNumber) => `πΊπΈ ${room.roomid}. ${room.link}`
        )
        const saopauloRoomLinks = saopauloRooms.map(
            (room, roomNumber) => `π§π· ${room.roomid}. ${room.link}`
        );
        const germanyRoomLinks = germanyRooms.map(
            (room, roomNumber) => `π©πͺ ${room.roomid}. ${room.link}`
        )
        const londonRoomLinks = londonRooms.map(
            (room, roomNumber) => `π¬π§ ${room.roomid}. ${room.link}`
        );
        const mumbaiRoomLinks = mumbaiRooms.map(
            (room, roomNumber) => `π?π³ ${room.roomid}. ${room.link}`
        );


        const chicagoRoomString = chicagoRoomLinks.join("\n");
        const miamiRoomString = miamiRoomLinks.join("\n");
        const newyorkRoomString = newyorkRoomLinks.join("\n");
        const seattleRoomString = seattleRoomLinks.join("\n");
        const losangelesRoomString = losangelesRoomLinks.join("\n");
        const saopauloRoomString = saopauloRoomLinks.join("\n");
        const germanyRoomString = germanyRoomLinks.join("\n");
        const londonRoomString = londonRoomLinks.join("\n");
        const mumbaiRoomString = mumbaiRoomLinks.join("\n");




        const newEmbed = new Discord.MessageEmbed()
            .setColor('049074')
            .setTitle('Global Hosting Services')
            .setURL('https://discord.gg/ksZY2E6Wpz')
            .setDescription(`\n\nRashy and Anon are Proud Founders of Global Hosting Services. Our services supply every Haxball participant a room to play in, from scrimmages and pubs to official competitions. Our objective is to help leagues and international tournaments find hosts to play their official matches. We are here to help you.\n\nTo find out more information on our services, a discord link to our official discord server is above this message. Click on the "Global Hosting Services" title, and you will be directed to an invite link.  \n\nπΊπΈ **__Chicago Rooms__** πΊπΈ\n\n${chicagoRoomString}\n\nπΊπΈ **__Miami Rooms__** πΊπΈ\n\n${miamiRoomString}\n\nπΊπΈ **__New York Rooms__** πΊπΈ \n\n${newyorkRoomString}\n\nπΊπΈ **__Seattle Rooms__** πΊπΈ\n\n${seattleRoomString}\n\nπΊπΈ **__Los Angeles Rooms__** πΊπΈ\n\n${losangelesRoomString}\n\nπ§π· **__Sao Paulo Rooms__** π§π·\n\n${saopauloRoomString}\n\nπ©πͺ **__Germany Rooms__** π©πͺ\n\n${germanyRoomString}\n\nπ¬π§ **__London Rooms__** π¬π§\n\n${londonRoomString}\n\nπ?π³ **__Mumbai Rooms__** π?π³\n\n${mumbaiRoomString}`)
            .setThumbnail("https://cdn.discordapp.com/attachments/933693278379978762/974417085226700850/IMG_6160.PNG")
            .setFooter('Bot created by rashy')
        interaction.reply({ embeds: [newEmbed] });
    }
   

}

// embed.js FILE // /links command. 

