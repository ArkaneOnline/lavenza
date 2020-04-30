const config = require("../../config.json");
const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "p3pfusion",
        aliases: ["p3pf", "persona3portablefusion", "p3portablefusion"],
        description: "Sends the recipe for fusing a specified Persona in Persona 3 Portable",
        usage: "<persona>",
        category: "persona"
    },
    run: async (client, message, args, query) => {
        message.reply("Fusion is a lengthy process that will not be perfected for a while! Bear that in mind while using the fusion commands!");

        //data parsing
        let personaName = args.join("_").toLowerCase();
        if (query) personaName = query;
        if (personaName.endsWith("/p")) personaName = personaName.slice(0, -3);
        if (!personaName) return message.reply(`You must specify a Persona to search. To view a list of Persona's, type \`${config.prefix}p3pfusion list\`!`)

        //checks if the user provided the "list" argument
        if (personaName === "list") {
            message.reply("Although the list below is complete, the rest of the command is not, and therefor, most of these Personas will not work. Check back later for more updates!");
            let list = new MessageEmbed()
                .setTitle("Persona 3 Portable Personas")
                .seuURL("https://megamitensei.fandom.com/wiki/List_of_Persona_3_Portable_Personas")
                .setColor(config.colors.p3blue)
                .setDescription(`Below is a list of all FUSABLE Personas in Persona 3 Portable. To view the recipes for a specified Persona, use one of the following commands: \`${config.prefix}p3 <personaName> /p\` or \`${config.prefix}p3pfusion <personaName>\``)
                .addField("Fool Arcana", "`Orpheus`, `Slime`, `Legion`, `Black Frost`, `Ose`, `Decarabia`, `Loki`, `Susano-o`, `Orpheus Telos`")
                .addField("Magician Arcana", "`Nekomata`, `Jack Frost`, `Pyro Jack`, `Hua Po`, `Sati`, `Orobas`, `Rangda`, `Surt`")
                .addField("Priestess Arcana", "`Apsaras`, `Unicorn`, `High Pixie`, `Sarasvati`, `Ganga`, `Parvati`, `Kikuri-hime`, `Scathach`")
                .addField("Empress Arcana", "`Leanan Sidhe`, `Yaksini`, `Lakshmi`, `Hariti`, `Gabriel`, `Mother Harlot`, `Skadi`, `Alilat`")
                .addField("Emperor Arcana", "`Forneus`, `Oberon`, `Take-Mikazuchi`, `King Frost`, `Raja Naga`, `Kingu`, `Barong`, `Odin`")
                .addField("Hierophant Arcana", "`Omoikane`, `Berith`, `Shiisaa`, `Flauros`, `Thoth`, `Hokuto Seikun`, `Daisoujou`, `Kohryu`")
                .addField("Lovers Arcana", "`Pixie`, `Alp`, `Tam Lin`, `Narcissus`, `Queen Mab`, `Saki Mitama`, `Titania`, `Raphael`, `Cybele`")
                .addField("Chariot Arcana", "`Ara Mitama`, `Chimera`, `Zouchouten`, `Ares`, `Oumitsunu`, `Nata Taishi`, `Koumokuten`, `Thor`")
                .addField("Justice Arcana", "`Angel`, `Archangel`, `Principality`, `Power`, `Virtue`, `Dominion`, `Throne`, `Melchizedek`")
                .addField("Hermit Arcana", "`Yomotsu Shikome`, `Naga`, `Lamia`, `Mothman`, `Taraka`, `Kurama Tengu`, `Nebiros`, `Kumbhanda`, `Arahabaki`")
                .addField("Fortune Arcana", "`Fortuna`, `Empusa`, `Kusi Mitama`, `Clotho`, `Lachesis`, `Atropos`, `Norn`")
                .addField("Strength Arcana", "`Valkyrie`, `Rakshasa`, `Titan`, `Jikokuten`, `Hanuman`, `Narasimha`, `Kali`, `Siegfried`")
                .addField("Hanged Man Arcana", "`Inugami`, `Take-Minakata`, `Orthus`, `Vasuki`, `Ubelluris`, `Hecatoncheires`, `Hell Biker`, `Attis`")
                .addField("Death Arcana", "`Ghoul`, `Pale Rider`, `Loa`, `Samael`, `Mot`, `Alice`, `Thanatos`")
                .addField("Temperance Arcana", "`Nigi Mitama`, `Mithra`, `Genbu`, `Seiryuu`, `Okuninushi`, `Suzaku`, `Byakko`, `Yurlunger`")
                .addField("Devil Arcana", "`Lilim`, `Mokoi`, `Vetala`, `Incubus`, `Succubus`, `Pazuzu`, `Lilith`, `Abaddon`, `Beelzebub`")
                .addField("Tower Arcana", "`Eligor`, `Cu Chulainn`, `Bishamonten`, `Seiten Taisei`, `Masakado`, `Mara`, `Shiva`, `Chi You`")
                .addField("Star Arcana", "`Neko Shogun`, `Setanta`, `Nandi`, `Kaiwan`, `Ganesha`, `Garuda`, `Kartikeya`, `Saturnus`, `Helel`")
                .addField("Moon Arcana", "`Gurr`, `Yamatano-Orochi`, `Girimehkala`, `Dionysus`, `Chernobog`, `Seth`, `Baal Zebul`, `Sandalphon`")
                .addField("Sun Arcana", "`Yatagarasu`, `Quetzalcoatl`, `Jatayu`, `Horus`, `Suparna`, `Vishnu`, `Asura`")
                .addField("Judgement Arcana", "`Anubis`, `Trumpeter`, `Michael`, `Satan`, `Lucifer`, `Messiah`")
                .addField("Aeon Arcana", "`Uriel`, `Nidhoggr`, `Ananta`, `Atavaka`, `Metatron`")
                .setFooter("Information gathered from the Megami Tensei Wiki", client.user.avatarURL())
                .setTimestamp();

            return message.channel.send(list);
        }

        switch (personaName) {
            //fool arcana
            case "orpheus":
                var name = "Orpheus";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus"
                var note = "Orpheus has 2 versions in P3P, both of which count as normal Orpheus";
                var result1 = "25,534¥ | [Legion](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Legion) (22/Fool) and [Slime](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Slime) (12/Fool)";
                var result2 = "No result.";
                var result3 = "No result.";
                var result4 = "No result.";
                var result5 = "No result.";
                break;
            case "slime":
                var name = "Slime";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Slime";
                var note = "";
                var result1 = "8,358¥ | [Angel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Angel) (4/Justice), [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess), and [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers)";
                var result2 = "8,520¥ | [Nekomata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nekomata) (5/Magician), [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess), and [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result3 = "9,951¥ | [Jack Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jack%20Frost) (8/Magician), [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess), and [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result4 = "10,275¥ | [Yomotsu Shikome](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yomotsu%20Shikome) (9/Hermit), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers), and [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result5 = "10,635¥ | [Lilim](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Lilim) (8/Devil), [Nekomata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nekomata) (5/Magician), and [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                break;
            case "legion":
                var name = "Legion";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Legion";
                var note = "";
                var result1 = "15,027¥ | [Unicorn](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Unicorn) (11/Priestess), [Forneus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Forneus) (7/Emperor), [Ara Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ara%20Mitama) (6/Chariot)";
                var result2 = "15,675¥ | [Berith](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Berith) (13/Hierophant), [Ara Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ara%20Mitama) (6/Chariot), [Nekomata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nekomata) (5/Magician)";
                var result3 = "15,783¥ | [Berith](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Berith) (13/Hierophant), [Forneus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Forneus) (7/Emperor), [Angel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Angel) (4/Justice)";
                var result4 = "15,819¥ | [Chimera](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Chimera) (9/Chariot), [Yomotsu Shikome](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yomotsu%20Shikome) (9/Hermit), [Lilim](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Lilim) (8/Devil)";
                var result5 = "16,035¥ | [Unicorn](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Unicorn) (11/Priestess), [Jack Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jack%20Frost) (8/Magician), [Omoikane](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Omoikane) (7/Hierophant)";
                break;
            case "black_frost":
                var name = "Black Frost";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Black%20Frost";
                var note = "";
                var result1 = "69,545¥ | [King Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/King%20Frost) (30/Emperor), [Queen Mab](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Queen%20Mab) (27/Lovers), [Pyro Jack](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pyro%20Jack) (14/Magician), [Jack Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jack%20Frost) (8/Magician)";
                var result2 = "No Result.";
                var result3 = "No Result.";
                var result4 = "No Result.";
                var result5 = "No Result.";
                break;
            case "ose":
                var name = "Ose";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ose";
                var note = "";
                var result1 = "39,543¥ | [Ares](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ares) (19/Chariot), [Mokoi](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Mokoi) (18/Devil), [Naga](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Naga) (17/Hermit)";
                var result2 = "39,705¥ | [Narcissus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Narcissus) (20/Lovers), [Mokoi](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Mokoi) (18/Devil), [Rakshasa](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Rakshasa) (16/Strength)";
                var result3 = "39,867¥ | [Hua Po](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hua%20Po) (20/Magician), [Neko Shogun](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Neko%20Shogun) (19/Star), [Oberon](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Oberon) (15/Emperor)";
                var result4 = "39,867¥ | [Narcissus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Narcissus) (20/Lovers), [Ares](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ares) (19/Chariot), [Gurr](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Gurr) (15/Moon)";
                var result5 = "40,515¥ | [High Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/High%20Pixie) (21/Priestess), [Hua Po](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hua%20Po) (20/Magician), [Berith](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Berith) (13/Hierophant)";
                break;
            case "decarabia":
                var name = "Decarabia";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Decarabia";
                var note = "";
                var result1 = "85,497¥ | [Ose](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ose) (44/Fool), [Legion](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Legion) (22/Fool), [Slime](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Slime) (12/Fool)";
                var result2 = "99,906¥ | [Ose](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ose) (44/Fool), [Black Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Black%20Frost) (34/Fool), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result3 = "105,153¥ | [Ose](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ose) (44/Fool), [Black Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Black%20Frost) (34/Fool), [Slime](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Slime) (12/Fool)";
                var result4 = "115,593¥ | [Ose](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ose) (44/Fool), [Black Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Black%20Frost) (34/Fool), [Legion](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Legion) (22/Fool)";
                var result5 = "151,863¥ | [Kurama Tengu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kurama%20Tengu) (44/Hermit), [Nandi](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nandi) (39/Star), [Hanuman](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hanuman) (37/Strength)";
                break;
            case "loki":
                var name = "Loki";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Loki";
                var note = "";
                var result1 = "138,210¥ | [Decarabia](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Decarabia) (50/Fool), [Ose](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ose) (44/Fool), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result2 = "143,457¥ | [Decarabia](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Decarabia) (50/Fool), [Ose](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ose) (44/Fool), [Slime](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Slime) (12/Fool)";
                var result3 = "153,897¥ | [Decarabia](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Decarabia) (50/Fool), [Ose](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ose) (44/Fool), [Legion](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Legion) (22/Fool)";
                var result4 = "173,553¥ | [Decarabia](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Decarabia) (50/Fool), [Ose](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ose) (44/Fool), [Black Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Black%20Frost) (34/Fool)";
                var result5 = "195,387¥ | [Parvati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Parvati) (47/Priestess), [Hokuto Seikun](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hokuto%20Seikun) (47/Hierophant), [Ose](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ose) (44/Fool)";
                break;
            case "susano-o":
                var name = "Susano-o";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Susano-o";
                var note = "You must have the Fool social link maxed out!";
                var result1 = "294,123¥ | [Loki](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Loki) (58/Fool), [Decarabia](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Decarabia) (50/Fool), [Ose](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ose) (44/Fool), [Black Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Black%20Frost) (34/Fool), [Legion](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Legion) (22/Fool), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result2 = "No Result.";
                var result3 = "No Result.";
                var result4 = "No Result.";
                var result5 = "No Result.";
                break;
            case "orpheus_telos":
                var name = "";
                var url = "";
                var note = "";
                var result1 = "1,213,392¥ | [Messiah](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Messiah) (90/Judgement), [Helel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Helel) (88/Star), [Metatron](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Metatron) (87/Aeon), [Chi You](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Chi%20You) (86/Tower), [Asura](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Asura) (85/Sun), [Thanatos](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Thanatos) (64/Death)";
                var result2 = "No Result.";
                var result3 = "No Result.";
                var result4 = "No Result.";
                var result5 = "No Result.";
                break;

            //magician arcana
            case "nekomata":
                var name = "Nekomata";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nekomata";
                var note = "";
                var result1 = "5,275¥ | [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers)";
                var result2 = "6,643¥ | [Alp](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Alp) (6/Lovers), [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess)";
                var result3 = "6,643¥ | [Ara Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ara%20Mitama) (6/Chariot), [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess)";
                var result4 = "6,859¥ | [Omoikane](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Omoikane) (7/Hierophant), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers)";
                var result5 = "14,086¥ | [Pyro Jack](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pyro%20Jack) (14/Magician), [Jack Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jack%20Frost) (8/Magician)";
                break;
            case "jack_frost":
                var name = "Jack Frost";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jack%20Frost";
                var note = "";
                var result1 = "6,958¥ | [Ara Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ara%20Mitama) (6/Chariot), [Angel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Angel) (4/Justice)";
                var result2 = "8,227¥ | [Omoikane](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Omoikane) (7/Hierophant), [Alp](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Alp) (6/Lovers)";
                var result3 = "8,236¥ | [Chimera](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Chimera) (9/Chariot), [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess)";
                var result4 = "8,407¥ | [Inugami](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Inugami) (10/Hanged Man), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result5 = "8,551¥ | [Chimera](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Chimera) (9/Chariot), [Angel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Angel) (4/Justice)";
                break;
            case "pyro_jack":
                var name = "Pyro Jack";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pyro%20Jack";
                var note = "";
                var result1 = "9,982¥ | [Archangel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Archangel) (10/Justice), [Ara Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ara%20Mitama) (6/Chariot)";
                var result2 = "10,158¥ | [Jack Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jack%20Frost) (8/Magician), [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers)";
                var result3 = "10,536¥ | [Chimera](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Chimera) (9/Chariot), [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result4 = "10,675¥ | [Unicorn](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Unicorn) (11/Priestess), [Alp](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Alp) (6/Lovers)";
                var result5 = "10,675¥ | [Unicorn](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Unicorn) (11/Priestess), [Ara Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ara%20Mitama) (6/Chariot)";
                break;
            case "hua_po":
                var name = "Hua Po";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hua%20Po";
                var note = "Requires an item from an Elizabeth request.";
                var result1 = "18,375¥ | [Unicorn](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Unicorn) (11/Priestess), [Inugami](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Inugami) (10/Hanged Man), [Chimera](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Chimera) (9/Chariot)";
                var result2 = "18,375¥ | [Unicorn](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Unicorn) (11/Priestess), [Inugami](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Inugami) (10/Hanged Man), [Yomotsu Shikome](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yomotsu%20Shikome) (9/Hermit)";
                var result3 = "18,483¥ | [Unicorn](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Unicorn) (11/Priestess), [Valkyrie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Valkyrie) (11/Strength), [Lilim](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Lilim) (8/Devil)";
                var result4 = "18,699¥ | [Slime](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Slime) (12/Fool), [Valkyrie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Valkyrie) (11/Strength), [Omoikane](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Omoikane) (7/Hierophant)";
                var result5 = "18,699¥ | [Slime](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Slime) (12/Fool), [Valkyrie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Valkyrie) (11/Strength), [Forneus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Forneus) (7/Emperor)";
                break;
            case "sati":
                var name = "Sati";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Sati";
                var note = "";
                var result1 = "28,122¥ | [Hua Po](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hua%20Po) (20/Magician), [Pyro Jack](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pyro%20Jack) (14/Magician), [Nekomata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nekomata) (5/Magician)";
                var result2 = "29,553¥ | [Hua Po](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hua%20Po) (20/Magician), [Pyro Jack](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pyro%20Jack) (14/Magician), [Jack Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jack%20Frost) (8/Magician)";
                var result3 = "30,988¥ | [High Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/High%20Pixie) (21/Priestess), [Ares](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ares) (19/Chariot)";
                var result4 = "32,167¥ | [High Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/High%20Pixie) (21/Priestess), [Narcissus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Narcissus) (20/Lovers)";
                var result5 = "32,284¥ | [Lamia](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Lamia) (25/Hermit), [Gurr](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Gurr) (15/Moon)";
                break;
            case "orobas":
                var name = "Orobas";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orobas";
                var note = "";
                var result1 = "40,929¥ | [Sati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Sati) (28/Magician), [Pyro Jack](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pyro%20Jack) (14/Magician), [Jack Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jack%20Frost) (8/Magician)";
                var result2 = "45,762¥ | [Sati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Sati) (28/Magician), [Hua Po](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hua%20Po) (20/Magician), [Nekomata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nekomata) (5/Magician)";
                var result3 = "47,193¥ | [Sati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Sati) (28/Magician), [Hua Po](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hua%20Po) (20/Magician), [Jack Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jack%20Frost) (8/Magician)";
                var result4 = "51,513¥ | [Sati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Sati) (28/Magician), [Hua Po](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hua%20Po) (20/Magician), [Pyro Jack](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pyro%20Jack) (14/Magician)";
                var result5 = "53,740¥ | [Kusi Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kusi%20Mitama) (29/Fortune), [Sarasvati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Sarasvati) (27/Priestess)";
                break;
            case "rangda":
                var name = "Rangda";
                var url = "";
                var note = "";
                var result1 = "67,938¥ | [Orobas](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orobas) (34/Magician), [Sati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Sati) (28/Magician), [Nekomata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nekomata) (5/Magician)";
                var result2 = "69,369¥ | [Orobas](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orobas) (34/Magician), [Sati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Sati) (28/Magician), [Jack Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jack%20Frost) (8/Magician)";
                var result3 = "73,689¥ | [Orobas](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orobas) (34/Magician), [Sati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Sati) (28/Magician), [Pyro Jack](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pyro%20Jack) (14/Magician)";
                var result4 = "76,636¥ | [Saki Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Saki%20Mitama) (39/Lovers), [Kusi Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kusi%20Mitama) (29/Fortune)";
                var result5 = "77,599¥ | [Nata Taishi](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nata%20Taishi) (37/Chariot), [Virtue](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Virtue) (32/Justice)";
                break;
            case "surt":
                var name = "Surt";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Surt";
                var note = "Must have the Magician Social Link maxed out!";
                var result1 = "91,482¥ | [Rangda](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Rangda) (40/Magician), [Orobas](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orobas) (34/Magician), [Nekomata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nekomata) (5/Magician)";
                var result2 = "92,913¥ | [Rangda](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Rangda) (40/Magician), [Orobas](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orobas) (34/Magician), [Jack Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jack%20Frost) (8/Magician)";
                var result3 = "97,233¥ | [Rangda](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Rangda) (40/Magician), [Orobas](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orobas) (34/MAgician), [Pyro Jack](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pyro%20Jack) (14/Magician)";
                var result4 = "100,828¥ | [Thoth](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Thoth) (41/Hierophant), [Saki Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Saki%20Mitama) (39/Lovers)";
                var result5 = "100,990¥ | [Girimehkala](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Girimehkala) (42/Moon), [Taraka](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Taraka) (38/Hermit)";
                break;

            //priestess arcana
            case "apsaras":
                var name = "Apsaras";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras";
                var note = "";
                var result1 = "4,807¥ | [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result2 = "23,500¥ | [High Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/High%20Pixie) (21/Priestess), [Unicorn](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Unicorn) (11/Priestess)";
                var result3 = "32,032¥ | [Sarasvati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Sarasvati) (27/Priestess), [Unicorn](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Unicorn) (11/Priestess)";
                var result4 = "No Result.";
                var result5 = "No Result.";
                break;
            case "unicorn":
                var name = "Unicorn";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Unicorn";
                var note = "";
                var result1 = "6,175¥ | [Alp](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Alp) (6/Lovers), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result2 = "7,575¥ | [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result3 = "7,768¥ | [Yomostu Shikome](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yomotsu%20Shikome) (9/Hermit), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result4 = "8,551¥ | [Yomostu Shikome](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yomotsu%20Shikome) (9/Hermit), [Angel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Angel) (4/Justice)";
                var result5 = "9,190¥ | [Ingugami](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Inugami) (10/Hanged Man), [Angel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Angel) (4/Justice)";
                break;
            case "high_pixie":
                var name = "High Pixie";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/High%20Pixie";
                var note = "";
                var result1 = "14,082¥ | [Inugami](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Inugami) (10/Hanged Man), [Yomotsu Shikome](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yomotsu%20Shikome) (9/Hermit), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers)";
                var result2 = "14,334¥ | [Inugami](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Inugami) (10/Hanged Man), [Omoikane](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Omoikane) (7/Hermit), [Ara Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ara%20Mitama) (6/Chariot)";
                var result3 = "14,568¥ | [Unicorn](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Unicorn) (11/Priestess), [Yomotsu Shikome](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yomotsu%20Shikome) (9/Hermit), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result4 = "14,730¥ | [Slime](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Slime) (12/Fool), [Lilim](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Lilim) (8/Devil), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result5 = "14,865¥ | [Archangel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Archangel) (10/Justice), [Lilim](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Lilim) (8/Devil), [Ara Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ara%20Mitama) (6/Chariot)";
                break;
            case "sarasvati":
                var name = "Sarasvati";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Sarasvati";
                var note = "";
                var result1 = "33,454¥ | [Legion](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Legion) (22/Fool), [Narcissus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Narcissus) (20/Lovers)";
                var result2 = "33,454¥ | [Mithra](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Mithra) (22/Temperance), [Naricssus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Narcissus) (20/Lovers)";
                var result3 = "33,616¥ | [Titan](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Titan) (23/Strength), [Neko Shogun](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Neko%20Shogun) (19/Star)";
                var result4 = "34,264¥ | [Power](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Power) (25/Justice), [Naga](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Naga) (17/Hermit)";
                var result5 = "34,750¥ | [Shiisaa](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Shiisaa) (26/Hierophant), [Rakshasa](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Rakshasa) (16/Strength)";
                break;
            case "ganga":
                var name = "Ganga";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ganga";
                var note = "";
                var result1 = "44,700¥ | [Sarasvati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Sarasvati) (27/Priestess), [High Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/High%20Pixie) (21/Priestess), [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess)";
                var result2 = "48,732¥ | [Sarasvati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Sarasvati) (27/Priestess), [High Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/High%20Pixie) (21/Priestess), [Unicorn](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Unicorn) (11/Priestess)";
                var result3 = "50,518¥ | [Sati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Sati) (28/Magician), [Yamatano-Orochi](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yamatano-orochi) (26/Moon)";
                var result4 = "50,518¥ | [Setanta](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Setanta) (28/Star), [Shiisaa](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Shiisaa) (26/Priestess)";
                var result5 = "51,814¥ | [Mothman](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Mothman) (32/Moon), [Legion](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Legion) (22/Fool)";
                break;
            case "parvati":
                var name = "";
                var url = "";
                var note = "";
                var result1 = "67,632¥ | [Ganga](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ganga) (35/Priestess), [Sarasvati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Sarasvati) (27/Priestess), [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess)";
                var result2 = "71,664¥ | [Ganga](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ganga) (35/Priestess), [Sarasvati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Sarasvati) (27/Priestess), [Unicorn](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Unicorn) (11/Priestess)";
                var result3 = "79,480¥ | [Hanuman](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hanuman) (37/Strength), [Flauros](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Flauros) (33/Hierophant)";
                var result4 = "79,750¥ | [Taraka](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Taraka) (38/Hermit), [Virtue](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Virtue) (32/Justice)";
                var result5 = "79,750¥ | [Vasuki](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Vasuki) (38/Hanged Man), [Virtue](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Virtue) (32/Justice)";
                break;
            case "kikuri_hime":
                var name = "Kikuri-Hime";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kikuri-hime";
                var note = "";
                var result1 = "109,644¥ | [Parvati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Parvati) (47/Priestess), [Sarasvati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Sarasvati) (27/Priestess), [High Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/High%20Pixie) (21/Priestess)";
                var result2 = "110,112¥ | [Parvati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Parvati) (47/Priestess), [Ganga](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ganga) (35/Priestess), [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess)";
                var result3 = "114,144¥ | [Parvati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Parvati) (47/Priestess), [Ganga](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ganga) (35/Priestess), [Unicorn](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Unicorn) (11/Priestess)";
                var result4 = "124,044¥ | [Parvati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Parvati) (47/Priestess), [Ganga](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ganga) (35/Priestess), [High Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/High%20Pixie) (21/Priestess)";
                var result5 = "132,576¥ | [Parvati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Parvati) (47/Priestess), [Ganga](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ganga) (35/Priestess), [Sarasvati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Sarasvati) (27/Priestess)";
                break;
            case "scathach":
                var name = "Scathach";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Scathach";
                var note = "Requires the Priestess Social Link to be maxed out!";
                var result1 = "155,148¥ | [Kikuri-Hime](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kikuri-hime) (53/Priestess), [Parvati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Parvati) (47/Priestess), [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess)";
                var result2 = "159,180¥ | [Kikuri-Hime](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kikuri-hime) (53/Priestess), [Parvati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Parvati) (47/Priestess), [Unicorn](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Unicorn) (11/Priestess)";
                var result3 = "169,080¥ | [Kikuri-Hime](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kikuri-hime) (53/Priestess), [Parvati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Parvati) (47/Priestess), [High Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/High%20Pixie) (21/Priestess)";
                var result4 = "169,822¥ | [Kumbhanda](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kumbhanda) (56/Hermit), [Decarabia](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Decarabia) (50/Fool)";
                var result5 = "170,686¥ | [Loki](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Loki) (58/Fool), [Titania](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Titania) (48/Lovers)";
                break;

            //empress arcana
            case "leanan_sidhe":
                var name = "Leanan Sidhe";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Leanan%20Sidhe";
                var note = "";
                var result1 = "10,315¥ | [Nigi Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nigi%20Mitama) (12/Temperance), [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess)";
                var result2 = "12,354¥ | [Nigi Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nigi%20Mitama) (12/Temperance), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result3 = "12,619¥ | [Gurr](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Gurr) (15/Moon), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers)";
                var result4 = "13,722¥ | [Nigi Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nigi%20Mitama) (12/Temperance), [Alp](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Alp) (6/Lovers), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result5 = "13,987¥ | [Gurr](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Gurr) (15/Moon), [Alp](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Alp) (6/Lovers)";
                break;
            case "yaksini":
                var name = "Yaksini";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yaksini";
                var note = "";
                var result1 = "71,902¥ | [Raja Naga](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Raja%20Naga) (36/Emperor), [Yatagarasu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yatagarasu) (30/Sun)";
                var result2 = "74,971¥ | [Nandi](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nandi) (39/Star), [Sati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Sati) (28/Magician)";
                var result3 = "77,230¥ | [Cu Chulainn](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Cu%20Chulainn) (40/Tower), [Sati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Sati) (28/Magician)";
                var result4 = "77,230¥ | [Rangda](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Rangda) (40/Magician), [Setanta](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Setanta) (28/Star)";
                var result5 = "78,211¥ | [Quetzalcoatl](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Quetzalcoatl) (43/Sun), [Take-mikazuchi](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Take-mikazuchi) (24/Emperor)";
                break;
            case "laksmi":
                var name = "Laksmi";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Laksmi";
                var note = "";
                var result1 = "154,540¥ | [Odin](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Odin) (57/Emperor), [Quetzalcoatl](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Quetzalcoatl) (43/Sun)";
                var result2 = "154,855¥ | [Surt](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Surt) (52/Magician), [Kaiwan](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kaiwan) (49/Star)";
                var result3 = "155,827¥ | [Jatayu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jatayu) (55/Sun), [Kingu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kingu) (46/Emperor)";
                var result4 = "157,294¥ | [Bishamonten](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Bishamonten) (60/Tower), [Rangda](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Rangda) (40/Magician)";
                var result5 = "157,771¥ | [Loki](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Loki) (58/Fool), [Quetzalcoatl](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Quetzalcoatl) (43/Sun)";
                break;
            case "hariti":
                var name = "Hariti";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hariti";
                var note = "";
                var result1 = "197,335¥ | [Chernobog](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Chernobog) (58/Moon), [Byakko](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Byakko) (57/Temperance)";
                var result2 = "198,478¥ | [Seth](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Seth) (66/Moon), [Titania](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Titania) (48/Lovers)";
                var result3 = "198,478¥ | [Seth](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Seth) (66/Moon), [Ubelluris](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ubelluris) (48/Hanged Man)";
                var result4 = "198,955¥ | [Horus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Horus) (63/Sun), [Barong](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Barong) (52/Emperor)";
                var result5 = "199,603¥ | [Scathach](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Scathach) (64/Priestess), [Suzaku](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Suzaku) (51/Temperance)";
                break;
            case "gabriel":
                var name = "Gabriel";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Gabriel";
                var note = "";
                var result1 = "230,140¥ | [Nidhoggr](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nidhoggr) (69/Aeon), [Jatayu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jatayu) (55/Sun)";
                var result2 = "232,075¥ | [Attis](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Attis) (67/Hanged Man), [Chernobog](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Chernobog) (58/Moon)";
                var result3 = "234,496¥ | [Horus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Horus) (63/Sun), [Uriel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Uriel) (63/Aeon)";
                var result4 = "234,883¥ | [Baal Zebul](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Baal%20Zebul) (71/Moon), [Hecatoncheires](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hecatoncheires) (54/Hanged Man)";
                var result5 = "234,982¥ | [Seth](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Seth) (66/Moon), [Hell Biker](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hell%20Biker) (60/Hanged Man)";
                break;
            case "mother_harlot":
                var name = "Mother Harlot";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Mother%20Harlot";
                var note = "";
                var result1 = "278,992¥ | [Baal Zebul](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Baal%20Zebul) (71/Moon), [Attis](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Attis) (67/Hanged Man)";
                var result2 = "280,126¥ | [Sandalphon](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Sandalphon) (74/Moon), [Yurlungur](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yurlungur) (64/Temperance)";
                var result3 = "280,720¥ | [Ananta](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ananta) (75/Aeon), [Horus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Horus) (63/Sun)";
                var result4 = "282,655¥ | [Suparna](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Suparna) (70/Sun), [Nidhoggr](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nidhoggr) (69/Aeon)";
                var result5 = "282,763¥ | [Baal Zebul](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Baal%20Zebul) (71/Moon), [Cybele](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Cybele) (68/Lovers)";
                break;
            case "skadi":
                var name = "Skadi";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Skadi";
                var note = "";
                var result1 = "325,180¥ | [Asura](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Asura) (85/Sun), [Uriel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Uriel) (63/Aeon)";
                var result2 = "328,294¥ | [Atavaka](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Atavaka) (80/Aeon), [Suparna](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Suparna) (70/Sun)";
                var result3 = "334,419¥ | [Mother Harlot](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Mother%20Harlot) (74/Empress), [Gabriel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Gabriel) (69/Empress), [Leanan Sidhe](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Leanan%20Sidhe) (33/Empress)";
                var result4 = "334,720¥ | [Metatron](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Metatron) (87/Aeon), [Horus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Horus) (63/Sun)";
                var result5 = "338,275¥ | [Metatron](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Metatron) (87/Aeon), [Scathach](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Scathach) (64/Priestess)";
                break;
            case "alilat":
                var name = "Alilat";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Alilat";
                var note = "Requires the Empress Social Link to be maxed out!";
                var result1 = "371,404¥ | [Asura](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Asura) (85/Sun), [Ananta](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ananta) (75/Aeon)";
                var result2 = "375,454¥ | [Orpheus Telos](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus%20Telos) (90/Fool), [Suparna](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Suparna) (70/Sun)";
                var result3 = "375,607¥ | [Asura](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Asura) (85/Sun), [Susano-o](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Susano-o) (76/Fool)";
                var result4 = "392,959¥ | [Asura](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Asura) (85/Sun), [Atavaka](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Atavaka) (80/Aeon)";
                var result5 = "393,715¥ | [Metatron](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Metatron) (87/Aeon), [Vishnu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Vishnu) (78/Sun)";
                break;

            //emperor arcana
            case "forneus":
                var name = "Forneus";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Forneus";
                var note = "";
                var result1 = "5,959¥ | [Nekomata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nekomata) (5/Magician), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers)";
                var result2 = "6,175¥ | [Ara Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ara%20Mitama) (6/Chariot), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result3 = "6,382¥ | [Ara Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ara%20Mitama) (6/Chariot), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers)";
                var result4 = "7,327¥ | [Alp](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Alp) (6/Lovers), [Nekomata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nekomata) (5/Magician)";
                var result5 = "7,390¥ | [Jack Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jack%20Frost) (8/Magician), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers)";
                break;
            case "oberon":
                var name = "Oberon";
                var url = "";
                var note = "";
                var result1 = "8,682¥ | [Ara Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ara%20Mitama) (6/Chariot), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result2 = "8,758¥ | [Jack Frost](https/://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jack%20Frost) (8/Magician), [Alp](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Alp) (6/Lovers)";
                var result3 = "9,343¥ | [Chimera](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Chimera) (9/Chariot), [Alp](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Alp) (6/Lovers)";
                var result4 = "10,275¥ | [Chimera](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Chimera) (9/Chariot), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result5 = "10,311¥ | [Forneus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Forneus) (7/Emperor), [Nekomata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nekomata) (5/Magician), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers)";
                break;
            case "take_mikazuchi":
                var name = "Take-mikazuchi";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Take-mikazuchi";
                var note = "";
                var result1 = "20,440¥ | [Fortuna](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Fortuna) (17/Fortune), [Berith](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Berith) (13/Hierophant)";
                var result2 = "20,616¥ | [Berith](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Berith) (13/Hierophant), [Valkyrie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Valkyrie) (11/Strength), [Yomotsu Shikome](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yomotsu%20Shikome) (9/Hermit)";
                var result3 = "20,616¥ | [Berith](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Berith) (13/Hierophant), [Unicorn](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Unicorn) (11/Priestess), [Yomotsu Shikome](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yomotsu%20Shikome) (9/Hermit)";
                var result4 = "20,778¥ | [Pyro Jack](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pyro%20Jack) (14/Magician), [Inugami](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Inugami) (10/Hanged Man), [Chimera](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Chimera) (9/Chariot)";
                var result5 = "20,778¥ | [Pyro Jack](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pyro%20Jack) (14/Magician), [Inugami](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Inugami) (10/Hanged Man), [Yomotsu Shikome](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yomotsu%20Shikome) (9/Hermit)";
                break;
            case "king_frost":
                var name = "King Frost";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/King%20Frost";
                var note = "Requires an item from one of the Elizabeth requests!";
                var result1 = "41,500¥ | [Lamia](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Lamia) (25/Hermit), [Empusa](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Empusa) (23/Fortune)";
                var result2 = "42,310¥ | [Sati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Sati) (28/Magician), [Narcissus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Narcissus) (20/Lovers)";
                var result3 = "43,003¥ | [Shiisaa](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Shiisaa) (26/Hierophant), [Empusa](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Empusa) (23/Fortune)";
                var result4 = "43,975¥ | [Kusi Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kusi%20Mitama) (29/Fortune), [Hua Po](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hua%20Po) (20/Magician)";
                var result5 = "45,694¥ | [Oumitsunu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Oumitsunu) (30/Chariot), [Narcissus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Narcissus) (20/Lovers)";
                break;
            case "raja_naga":
                var name = "Raja Naga";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Raja%20Naga";
                var note = "";
                var result1 = "55,302¥ | [King Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/King%20Frost) (30/Emperor), [Take-mikazuchi](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Take-mikazuchi) (24/Emperor), [Forneus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Forneus) (7/Emperor)";
                var result2 = "60,670¥ | [Virtue](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Virtue) (32/Justice), [Setanta](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Setanta) (28/Star)";
                var result3 = "61,062¥ | [King Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/King%20Frost) (30/Emperor), [Take-mikazuchi](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Take-mikazuchi) (24/Emperor), [Oberon](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Oberon) (15/Emperor)";
                var result4 = "62,335¥ | [Mothman](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Mothman) (32/Hermit), [Kusi Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kusi%20Mitama) (29/Fortune)";
                var result5 = "62,875¥ | [Orobas](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orobas) (34/Magician), [Queen Mab](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Queen%20Mab) (27/Lovers)";
                break;
            case "kingu":
                var name = "Kingu";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kingu";
                var note = "";
                var result1 = "76,254¥ | [Raja Naga](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Raja%20Naga) (36/Emperor), [King Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/King%20Frost) (30/Emperor), [Forneus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Forneus) (7/Emperor)";
                var result2 = "82,014¥ | [Raja Naga](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Raja%20Naga) (36/Emperor), [King Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/King%20Frost) (30/Emperor), [Oberon](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Oberon) (15/Emperor)";
                var result3 = "83,404¥ | [Samael](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Samael) (37/Death), [Gnaga](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ganga) (35/Priestess)";
                var result4 = "83,566¥ | [Clotho](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Clotho) (38/Fortune), [Orobas](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orobas) (34/Magician)";
                var result5 = "85,294¥ | [Dominion](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Dominion) (42/Justice), [Yatagarasu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yatagarasu) (30/Sun)";
                break;
            case "barong":
                var name = "Barong";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Barong";
                var note = "";
                var result1 = "111,102¥ | [Kingu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kingu) (46/Emperor), [Raja Naga](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Raja%20Naga) (36/Emperor), [Forneus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Forneus) (7/Emperor)";
                var result2 = "116,025¥ | [Kingu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kingu) (46/Emperor), [King Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/King%20Frost) (30/Emperor), [Take-mikazuchi](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Take-mikazuchi) (24/Emperor)";
                var result3 = "116,862¥ | [Kingu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kingu) (46/Emperor), [Raja Naga](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Raja%20Naga) (36/Emperor), [Oberon](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Oberon) (15/Emperor)";
                var result4 = "127,473¥ | [Kingu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kingu) (46/Emperor), [Raja Naga](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Raja%20Naga) (36/Emperor), [Take-mikazuchi](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Take-mikazuchi) (24/Emperor)";
                var result5 = "130,204¥ | [Parvati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Parvati) (47/Priestess), [Mot](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Mot) (45/Death)";
                break;
            case "odin":
                var name = "Odin";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Odin";
                var note = "Requires the Emperor Social Link to be maxed out!";
                var result1 = "151,134¥ | [Barong](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Barong) (52/Emperor), [Kingu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kingu) (46/Emperor), [Forneus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Forneus) (7/Emperor)";
                var result2 = "156,894¥ | [Barong](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Barong) (52/Emperor), [Kingu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kingu) (46/Emperor), [Oberon](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Oberon) (15/Emperor)";
                var result3 = "163,630¥ | [Atropos](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Atropos) (54/Fortune), [Nebiros](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nebiros) (50/Hermit)";
                var result4 = "167,505¥ | [Barong](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Barong) (52/Emperor), [Kingu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kingu) (46/Emperor), [Take-mikazuchi](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Take-mikazuchi) (24/Emperor)";
                var result5 = "167,788¥ | [Raphael](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Raphael) (61/Lovers), [Koumokuten](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Koumokuten) (43/Chariot)";
                break;

            //hierophant arcana
            case "omoikane":
                var name = "Omoikane";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Omoikane";
                var note = "";
                var result1 = "5,752¥ | [Nekomata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nekomata) (5/Magician), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result2 = "6,535¥ | [Nekomata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nekomata) (5/Magician), [Angel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Angel) (4/Justice)";
                var result3 = "7,183¥ | [Jack Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jack%20Frost) (8/Magician), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result4 = "7,890¥ | [Angel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Angel) (4/Justice), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result5 = "7,966¥ | [Jack Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jack%20Frost) (8/Magician), [Angel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Angel) (4/Justice)";
                break;
            case "berith":
                var name = "Berith";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Berith";
                var note = "";
                var result1 = "9,159¥ | [Forneus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Forneus) (7/Emperor), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result2 = "9,559¥ | [Archangel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Archangel) (10/Justice), [Nekomata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nekomata) (5/Magician)";
                var result3 = "10,104¥ | [Omoikane](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Omoikane) (7/Hierophant), [Nekomata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nekomata) (5/Magician), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result4 = "10,527¥ | [Forneus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Forneus) (7/Emperor), [Alp](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Alp) (6/Lovers), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result5 = "10,675¥ | [Valkyrie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Valkyrie) (11/Strength), [Alp](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Alp) (6/Lovers)";
                break;
            case "shiisaa":
                var name = "Shiisaa";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Shiisaa";
                var note = "";
                var result1 = "16,620¥ | [Unicorn](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Unicorn) (11/Priestess), [Chimera](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Chimera) (9/Chariot), [Omoikane](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Omoikane) (7/Hierophant)";
                var result2 = "16,750¥ | [Pyro Jack](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pyro%20Jack) (14/Magician), [Slime](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Slime) (12/Fool)";
                var result3 = "16,782¥ | [Slime](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Slime) (12/Fool), [Jack Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jack%20Frost) (8/Magician), [Forneus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Forneus) (7/Emperor)";
                var result4 = "16,890¥ | [Slime](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Slime) (12/Fool), [Yomotsu Shikome](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yomotsu%20Shikome) (9/Hermit), [Ara Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ara%20Mitama) (6/Chariot)";
                var result5 = "17,043¥ | [Inugami](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Inugami) (10/Hanged Man), [Chimera](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Chimera) (9/Chariot), [Yomotsu Shikome](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yomotsu%20Shikome) (9/Hermit)";
                break;
            case "flauros":
                var name = "Flauros";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Flauros";
                var note = "";
                var result1 = "49,015¥ | [Sati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Sati) (28/Magician), [Power](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Power) (25/Justice)";
                var result2 = "49,294¥ | [Virtue](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Virtue) (32/Justice), [Hua Po](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hua%20Po) (20/Magician)";
                var result3 = "52,075¥ | [Setanta](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Setanta) (28/Star), [Queen Mab](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Queen%20Mab) (27/Lovers)";
                var result4 = "53,110¥ | [Black Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Black%20Frost) (34/Fool), [Hua Po](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hua%20Po) (20/Magician)";
                var result5 = "53,740¥ | [Jikokuten](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jikokuten) (29/Strength), [Queen Mab](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Queen%20Mab) (27/Lovers)";
                break;
            case "thoth":
                var name = "Thoth";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Thoth";
                var note = "Requires an item from an Elizabeth request.";
                var result1 = "63,735¥ | [Flauros](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Flauros) (33/Hierophant), [Shiisaa](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Shiisaa) (26/Hierophant), [Omoikane](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Omoikane) (7/Hierophant)";
                var result2 = "67,731¥ | [Flauros](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Flauros) (33/Hierophant), [Shiisaa](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Shiisaa) (26/Hierophant), [Berith](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Berith) (13/Hierophant)";
                var result3 = "71,470¥ | [Orobas](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orobas) (34/Magician), [Virtue](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Virtue) (32/Justice)";
                var result4 = "73,360¥ | [Nandi](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nandi) (39/Star), [Queen Mab](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Queen%20Mab) (27/Lovers)";
                var result5 = "74,431¥ | [Vasuki](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Vasuki) (38/Hanged Man), [Genbu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Genbu) (29/Temperance)";
                break;
            case "hokuto_seikun":
                var name = "Hokuto Seikun";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hokuto%20Seikun";
                var note = "";
                var result1 = "92,760¥ | [Thoth](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Thoth) (41/Hierophant), [Flauros](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Flauros) (33/Hierophant), [Omoikane](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Omoikane) (7/Hierophant)";
                var result2 = "96,756¥ | [Thoth](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Thoth) (41/Hierophant), [Flauros](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Flauros) (33/Hierophant), [Berith](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Berith) (13/Hierophant)";
                var result3 = "105,454¥ | [Dominion](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Dominion) (42/Justice), [Rangda](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Rangda) (40/Magician)";
                var result4 = "105,616¥ | [Quetzalcoatl](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Quetzalcoatl) (43/Sun), [Saki Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Saki%20Mitama) (39/Lovers)";
                var result5 = "105,886¥ | [Okuninushi](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Okuninushi) (44/Temperance), [Vasuki](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Vasuki) (38/Hanged Man)";
                break;
            case "daisoujou":
                var name = "Daisoujou";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Daisoujou";
                var note = "";
                var result1 = "106,045¥ | [Saki Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Saki%20Mitama) (39/Lovers), [Kusi Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kusi%20Mitama) (29/Fortune), [Mithra](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Mithra) (22/Temperance), [Nigi Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nigi%20Mitama) (12/Temperance), [Ara Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ara%20Mitama) (6/Chariot)";
                var result2 = "No Result.";
                var result3 = "No Result.";
                var result4 = "No Result.";
                var result5 = "No Result.";
                break;
            case "kohryu":
                var name = "Kohryu";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kohryu";
                var note = "Requires the Hierophant Social Link to be maxed out!";
                var result1 = "246,035¥ | [Byakko](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Byakko) (57/Temperance), [Suzaku](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Suzaku) (51/Temperance), [Seiryuu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Seiryuu) (36/Temperance), [Genbu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Genbu) (29/Temperance)";
                var result2 = "No Result.";
                var result3 = "No Result.";
                var result4 = "No Result.";
                var result5 = "No Result.";
                break;

            //lovers arcana
            case "pixie":
                var name = "Pixie";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie";
                var note = "";
                var result1 = "12,223¥ | [Tam Lin](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Tam%20Lin) (13/Lovers), [Alp](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Alp) (6/Lovers)";
                var result2 = "No Result.";
                var result3 = "No Result.";
                var result4 = "No Result.";
                var result5 = "No Result.";
                break;
            case "alp":
                var name = "Alp";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Alp";
                var note = "";
                var result1 = "5,383¥ | [Angel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Angel) (4/Justice), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result2 = "5,851¥ | [Angel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Angel) (4/Justice), [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess)";
                var result3 = "6,220¥ | [Nekomata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nekomata) (5/Magician), [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess)";
                var result4 = "7,651¥ | [Jack Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jack%20Frost) (8/Magician), [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess)";
                var result5 = "8,407¥ | [Archangel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Archangel) (10/Justice), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                break;
            case "tam_lin":
                var name = "Tam Lin";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Tam%20Lin";
                var note = "";
                var result1 = "8,875¥ | [Archangel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Archangel) (10/Justice), [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess)";
                var result2 = "9,258¥ | [Alp](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Alp) (6/Lovers), [Angel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Angel) (4/Justice), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result3 = "9,627¥ | [Forneus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Forneus) (7/Emperor), [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers)";
                var result4 = "9,726¥ | [Alp](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Alp) (6/Lovers), [Angel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Angel) (4/Justice), [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess)";
                var result5 = "9,883¥ | [Unicorn](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Unicorn) (11/Priestess), [Angel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Angel) (4/Justice)";
                break;
            case "narcissus":
                var name = "Narcissus";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Narcissus";
                var note = "";
                var result1 = "16,890¥ | [Slime](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Slime) (12/Fool), [Chimera](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Chimera) (9/Chariot), [Alp](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Alp) (6/Lovers)";
                var result2 = "17,529¥ | [Nigi Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nigi%20Mitama) (12/Temperance), [Inugami](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Inugami) (10/Hanged Man), [Ara Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ara%20Mitama) (6/Chariot)";
                var result3 = "17,875¥ | [Principality](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Principality) (16/Justice), [Unicorn](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Unicorn) (11/Priestess)";
                var result4 = "17,916¥ | [Oberon](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Oberon) (15/Emperor), [Omoikane](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Omoikane) (7/Hierophant), [Nekomata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nekomata) (5/Magician)";
                var result5 = "17,961¥ | [Pyro Jack](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pyro%20Jack) (14/Magician), [Jack Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jack%20Frost) (8/Magician), [Alp](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Alp) (6/Lovers)";
                break;
            case "queen_mab":
                var name = "Queen Mab";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Queen%20Mab";
                var note = "";
                var result1 = "26,322¥ | [Narcissus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Narcissus) (20/Lovers), [Tam Lin](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Tam%20Lin) (13/Lovers), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers)";
                var result2 = "27,690¥ | [Narcissus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Narcissus) (20/Lovers), [Tam Lin](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Tam%20Lin) (13/Lovers), [Alp](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Alp) (6/Lovers)";
                var result3 = "32,167¥ | [High Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/High%20Pixie) (21/Priestess), [Hua Po](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hua%20Po) (20/Magician)";
                var result4 = "33,387¥ | [Naga](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Naga) (17/Hermit), [Fortuna](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Fortuna) (17/Fortune), [Pyro Jack](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pyro%20Jack) (14/Magician)";
                var result5 = "34,089¥ | [Narcissus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Narcissus) (20/Lovers), [Principality](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Principality) (16/Justice), [Slime](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Slime) (12/Fool)";
                break;
            case "saki_mitama":
                var name = "Saki Mitama";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Saki%20Mitama";
                var note = "";
                var result1 = "43,206¥ | [Queen Mab](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Queen%20Mab) (27/Lovers), [Narcissus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Narcissus) (20/Lovers), [Pixie]()https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie (2/Lovers)";
                var result2 = "44,574¥ | [Queen Mab](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Queen%20Mab) (27/Lovers), [Narcissus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Narcissus) (20/Lovers), [Alp](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Alp) (6/Lovers)";
                var result3 = "49,047¥ | [Queen Mab](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Queen%20Mab) (27/Lovers), [Narcissus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Narcissus) (20/Lovers), [Tam Lin](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Tam%20Lin) (13/Lovers)";
                var result4 = "50,518¥ | [Orthrus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orthrus) (28/Hanged Man), [Shiisaa](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Shiisaa) (26/Hierophant)";
                var result5 = "51,814¥ | [Virtue](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Virtue) (32/Justice), [Legion](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Legion) (22/Fool)";
                break;
            case "titania":
                var name = "Titania";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Titania";
                var note = "";
                var result1 = "71,943¥ | [Saki Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Saki%20Mitama) (39/Lovers), [Narcissus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Narcissus) (20/Lovers), [Tam Lin](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Tam%20Lin) (13/Lovers)";
                var result2 = "75,867¥ | [Saki Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Saki%20Mitama) (39/Lovers), [Queen Mab](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Queen%20Mab) (27/Lovers), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers)";
                var result3 = "77,235¥ | [Saki Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Saki%20Mitama) (39/Lovers), [Queen Mab](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Queen%20Mab) (27/Lovers), [Alp](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Alp) (6/Lovers)";
                var result4 = "81,708¥ | [Saki Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Saki%20Mitama) (39/Lovers), [Queen Mab](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Queen%20Mab) (27/Lovers), [Tam Lin](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Tam%20Lin) (13/Lovers)";
                var result5 = "88,827¥ | [Saki Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Saki%20Mitama) (39/Lovers), [Queen Mab](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Queen%20Mab) (27/Lovers), [Narcissus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Narcissus) (20/Lovers)";
                break;
            case "raphael":
                var name = "Raphael";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Raphael";
                var note = "";
                var result1 = "121,038¥ | [Titania](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Titania) (48/Lovers), [Saki Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Saki%20Mitama) (39/Lovers), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers)";
                var result2 = "122,406¥ | [Titania](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Titania) (48/Lovers), [Saki Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Saki%20Mitama) (39/Lovers), [Alp](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Alp) (6/Lovers)";
                var result3 = "126,879¥ | [Titania](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Titania) (48/Lovers), [Saki Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Saki%20Mitama) (39/Lovers), [Tam Lin](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Tam%20Lin) (13/Lovers)";
                var result4 = "133,998¥ | [Titania](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Titania) (48/Lovers), [Saki Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Saki%20Mitama) (39/Lovers), [Narcissus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Narcissus) (20/Lovers)";
                var result5 = "141,022¥ | [Yaksini](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yaksini) (50/Empress), [Kingu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kingu) (46/Emperor)";
                break;
            case "cybele":
                var name = "Cybele";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Cybele";
                var note = "Requires the Lovers Social Link to be maxed out!";
                var result1 = "183,210¥ | [Raphael](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Raphael) (61/Lovers), [Titania](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Titania) (48/Lovers), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers)";
                var result2 = "184,578¥ | [Raphael](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Raphael) (61/Lovers), [Titania](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Titania) (48/Lovers), [Alp](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Alp) (6/Lovers)";
                var result3 = "189,051¥ | [Raphael](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Raphael) (61/Lovers), [Titania](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Titania) (48/Lovers), [Tam Lin](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Tam%20Lin) (13/Lovers)";
                var result4 = "196,170¥ | [Raphael](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Raphael) (61/Lovers), [Titania](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Titania) (48/Lovers), [Narcissus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Narcissus) (20/Lovers)";
                var result5 = "205,935¥ | [Raphael](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Raphael) (61/Lovers), [Titania](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Titania) (48/Lovers), [Queen Mab](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Queen%20Mab) (27/Lovers)";
                break;

            //chariot arcana
            case "ara_mitama":
                var name = "Ara Mitama";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ara%20Mitama";
                var note = "";
                var result1 = "5,590¥ | [Angel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Angel) (4/Justice), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers)";
                var result2 = "6,652¥ | [Forneus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Forneus) (7/Emperor), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result3 = "6,859¥ | [Forneus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Forneus) (7/Emperor), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers)";
                var result4 = "6,958¥ | [Alp](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Alp) (6/Lovers), [Angel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Angel) (4/Justice)";
                var result5 = "7,120¥ | [Omoikane](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Omoikane) (7/Hierophant), [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess)";
                break;
            case "chimera":
                var name = "Chimera";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Chimera";
                var note = "";
                var result1 = "8,227¥ | [Forneus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Forneus) (7/Emperor), [Alp](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Alp) (6/Lovers)";
                var result2 = "8,614¥ | [Archangel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Archangel) (10/Justice), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers)";
                var result3 = "8,704¥ | [Forneus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Forneus) (7/Emperor), [Omoikane](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Omoikane) (7/Hierophant)";
                var result4 = "8,920¥ | [Yomotsu Shikome](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yomotsu%20Shikome) (9/Hermit), [Nekomata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nekomata) (5/Magician)";
                var result5 = "9,159¥ | [Omoikane](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Omoikane) (7/Hierophant), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                break;
            case "zouchouten":
                var name = "Zouchouten";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Zouchouten";
                var note = "";
                var result1 = "10,734¥ | [Omoikane](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Omoikane) (7/Hierophant), [Ara Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ara%20Mitama) (6/Chariot), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers)";
                var result2 = "10,887¥ | [Forneus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Forneus) (7/Emperor), [Nekomata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nekomata) (5/Magician), [Angel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Angel) (4/Justice)";
                var result3 = "11,058¥ | [Chimera](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Chimera) (9/Chariot), [Angel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Angel) (4/Justice), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers)";
                var result4 = "11,152¥ | [Unicorn](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Unicorn) (11/Priestess), [Omoikane](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Omoikane) (7/Hierophant)";
                var result5 = "11,220¥ | [Yomotsu Shikome](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yomotsu%20Shikome) (9/Hermit), [Nekomata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nekomata) (5/Magician), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                break;
            case "ares":
                var name = "Ares";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ares";
                var note = "";
                var result1 = "18,375¥ | [Valkyrie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Valkyrie) (11/Strength), [Archangel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Archangel) (10/Justice), [Yomotsu Shikome](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yomotsu%20Shikome) (9/Hermit)";
                var result2 = "18,460¥ | [Oberon](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Oberon) (15/Emperor), [Berith](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Berith) (13/Hierophant)";
                var result3 = "18,460¥ | [Oberon](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Oberon) (15/Emperor), [Tam Lin](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Tam%20Lin) (13/Lovers)";
                var result4 = "18,699¥ | [Slime](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Slime) (12/Fool), [Unicorn](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Unicorn) (11/Priestess), [Forneus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Forneus) (7/Emperor)";
                var result5 = "18,807¥ | [Berith](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Berith) (13/Hierophant), [Inugami](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Inugami) (10/Hanged Man), [Forneus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Forneus) (7/Emperor)";
                break;
            case "oumitsunu":
                var name = "Oumitsunu";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Oumitsunu";
                var note = "";
                var result1 = "27,366¥ | [Ares](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ares) (19/Chariot), [Zouchouten](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Zouchouten) (14/Chariot), [Ara Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ara%20Mitama) (6/Chariot)";
                var result2 = "28,959¥ | [Ares](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ares) (19/Chariot), [Zouchouten](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Zouchouten) (14/Chariot), [Chimera](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Chimera) (9/Chariot)";
                var result3 = "29,440¥ | [Empusa](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Empusa) (23/Fortune), [Gurr](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Gurr) (15/Moon)";
                var result4 = "30,390¥ | [Rakshasa](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Rakshasa) (16/Strength), [Gurr](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Gurr) (15/Moon), [Pyro Jack](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pyro%20Jack) (14/Magician)";
                var result5 = "30,390¥ | [Principality](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Principality) (16/Justice), [Gurr](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Gurr) (15/Moon), [Zouchouten](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Zouchouten) (14/Chariot)";
                break;
            case "nata_taishi":
                var name = "Nata Taishi";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nata%20Taishi";
                var note = "Requires an item from an Elizabeth request.";
                var result1 = "43,305¥ | [Oumitsunu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Oumitsunu) (30/Chariot), [Zouchouten](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Zouchouten) (14/Chariot), [Ara Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ara%20Mitama) (6/Chariot)";
                var result2 = "44,898¥ | [Oumitsunu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Oumitsunu) (30/Chariot), [Zouchouten](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Zouchouten) (14/Chariot), [Chimera](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Chimera) (9/Chariot)";
                var result3 = "48,390¥ | [Oumitsunu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Oumitsunu) (30/Chariot), [Ares](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ares) (19/Chariot), [Ara Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ara%20Mitama) (6/Chariot)";
                var result4 = "49,983¥ | [Oumitsunu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Oumitsunu) (30/Chariot), [Ares](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ares) (19/Chariot), [Chimera](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Chimera) (9/Chariot)";
                var result5 = "53,718¥ | [Oumitsunu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Oumitsunu) (30/Chariot), [Ares](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ares) (19/Chariot), [Zouchouten](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Zouchouten) (14/Chariot)";
                break;
            case "koumokuten":
                var name = "Koumokuten";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Koumokuten";
                var note = "";
                var result1 = "77,874¥ | [Nata Taishi](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nata%20Taishi) (37/Chariot), [Oumitsunu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Oumitsunu) (30/Chariot), [Ara Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ara%20Mitama) (6/Chariot)";
                var result2 = "79,467¥ | [Nata Taishi](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nata%20Taishi) (37/Chariot), [Oumitsunu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Oumitsunu) (30/Chariot), [Chimera](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Chimera) (9/Chariot)";
                var result3 = "83,202¥ | [Nata Taishi](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nata%20Taishi) (37/Chariot), [Oumitsunu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Oumitsunu) (30/Chariot), [Zouchouten](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Zouchouten) (14/Chariot)";
                var result4 = "88,287¥ | [Nata Taishi](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nata%20Taishi) (37/Chariot), [Oumitsunu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Oumitsunu) (30/Chariot), [Ares](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ares) (19/Chariot)";
                var result5 = "89,803¥ | [Saki Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Saki%20Mitama) (39/Lovers), [Raja Naga](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Raja%20Naga) (36/Emperor)";
                break;
            case "thor":
                var name = "Thor";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Thor";
                var note = "Requires the Chariot Social Link to be maxed out!";
                var result1 = "105,135¥ | [Koumokuten](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Koumokuten) (43/Chariot), [Nata Taishi](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nata%20Taishi) (37/Chariot), [Ara Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ara%20Mitama) (6/Chariot)";
                var result2 = "106,728¥ | [Koumokuten](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Koumokuten) (43/Chariot), [Nata Taishi](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nata%20Taishi) (37/Chariot), [Chimera](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Chimera) (9/Chariot)";
                var result3 = "110,463¥ | [Koumokuten](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Koumokuten) (43/Chariot), [Nata Taishi](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nata%20Taishi) (37/Chariot), [Zouchouten](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Zouchouten) (14/Chariot)";
                var result4 = "115,548¥ | [Koumokuten](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Koumokuten) (43/Chariot), [Nata Taishi](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nata%20Taishi) (37/Chariot), [Ares](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ares) (19/Chariot)";
                var result5 = "116,326¥ | [Dionysus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Dionysus) (48/Moon), [Clotho](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Clotho) (38/Fortune)";
                break;

            //justice arcana
            case "angel":
                var name = "Angel";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Angel";
                var note = "";
                var result1 = "5,068¥ | [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result2 = "17,182¥ | [Principality](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Principality) (16/Justice), [Archangel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Archangel) (10/Justice)";
                var result3 = "No Result.";
                var result4 = "No Result.";
                var result5 = "No Result.";
                break;
            case "archangel":
                var name = "Archangel";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Archangel";
                var note = "";
                var result1 = "7,120¥ | [Forneus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Forneus) (7/Emperor), [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess)";
                var result2 = "7,975¥ | [Yomotsu Shikome](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yomotsu%20Shikome) (9/Hermit), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers)";
                var result3 = "8,151¥ | [Angel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Angel) (4/Justice), [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result4 = "8,227¥ | [Omoikane](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Omoikane) (7/Hierophant), [Ara Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ara%20Mitama) (6/Chariot)";
                var result5 = "9,100¥ | [Unicorn](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Unicorn) (11/Priestess), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                break;
            case "principality":
                var name = "Principality";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Principality";
                var note = "";
                var result1 = "11,787¥ | [Forneus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Forneus) (7/Emperor), [Omoikane](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Omoikane) (7/Hierophant), [Angel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Angel) (4/Justice)";
                var result2 = "12,268¥ | [Valkyrie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Valkyrie) (11/Strength), [Chimera](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Chimera) (9/Chariot)";
                var result3 = "12,795¥ | [Chimera](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Chimera) (9/Chariot), [Alp](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Alp) (6/Lovers), [Nekomata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nekomata) (5/Magician)";
                var result4 = "12,858¥ | [Chimera](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Chimera) (9/Chariot), [Jack Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jack%20Frost) (8/Magician), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers)";
                var result5 = "12,858¥ | [Chimera](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Chimera) (9/Chariot), [Lilim](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Lilim) (8/Devil), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers)";
                break;
            case "power":
                var name = "Power";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Power";
                var note = "";
                var result1 = "22,636¥ | [Ares](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ares) (19/Chariot), [Berith](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Berith) (13/Hierophant)";
                var result2 = "23,019¥ | [Zouchouten](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Zouchouten) (14/Chariot), [Tam Lin](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Tam%20Lin) (13/Lovers), [Chimera](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Chimera) (9/Chariot)";
                var result3 = "23,343¥ | [Principality](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Principality) (16/Justice), [Valkyrie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Valkyrie) (11/Strength), [Chimera](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Chimera) (9/Chariot)";
                var result4 = "23,775¥ | [Rakshasa](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Rakshasa) (16/Strength), [Berith](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Berith) (13/Hierophant), [Forneus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Forneus) (7/Emperor)";
                var result5 = "23,775¥ | [Rakshasa](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Rakshasa) (16/Strength), [Tam Lin](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Tam%20Lin) (13/Lovers), [Forneus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Forneus) (7/Emperor)";
                break;
            case "virtue":
                var name = "Virtue";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Virtue";
                var note = "";
                var result1 = "36,330¥ | [Power](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Power) (25/Justice), [Principality](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Principality) (16/Justice), [Angel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Angel) (4/Justice)";
                var result2 = "39,354¥ | [Power](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Power) (25/Justice), [Principality](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Principality) (16/Justice), [Archangel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Archangel) (10/Justice)";
                var result3 = "45,955¥ | [Sarasvati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Sarasvati) (27/Priestess), [Take-mikazuchi](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Take-mikazuchi) (24/Emperor)";
                var result4 = "46,495¥ | [Kusi Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kusi%20Mitama) (29/Fortune), [Legion](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Legion) (22/Fool)";
                var result5 = "46,927¥ | [King Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/King%20Frost) (30/Emperor), [High Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/High%20Pixie) (21/Priestess)";
                break;
            case "dominion":
                var name = "Dominion";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Dominion";
                var note = "";
                var result1 = "59,082¥ | [Virtue](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Virtue) (32/Justice), [Power](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Power) (25/Justice), [Angel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Angel) (4/Justice)";
                var result2 = "62,106¥ | [Virtue](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Virtue) (32/Justice), [Power](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Power) (25/Justice), [Archangel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Archangel) (10/Justice)";
                var result3 = "67,074¥ | [Virtue](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Virtue) (32/Justice), [Power](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Power) (25/Justice), [Principality](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Principality) (16/Justice)";
                var result4 = "68,518¥ | [Raja Naga](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Raja%20Naga) (36/Emperor), [Setanta](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Setanta) (28/Star)";
                var result5 = "69,859¥ | [Ganga](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ganga) (35/Priestess), [King Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/King%20Frost) (30/Emperor)";
                break;
            case "throne":
                var name = "Throne";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Throne";
                var note = "";
                var result1 = "91,977¥ | [Dominion](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Dominion) (42/Justice), [Virtue](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Virtue) (32/Justice), [Angel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Angel) (4/Justice)";
                var result2 = "95,001¥ | [Dominion](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Dominion) (42/Justice), [Virtue](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Virtue) (32/Justice), [Archangel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Archangel) (10/Justice)";
                var result3 = "99,969¥ | [Dominion](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Dominion) (42/Justice), [Virtue](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Virtue) (32/Justice), [Principality](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Principality) (16/Justice)";
                var result4 = "110,188¥ | [Koumokuten](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Koumokuten) (43/Chariot), [Thoth](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Thoth) (41/Hierophant)";
                var result5 = "111,066¥ | [Dominion](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Dominion) (42/Justice), [Virtue](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Virtue) (32/Justice), [Power](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Power) (25/Justice)";
                break;
            case "melchizedek":
                var name = "Melchizedek";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Melchizedek";
                var note = "Requires the Justice Social Link to be maxed out!";
                var result1 = "136,950¥ | [Throne](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Throne) (51/Justice), [Dominion](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Dominion) (42/Justice), [Angel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Angel) (4/Justice)";
                var result2 = "139,974¥ | [Throne](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Throne) (51/Justice), [Dominion](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Dominion) (42/Justice), [Archangel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Archangel) (10/Justice)";
                var result3 = "144,942¥ | [Throne](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Throne) (51/Justice), [Dominion](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Dominion) (42/Justice), [Principality](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Principality) (16/Justice)";
                var result4 = "156,039¥ | [Throne](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Throne) (51/Justice), [Dominion](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Dominion) (42/Justice), [Power](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Power) (25/Justice)";
                var result5 = "157,816¥ | [Kikuri-hime](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kikuri-hime) (53/Priestess), [Kaiwan](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kaiwan) (49/Star)";
                break;

            //hermit arcana
            case "yomotsu_shikome":
                var name = "Yomotsu Shikome";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yomotsu%20Shikome";
                var note = "";
                var result1 = "6,652¥ | [Omoikane](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Omoikane) (7/Hierophant), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result2 = "7,183¥ | [Lilim](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Lilim) (8/Devil), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result3 = "7,804¥ | [Omoikane](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Omoikane) (7/Hierophant), [Nekomata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nekomata) (5/Magician)";
                var result4 = "8,227¥ | [Forneus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Forneus) (7/Emperor), [Ara Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ara%20Mitama) (6/Chariot)";
                var result5 = "8,614¥ | [Inugami](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Inugami) (10/Hanged Man), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers)";
                break;
            case "naga":
                var name = "Naga";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Naga";
                var note = "";
                var result1 = "10,995¥ | [Omoikane](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Omoikane) (7/Hierophant), [Alp](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Alp) (6/Lovers), [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess)";
                var result2 = "10,995¥ | [Omoikane](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Omoikane) (7/Hierophant), [Ara Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ara%20Mitama) (6/Chariot), [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess)";
                var result3 = "11,310¥ | [Omoikane](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Omoikane) (7/Hierophant), [Ara Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ara%20Mitama) (6/Chariot), [Angel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Angel) (4/Justice)";
                var result4 = "11,418¥ | [Jack Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jack%20Frost) (8/Magician), [Nekomata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nekomata) (5/Magician), [Angel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Angel) (4/Justice)";
                var result5 = "11,490¥ | [Inugami](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Inugami) (10/Hanged Man), [Angel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Angel) (4/Justice), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                break;
            case "lamia":
                var name = "Lamia";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Lamia";
                var note = "";
                var result1 = "24,400¥ | [Ares](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ares) (19/Chariot), [Oberon](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Oberon) (15/Emperor)";
                var result2 = "25,048¥ | [Take-minakata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Take-minakata) (21/Hanged Man), [Tam Lin](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Tam%20Lin) (13/Lovers)";
                var result3 = "25,692¥ | [Naga](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Naga) (17/Hermit), [Unicorn](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Unicorn) (11/Priestess), [Valkyrie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Valkyrie) (11/Strength)";
                var result4 = "25,908¥ | [Fortuna](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Fortuna) (17/Fortune), [Berith](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Berith) (13/Hierophant), [Yomotsu Shikome](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yomotsu%20Shikome) (9/Hermit)";
                var result5 = "26,128¥ | [Titan](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Titan) (23/Strength), [Unicorn](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Unicorn) (11/Priestess)";
                break;
            case "mothman":
                var name = "Mothman";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Mothman";
                var note = "";
                var result1 = "44,560¥ | [Sarasvati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Sarasvati) (27/Priestess), [Titan](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Titan) (23/Strength)";
                var result2 = "45,208¥ | [Jikokuten](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jikokuten) (29/Strength), [High Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/High%20Pixie) (21/Priestess)";
                var result3 = "45,208¥ | [Jikokuten](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jikokuten) (29/Strength), [Take-minakata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Take-minakata) (21/Hanged Man)";
                var result4 = "46,171¥ | [Orthrus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orthrus) (28/Hanged Man), [Titan](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Titan) (23/Strength)";
                var result5 = "46,927¥ | [King Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/King%20Frost) (30/Emperor), [Take-minakata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Take-minakata) (21/Hanged Man)";
                break;
            case "taraka":
                var name = "Taraka";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Taraka";
                var note = "";
                var result1 = "61,467¥ | [Mothman](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Mothman) (32/Hermit), [Lamia](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Lamia) (25/Hermit), [Yomotsu Shikome](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yomotsu%20Shikome) (9/Hermit)";
                var result2 = "68,091¥ | [Mothman](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Mothman) (32/Hermit), [Lamia](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Lamia) (25/Hermit), [Naga](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Naga) (17/Hermit)";
                var result3 = "68,140¥ | [Ganga](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ganga) (35/Priestess), [Jikokuten](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jikokuten) (29/Strength)";
                var result4 = "68,518¥ | [Raja Naga](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Raja%20Naga) (36/Emperor), [Othrus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orthrus) (28/Hanged Man)";
                var result5 = "69,004¥ | [Hanuman](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hanuman) (37/Strength), [Sarasvati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Sarasvati) (27/Priestess)";
                break;
            case "kurama_tengu":
                var name = "Kurama Tengu";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kurama%20Tengu";
                var note = "";
                var result1 = "85,218¥ | [Taraka](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Taraka) (38/Hermit), [Mothman](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Mothman) (32/Hermit), [Yomotsu Shikome](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yomotsu%20Shikome) (9/Hermit)";
                var result2 = "91,842¥ | [Tarake](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Taraka) (38/Hermit), [Mothman](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Mothman) (32/Hermit), [Naga](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Naga) (17/Hermit)";
                var result3 = "94,051¥ | [Saki Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Saki%20Mitama) (39/Lovers), [Vasuki](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Vasuki) (38/Hanged Man)";
                var result4 = "95,131¥ | [Succubus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Succubus) (43/Devil), [Black Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Black%20Frost) (34/Fool)";
                var result5 = "95,302¥ | [Kingu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kingu) (46/Emperor), [Oumitsunu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Oumitsunu) (30/Chariot)";
                break;
            case "nebiros":
                var name = "Nebiros";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nebiros";
                var note = "Requires an item from one of Elizabeth's requests!";
                var result1 = "111,354¥ | [Kurama Tengu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kurama%20Tengu) (44/Hermit), [Taraka](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Taraka) (38/Hermit), [Yomotsu Shikome](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yomotsu%20Shikome) (9/Hermit)";
                var result2 = "117,978¥ | [Kurama Tengu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kurama%20Tengu) (44/Hermit), [Taraka](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Taraka) (38/Hermit), [Naga](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Naga) (17/Hermit)";
                var result3 = "122,563¥ | [Kingu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kingu) (46/Emperor), [Koumokuten](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Koumokuten) (43/Chariot)";
                var result4 = "125,479¥ | [Barong](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Barong) (52/Emperor), [Nata Taishi](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nata%20Taishi) (37/Chariot)";
                var result5 = "126,343¥ | [Thor](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Thor) (53/Chariot), [Raja Naga](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Raja%20Naga) (36/Emperor)";
                break;
            case "kumbhanda":
                var name = "Kumbhanda";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kumbhanda";
                var note = "";
                var result1 = "141,378¥ | [Nebiros](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nebiros) (50/Hermit), [Kurama Tengu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kurama%20Tengu) (44/Hermit), [Yomotsu Shikome](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yomotsu%20Shikome) (9/Hermit)";
                var result2 = "148,002¥ | [Nebitos](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nebiros) (50/Hermit), [Kurama Tengu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kurama%20Tengu) (44/Hermit), [Naga](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Naga) (17/Hermit)";
                var result3 = "152,110¥ | [Barong](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Barong) (52/Emperor), [Ubelluris](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ubelluris) (48/Hanged Man)";
                var result4 = "152,758¥ | [Hecatoncheires](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hecatoncheires) (54/Hanged Man), [Kingu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kingu) (46/Emperor)";
                var result5 = "152,758¥ | [Hecatoncheires](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hecatoncheires) (54/Hanged Man), [Narashima](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Narasimha) (46/Strength)`";
                break;
            case "arahabaki":
                var name = "Arahabaki";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Arahabaki";
                var note = "Requires the Hermit Social Link to be maxed out!";
                var result1 = "165,683¥ | [Kikuri-hime](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kikuri-hime) (53/Priestess), [Okuninushi](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Okuninushi) (44/Temperance), [Take-minakata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Take-minakata) (21/Hanged Man), [Omoikane](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Omoikane) (7/Hierophant)";
                var result2 = "No Result.";
                var result3 = "No Result.";
                var result4 = "No Result.";
                var result5 = "No Result.";
                break;

            //fortune arcana
            case "fortuna":
                var name = "Fortuna";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Fortuna";
                var note = "";
                var result1 = "9,982¥ | [Inugami](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Inugami) (10/Hanged Man), [Ara Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ara%20Mitama) (6/Chariot)";
                var result2 = "11,575¥ | [Inguami](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Inugami) (10/Hanged Man), [Chimera](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Chimera) (9/Chariot)";
                var result3 = "11,575¥ | [Inugami](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Inugami) (10/Hanged Man), [Yomotsu Shikome](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yomotsu%20Shikome) (9/Hermit)";
                var result4 = "11,683¥ | [Valkyrie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Valkyrie) (11/Strength), [Lilim](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Lilim) (8/Devil)";
                var result5 = "11,697¥ | [Inugami](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Inugami) (10/Hanged Man), [Angel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Angel) (4/Justice), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers)";
                break;
            case "empusa":
                var name = "Empusa";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Empusa";
                var note = "Requires an item from one of Elizabeth's requests!";
                var result1 = "24,238¥ | [Mokoi](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Mokoi) (18/Devil), [Rakshasa](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Rakshasa) (16/Strength)";
                var result2 = "24,400¥ | [Ares](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ares) (19/Chariot), [Gurr](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Gurr) (15/Moon)";
                var result3 = "25,260¥ | [Gurr](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Gurr) (15/Moon), [Tam Lin](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Tam%20Lin) (13/Lovers), [Unicorn](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Unicorn) (11/Priestess)";
                var result4 = "25,260¥ | [Gurr](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Gurr) (15/Moon), [Berith](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Berith) (13/Hierophant), [Unicorn](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Unicorn) (11/Priestess)";
                var result5 = "25,422¥ | [Gurr](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Gurr) (15/Moon), [Zouchouten](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Zouchouten) (14/Chariot), [Archangel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Archangel) (10/Justice)";
                break;
            case "kusi_mitama":
                var name = "Kusi Mitama";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kusi%20Mitama";
                var note = "";
                var result1 = "38,872¥ | [Lamia](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Lamia) (25/Hermit), [Take-minakata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Take-minakata) (21/Hanged Man)";
                var result2 = "40,051¥ | [Vetala](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Vetala) (24/Devil), [Titan](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Titan) (23/Strength)";
                var result3 = "40,600¥ | [Jikokuten](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jikokuten) (29/Strength), [Naga](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Naga) (17/Hermit)";
                var result4 = "41,131¥ | [Orthrus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orthrus) (28/Hanged Man), [Ares](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ares) (19/Chariot)";
                var result5 = "41,500¥ | [Lamia](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Lamia) (25/Hermit), [Titan](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Titan) (23/Strength)";
                break;
            case "clotho":
                var name = "Clotho";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Clotho";
                var note = "";
                var result1 = "57,070¥ | [Oumitsunu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Oumitsunu) (30/Chariot), [Orthrus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orthrus) (28/Hanged Man)";
                var result2 = "60,472¥ | [Nata Taishi](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nata%20Taishi) (37/Chariot), [Take-minakata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Take-minakata) (21/Hanged Man)";
                var result3 = "60,670¥ | [Mothman](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Mothman) (32/Hermit), [Orthrus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orthrus) (28/Hanged Man)";
                var result4 = "60,940¥ | [Leanan Sidhe](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Leanan%20Sidhe) (33/Empress), [Queen Mab](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Queen%20Mab) (27/Lovers)";
                var result5 = "61,318¥ | [Black Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Black%20Frost) (34/Fool), [Yamatano-orochi](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yamatano-orochi) (26/Moon)";
                break;
            case "lachesis":
                var name = "Lachesis";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Lachesis";
                var note = "";
                var result1 = "86,523¥ | [Clotho](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Clotho) (38/Fortune), [Kusi Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kusi%20Mitama) (29/Fortune), [Fortuna](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Fortuna) (17/Fortune)";
                var result2 = "91,846¥ | [Taraka](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Taraka) (38/Hermit), [Vasuki](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Vasuki) (38/Hanged Man)";
                var result3 = "92,710¥ | [Girimehkala](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Girimehkala) (42/Moon), [Black Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Black%20Frost) (34/Fool)";
                var result4 = "93,759¥ | [Clotho](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Clotho) (38/Fortune), [Kusi Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kusi%20Mitama) (29/Fortune), [Empusa](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Empusa) (23/Fortune)";
                var result5 = "95,671¥ | [Ose](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ose) (44/Fool), [Leanan Sidhe](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Leanan%20Sidhe) (33/Empress)";
                break;
            case "atropos":
                var name = "Atropos";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Atropos";
                var note = "";
                var result1 = "120,507¥ | [Lachesis](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Lachesis) (45/Fortune), [Clotho](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Clotho) (38/Fortune), [Fortuna](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Fortuna) (17/Fortune)";
                var result2 = "125,038¥ | [Narashima](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Narasimha) (46/Strength), [Kurama Tengu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kurama%20Tengu) (44/Hermit)";
                var result3 = "127,743¥ | [Lachesis](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Lachesis) (45/Fortune), [Clotho](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Clotho) (38/Fortune), [Empusa](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Empusa) (23/Fortune)";
                var result4 = "127,891¥ | [Ubelluris](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ubelluris) (48/Hanged Man), [Koumokuten](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Koumokuten) (43/Chariot)";
                var result5 = "127,891¥ | [Dionysus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Dionysus) (48/Moon), [Koumokuten](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Koumokuten) (43/Chariot)";
                break;
            case "norn":
                var name = "Norn";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Norn";
                var note = "Requires the Fortune Social Link to be maxed out!";
                var result1 = "196,098¥ | [Atropos](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Atropos) (54/Fortune), [Lachesis](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Lachesis) (45/Fortune), [Clotho](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Clotho) (38/Fortune)";
                var result2 = "No Result.";
                var result3 = "No Result.";
                var result4 = "No Result.";
                var result5 = "No Result.";
                break;

            //strength arcana
            case "valkyrie":
                var name = "Valkyrie";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Valkyrie";
                var note = "";
                var result1 = "7,390¥ | [Lilim](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Lilim) (8/Devil), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers)";
                var result2 = "8,236¥ | [Yomotsu Shikome](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yomotsu%20Shikome) (9/Hermit), [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess)";
                var result3 = "8,758¥ | [Lilim](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Lilim) (8/Devil), [Alp](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Alp) (6/Lovers)";
                var result4 = "8,875¥ | [Inugami](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Inugami) (10/Hanged Man), [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess)";
                var result5 = "9,258¥ | [Ara Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ara%20Mitama) (6/Chariot), [Angel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Angel) (4/Justice), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                break;
            case "rakshasa":
                var name = "Rakshasa";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Rakshasa";
                var note = "";
                var result1 = "13,695¥ | [Yomotsu Shikome](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yomotsu%20Shikome) (9/Hermit), [Omoikane](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Omoikane) (7/Hierophant), [Ara Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ara%20Mitama) (6/Chariot)";
                var result2 = "13,911¥ | [Archangel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Archangel) (10/Justice), [Omoikane](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Omoikane) (7/Hierophant), [Nekomata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nekomata) (5/Magician)";
                var result3 = "14,082¥ | [Nigi Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nigi%20Mitama) (12/Temperance), [Nekomata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nekomata) (5/Magician), [Angel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Angel) (4/Justice)";
                var result4 = "14,190¥ | [Valkyrie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Valkyrie) (11/Strength), [Lilim](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Lilim) (8/Devil), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers)";
                var result5 = "14,334¥ | [Archangel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Archangel) (10/Justice), [Forneus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Forneus) (7/Emperor), [Ara Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ara%20Mitama) (6/Chariot)";
                break;
            case "titan":
                var name = "Titan";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Titan";
                var note = "";
                var result1 = "22,204¥ | [Naga](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Naga) (17/Hermit), [Oberon](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Oberon) (15/Emperor)";
                var result2 = "22,857¥ | [Zouchouten](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Zouchouten) (14/Chariot), [Slime](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Slime) (12/Fool), [Archangel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Archangel) (10/Justice)";
                var result3 = "23,019¥ | [Oberon](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Oberon) (15/Emperor), [Unicorn](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Unicorn) (11/Priestess), [Archangel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Archangel) (10/Justice)";
                var result4 = "23,343¥ | [Rakshasa](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Rakshasa) (16/Strength), [Unicorn](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Unicorn) (11/Priestess), [Yomotsu Shikome](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yomotsu%20Shikome) (9/Hermit)";
                var result5 = "23,500¥ | [Take-minakata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Take-minakata) (21/Hanged Man), [Unicorn](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Unicorn) (11/Priestess)";
                break;
            case "jikokuten":
                var name = "Jikokuten";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jikokuten";
                var note = "";
                var result1 = "38,710¥ | [Pale Rider](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pale%20Rider) (24/Death), [Legion](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Legion) (22/Fool)";
                var result2 = "38,872¥ | [Lamia](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Lamia) (25/Hermit), [High Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/High%20Pixie) (21/Priestess)";
                var result3 = "41,131¥ | [Orthrus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orthrus) (28/Hanged Man), [Neko Shogun](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Neko%20Shogun) (19/Star)";
                var result4 = "41,662¥ | [Shiisaa](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Shiisaa) (26/Hierophant), [Mithra](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Mithra) (22/Temperance)";
                var result5 = "41,932¥ | [Sarasvati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Sarasvati) (27/Priestess), [Take-minakata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Take-minakata) (21/Hierophant)";
                break;
            case "hanuman":
                var name = "Hanuman";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hanuman";
                var note = "";
                var result1 = "54,636¥ | [Jikokuten](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jikokuten) (29/Strength), [Titan](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Titan) (23/Strength), [Valkyrie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Valkyrie) (11/Strength)";
                var result2 = "58,366¥ | [Black Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Black%20Frost) (34/Fool), [Pale Rider](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pale%20Rider) (24/Death)";
                var result3 = "58,735¥ | [Oumitsunu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Oumitsunu) (30/Chariot), [Kusi Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kusi%20Mitama) (29/Fortune)";
                var result4 = "58,911¥ | [Jikokuten](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jikokuten) (29/Strength), [Titan](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Titan) (23/Strength), [Rakshasa](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Rakshasa) (16/Strength)";
                var result5 = "59,059¥ | [Mothman](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Mothman) (32/Hermit), [Sarasvati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Sarasvati) (27/Priestess)";
                break;
            case "narasimha":
                var name = "Narasimha";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Narasimha";
                var note = "";
                var result1 = "74,175¥ | [Hanuman](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hanuman) (37/Strength), [Titan](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Titan) (23/Strength), [Rakshasa](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Rakshasa) (16/Strength)";
                var result2 = "79,080¥ | [Hanuman](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hanuman) (37/Strength), [Jokokuten](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jikokuten) (29/Strength), [Valkyrie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Valkyrie) (11/Strength)";
                var result3 = "83,355¥ | [Hanuman](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hanuman) (37/Strength), [Jikokuten](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jikokuten) (29/Strength), [Rakshasa](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Rakshasa) (16/Strength)";
                var result4 = "87,598¥ | [Taraka](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Taraka) (38/Hermit), [Raja Naga](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Raja%20Naga) (36/Emperor)";
                var result5 = "89,695¥ | [Clotho](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Clotho) (38/Fortune), [Nata Taishi](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nata%20Taishi) (37/Chariot)";
                break;
            case "kali":
                var name = "Kali";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kali";
                var note = "";
                var result1 = "115,647¥ | [Narasimha](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Narasimha) (46/Strength), [Hanuman](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hanuman) (37/Strength), [Valkyrie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Valkyrie) (11/Strength)";
                var result2 = "119,922¥ | [Narasimha](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Narasimha) (46/Strength), [Hanuman](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hanuman) (37/Strength), [Rakshasa](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Rakshasa) (16/Strength)";
                var result3 = "128,175¥ | [Narasimha](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Narasimha) (46/Strength), [Hanuman](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hanuman) (37/Strength), [Titan](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Titan) (23/Strength)";
                var result4 = "131,500¥ | [Suzaku](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Suzaku) (51/Temperance), [Thoth](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Thoth) (41/Temperance)";
                var result5 = "132,895¥ | [Ubelluris](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ubelluris) (48/Hanged Man), [Lachesis](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Lachesis) (45/Fortune)";
                break;
            case "siegfried":
                var name = "Siegfried";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Siegfried";
                var note = "Requires the Strength Social Link to be maxed out!";
                var result1 = "162,627¥ | [Kali](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kali) (55/Strength), [Narasimha](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Narasimha) (46/Strength), [Valkyrie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Valkyrie) (11/Strength)";
                var result2 = "166,902¥ | [Kali](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kali) (55/Strength), [Narasimha](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Narasimha) (46/Strength), [Rakshasa](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Rakshasa) (16/Strength)";
                var result3 = "175,155¥ | [Kali](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Kali) (55/Strength), [Narasimha](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Narasimha) (46/Strength), [Titan](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Titan) (23/Strength)";
                var result4 = "181,720¥ | [Byakko](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Byakko) (57/Temperance), [Daisoujou](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Daisoujou) (53/Hierophant)";
                var result5 = "184,150¥ | [Norn](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Norn) (63/Fortune), [Ubelluris](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ubelluris) (48/Hanged Man)";
                break;

            //hanged man arcana
            case "inugami":
                var name = "Inugami";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Inugami";
                var note = "";
                var result1 = "8,758¥ | [Lilim](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Lilim) (8/Devil), [Ara Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ara%20Mitama) (6/Chariot)";
                var result2 = "8,943¥ | [Alp](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Alp) (6/Lovers), [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result3 = "9,100¥ | [Valkyrie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Valkyrie) (11/Strength), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result4 = "10,351¥ | [Chimera](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Chimera) (9/Chariot), [Lilim](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Lilim) (8/Devil)";
                var result5 = "10,743¥ | [Yomotsu Shikome](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yomotsu%20Shikome) (9/Hermit), [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers)";
                break;
            case "take_minakata":
                var name = "Take-minakata";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Take-minakata";
                var note = "";
                var result1 = "12,111¥ | [Yomotsu Shikome](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yomotsu%20Shikome) (9/Hermit), [Alp](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Alp) (6/Lovers), [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess)";
                var result2 = "12,111¥ | [Yomotsu Shikome](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yomotsu%20Shikome) (9/Hermit), [Ara Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ara%20Mitama) (6/Chariot), [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess)";
                var result3 = "12,327¥ | [Yomotsu Shikome](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yomotsu%20Shikome) (9/Hermit), [Omoikane](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Omoikane) (7/Hierophant), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers)";
                var result4 = "12,327¥ | [Archangel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Archangel) (10/Justice), [Nekomata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nekomata) (5/Magician), [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestes)";
                var result5 = "12,327¥ | [Yomotsu Shikome](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yomotsu%20Shikome) (9/Hermit), [Forneus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Forneus) (7/Emperor), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers)";
                break;
            case "orthrus":
                var name = "Orthrus";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orthrus";
                var note = "";
                var result1 = "34,750¥ | [Yamatano-orochi](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yamatano-orochi) (26/Moon), [Rakshasa](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Rakshasa) (16/Strength)";
                var result2 = "35,011¥ | [Vetala](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Vetala) (24/Devil), [Ares](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ares) (19/Chariot)";
                var result3 = "36,978¥ | [Hua Po](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hua%20Po) (20/Magician), [Ghoul](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ghoul) (18/Death), [Berith](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Berith) (13/Hierophant)";
                var result4 = "37,302¥ | [Narcissus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Narcissus) (20/Lovers), [Neko Shogun](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Neko%20Shogun) (19/Star), [Slime](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Slime) (12/Fool)";
                var result5 = "37,302¥ | [Mithra](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Mithra) (22/Temperance), [Oberon](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Oberon) (15/Emperor), [Zouchouten](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Zouchouten) (14/Chariot)";
                break;
            case "vasuki":
                var name = "Vasuki";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Vasuki";
                var note = "";
                var result1 = "56,971¥ | [Black Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Black%20Frost) (34/Fool), [Titan](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Titan) (23/Strength)";
                var result2 = "58,735¥ | [King Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/King%20Frost) (30/Emperor), [Jikokuten](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jikokuten) (29/Strength)";
                var result3 = "58,735¥ | [King Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/King%20Frost) (30/Emperor), [Genbu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Genbu) (29/Temperance)";
                var result4 = "59,662¥ | [Raja Naga](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Raja%20Naga) (36/Emperor), [Mithra](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Mithra) (22/Temperance)";
                var result5 = "60,508¥ | [Loa](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Loa) (31/Death), [Jikokuten](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Jikokuten) (29/Strength)";
                break;
            case "ubelluris":
                var name = "Ubelluris";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ubelluris";
                var note = "";
                var result1 = "89,466¥ | [Vasuki](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Vasuki) (38/Hanged Man), [Orthrus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orthrus) (28/Hanged Man), [Take-minakata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Take-minakata) (21/Hanged Man)";
                var result2 = "93,790¥ | [Okuninushi](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Okuninushi) (44/Temperance), [Mothman](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Mothman) (32/Hermit)";
                var result3 = "95,131¥ | [Koumokuten](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Koumokuten) (43/Chariot), [Incubus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Incubus) (34/Devil)";
                var result4 = "95,302¥ | [Narashima](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Narasimha) (46/Strength), [King Frost](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/King%20Frost) (30/Emperor)";
                var result5 = "97,075¥ | [Narashima](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Narasimha) (46/Strength), [Loa](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Loa) (31/Death)";
                break;
            case "hecatoncheires":
                var name = "Hecatoncheires";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hecatoncheires";
                var note = "";
                var result1 = "122,433¥ | [Ubelluris](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ubelluris) (48/Hanged Man), [Vasuki](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Vasuki) (38/Hanged Man), [Inugami](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Inugami) (10/Hanged Man)";
                var result2 = "133,026¥ | [Ubelluris](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ubelluris) (48/Hanged Man), [Vasuki](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Vasuki) (38/Hanged Man), [Take-minakata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Take-minakata) (21/Hanged Man)";
                var result3 = "141,022¥ | [Decarabia](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Decarabia) (50/Fool), [Narashima](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Narasimha) (46/Strength)";
                var result4 = "141,670¥ | [Barong](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Barong) (52/Emperor), [Okuninushi](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Okuninushi) (44/Temperance)";
                var result5 = "142,156¥ | [Thor](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Thor) (53/Chariot), [Succubus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Succubus) (43/Devil)";
                break;
            case "hell_biker":
                var name = "Hell Biker";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hell%20Biker";
                var note = "Requires an item from one of Elizabeth's requests!";
                var result1 = "164,193¥ | [Hecatoncheires](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hecatoncheires) (54/Hanged Man), [Ubelluris](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ubelluris) (48/Hanged Man), [Inugami](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Inugami) (10/Hanged Man)";
                var result2 = "174,786¥ | [Hecatoncheires](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hecatoncheires) (54/Hanged Man), [Ubelluris](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ubelluris) (48/Hanged Man), [Take-minakata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Take-minakata) (21/Hanged Man)";
                var result3 = "175,852¥ | [Odin](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Odin) (57/Emperor), [Suzaku](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Suzaku) (51/Temperance)";
                var result4 = "178,759¥ | [Laksmi](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Laksmi) (57/Empress), [Surt](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Surt) (52/Magician)";
                var result5 = "178,759¥ | [Byakko](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Byakko) (57/Temperance), [Barong](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Barong) (52/Emperor)";
                break;
            case "attis":
                var name = "Attis";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Attis";
                var note = "Requires the Hanged Man Social Link to be maxed out!";
                var result1 = "165,976¥ | [Ubelluris](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ubelluris) (48/Hanged Man), [Vasuki](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Vasuki) (38/Hanged Man), [Orthrus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orthrus) (28/Hanged Man), [Take-minakata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Take-minakata) (21/Hanged Man), [Inugami](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Inugami) (10/Hanged Man)";
                var result2 = "No Result.";
                var result3 = "No Result.";
                var result4 = "No Result.";
                var result5 = "No Result.";
                break;

            //death arcana
            case "ghoul":
                var name = "Ghoul";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ghoul";
                var note = "";
                var result1 = "10,266¥ | [Lilim](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Lilim) (8/Devil), [Angel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Angel) (4/Justice), [Orpheus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orpheus) (1/Fool)";
                var result2 = "10,351¥ | [Yomotsu Shikome](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Yomotsu%20Shikome) (9/Hermit), [Lilim](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Lilim) (8/Devil)";
                var result3 = "10,734¥ | [Lilim](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Lilim) (8/Devil), [Angel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Angel) (4/Justice), [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess)";
                var result4 = "10,999¥ | [Nigi Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nigi%20Mitama) (12/Temperance), [Nekomata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nekomata) (5/Magician)";
                var result5 = "11,103¥ | [Lilim](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Lilim) (8/Devil), [Nekomata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nekomata) (5/Magician), [Apsaras](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Apsaras) (3/Priestess)";
                break;
            case "pale_rider":
                var name = "Pale Rider";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pale%20Rider";
                var note = "Requires an item from one of Elizabeth's requests!";
                var result1 = "27,190¥ | [Mithra](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Mithra) (22/Temperance), [Pyro Jack](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pyro%20Jack) (14/Magician)";
                var result2 = "27,190¥ | [Mithra](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Mithra) (22/Temperance), [Zouchouten](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Zouchouten) (14/Chariot)";
                var result3 = "28,270¥ | [Vetala](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Vetala) (24/Devil), [Nigi Mitama](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nigi%20Mitama) (12/Temperance)";
                var result4 = "28,311¥ | [Naga](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Naga) (17/Hermit), [Oberon](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Oberon) (15/Emperor), [Archangel](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Archangel) (10/Justice)";
                var result5 = "28,743¥ | [Mokoi](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Mokoi) (18/Devil), [Oberon](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Oberon) (15/Emperor), [Chimera](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Chimera) (9/Chariot)";
                break;
            case "loa":
                var name = "Loa";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Loa";
                var note = "";
                var result1 = "42,796¥ | [Genbu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Genbu) (29/Temperance), [Ares](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ares) (19/Chariot)";
                var result2 = "42,895¥ | [Lamia](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Lamia) (25/Hermit), [Vetala](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Vetala) (24/Devil)";
                var result3 = "43,975¥ | [Genbu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Genbu) (29/Temperance), [Hua Po](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hua%20Po) (20/Magician)";
                var result4 = "44,830¥ | [Sati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Sati) (28/Magician), [Mithra](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Mithra) (22/Temperance)";
                var result5 = "46,455¥ | [Take-minakata](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Take-minakata) (21/Hanged Man), [Hua Po](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Hua%20Po) (20/Magician), [Ares](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ares) (19/Chariot)";
                break;
            case "samael":
                var name = "Samael";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Samael";
                var note = "";
                var result1 = "66,151¥ | [Orobas](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Orobas) (34/Magician), [Genbu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Genbu) (29/Temperance)";
                var result2 = "66,151¥ | [Incubus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Incubus) (34/Devil), [Genbu]() (29/Temperance)";
                var result3 = "66,646¥ | [Taraka](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Taraka) (38/Hermit), [Vetala](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Vetala) (24/Devil)";
                var result4 = "68,374¥ | [Rangda](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Rangda) (40/Magician), [Mithra](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Mithra) (22/Temperance)";
                var result5 = "68,518¥ | [Seiryuu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Seiryuu) (36/Temperance), [Sati](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Sati) (28/Magician)";
                break;
            case "mot":
                var name = "Mot";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Mot";
                var note = "";
                var result1 = "88,935¥ | [Samael](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Samael) (37/Death), [Loa](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Loa) (31/Death), [Ghoul](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ghoul) (18/Death)";
                var result2 = "90,190¥ | [Okuninushi](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Okuninushi) (44/Temperance), [Oumitsunu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Oumitsunu) (30/Chariot)";
                var result3 = "91,315¥ | [Succubus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Succubus) (43/Devil), [Mothman](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Mothman) (32/Hermit)";
                var result4 = "92,062¥ | [Rangda](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Rangda) (40/Magician), [Seiryuu](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Seiryuu) (36/Temperance)";
                var result5 = "96,310¥ | [Cu Chulainn](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Cu%20Chulainn) (40/Tower), [Vasuki](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Vasuki) (38/Hanged Man)";
                break;
            case "alice":
                var name = "Alice";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Alice";
                var note = "";
                var result1 = "66,629¥ | [Nata Taishi](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Nata%20Taishi) (37/Chariot), [Narcissus](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Narcissus) (20/Lovers), [Lilim](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Lilim) (8/Devil), [Pixie](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pixie) (2/Lovers)";
                var result2 = "No Result.";
                var result3 = "No Result.";
                var result4 = "No Result.";
                var result5 = "No Result.";
                break;
            case "thanatos":
                var name = "Thanatos";
                var url = "https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Thanatos";
                var note = "Requires the Death Social Link to be maxed out!";
                var result1 = "266,025¥ | [Alice](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Alice) (56/Death), [Mot](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Mot) (45/Death), [Samael](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Samael) (37/Death), [Loa](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Loa) (31/Death), [Pale Rider](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Pale%20Rider) (24/Death), [Ghoul](https://arantius.github.io/persona-fusion-calculator/3portable.html#/persona/Ghoul) (18/Death)";
                var result2 = "No Result.";
                var result3 = "No Result.";
                var result4 = "No Result.";
                var result5 = "No Result.";
                break;

            //temperance arcana
            // case "template":
            //     var name = "";
            //     var url = "";
            //     var note = "";
            //     var result1 = " | []() (), []() (), []() ()";
            //     var result2 = " | []() (), []() (), []() ()";
            //     var result3 = " | []() (), []() (), []() ()";
            //     var result4 = " | []() (), []() (), []() ()";
            //     var result5 = " | []() (), []() (), []() ()";
            //     break;
        }

        //checks if the "name" variable was declared and assigned to a value, if it was then it skips this, if it wasnt, it stops the code and displays this message
        if (!name) return message.reply(`You have entered an invalid Persona name! Type \`${config.prefix}p3pfusion list\` for a list of all valid Persona names!`);

        //creates and sends the embed using the data from above
        let embed = new MessageEmbed()
            .setTitle(name)
            .setURL(url)
            .setColor(config.colors.p3blue)
            .addField("Combination #1", result1)
            .addField("Combination #2", result2)
            .addField("Combination #3", result3)
            .addField("Combination #4", result4)
            .addField("Combination #5", result5)
            .setFooter("Information gathered from Arantius's Persona 3 Portable Fusion Calculator", client.user.avatarURL());

        //checks to see if the "note" variable is defined, if it is, display it, if not, display another thing
        if (note) {
            embed.setDescription(`${note} \n[Report a data error!](${config.servers.discordinvite})`);
        } else {
            embed.setDescription(`[Report a data error!](${config.servers.discordinvite})`);
        }

        //sends the embed to the current channel
        return message.channel.send(embed);
    }
}