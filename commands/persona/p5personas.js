const config = require("../../config.json");
const { RichEmbed, Attachment } = require("discord.js");

module.exports = {
    config: {
        name: "p5personas",
        aliases: ["p5p", "persona5personas"],
        description: "",
        usage: "<persona>",
        category: "persona"
    },
    run: async (client, message, args, query) => {
        //general data parsing
        let personaName = args.join("_").toLowerCase();
        if (query) personaName = query;
        if (!personaName) return message.reply(`Please specify a Persona to search! \`To view a list of all valid Persona's, ${config.prefix}p5personas list\``);

        //checks if the user specified the list argument
        if (personaName === "list") {
            return message.reply("The list of Persona's is currently unavaliable. Check back soon!");
        }

        //the list of every persona in the game
        switch (personaName) {
            //fool arcana
            case "arsene":
                var name = personaName.charAt(0).toUpperCase() + personaName.slice(1);
                var fileName = personaName;
                var url = `https://megamitensei.fandom.com/wiki/${name}`;
                var img = new Attachment(`./personadata/p5/${fileName}.png`, "persona.png")
                break;
        }

        //checks if the user specified a valid persona by checking if the name variable was defined
        if (!name) return message.reply("You have entered an invalid Persona name!");

        //creates the embed and sends it
        let embed = new RichEmbed()
            .setTitle(name)
            .setURL(url)
            .setColor(config.colors.p5red)
            .attachFile(img)
            .setImage("attachment://persona.png")
            .setFooter("Information gathered from the Megami Tensei Wiki", client.user.displayAvatarURL)

        if (!note) {
            embed.setDescription(`${note} \n[Report a data error!](${config.servers.discordinvite})`)
        } else {
            embed.setDescription(`[Report a data error!](${config.servers.discordinvite})`)
        }

        return message.channel.send(embed);
    }
}