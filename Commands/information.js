module.exports= {
    name: 'information',
    description: "Information channel message and pictures",
    async execute(message, args) {
        const picturewelcome = ({files: ["./Images/welcome.png"]});
        const textwelcome = ("Created in **June 2021** by a small group of friends with extensive Mythic raiding experience, in **Prismatic** we believe in a combination of a progression oriented mindset and an enjoyable atmosphere to be the foundations of a long-term raiding guild.\n\n" +
        "Our main goal is to bring together a reliable group of players with similar talent and attitude towards raiding. Under an active and dedicated leadership, we aim to bolster our ranks with level-headed and ambitious individuals who strive to push themselves further with every raiding tier while simultaneously looking forward to a fun and relaxed environment every week, even during progression.\n⠀");
        const picturerules = ({files: ["./Images/rules.png"]});
        const textrules = ("• **No offensive messages** — This includes but isn't limited to: racism, sexism, homophobia, hate speech or any other type of abusive content.\n" +
        "• **No spam** — Text, images, links, etc. Disruptive behavior of any kind will not be tolerated. @mentions are allowed but you will be given a warning if it becomes excessive and obnoxious.\n" +
        "• **Use the appropriate channels** — All channel names are very straightforward and should be used for their intended purposes. Use <#854506556247113728> for anything that doesn't fit any of the existing channels or just general conversation.\n" +
        "• **NSFW is not allowed** — As a community server, Discord automatically scans and deletes all media that contains explicit content.\n" +
        "• **If an officer asks you to stop doing something, stop doing it** — There may be specific situations not covered by the rules or times where the rules themselves don't fit the situation. In those particular cases, the officer team will handle it appropriately at their own discretion.\n⠀");
        const picturesocialmedia = ({files: ["./Images/links.png"]});
        const textsocialmedia = ("<:Website:953691934566785065> <https://www.prismaticguild.com>\n" + //website
        "<:Facebook:953691902971088956> https://tinyurl.com/prismatic-facebook\n" + //facebook
        "<:Instagram:953691912173396019> https://www.instagram.com/prismaticguild\n" + //instagram
        "<:Twitter:953691924534022184> https://twitter.com/Prismatic_EU\n" + //twitter
        "<:Youtube:953691946768023652> https://tinyurl.com/prismatic-yt") //youtube
        message.channel.send(picturewelcome);
        setTimeout(function() {
            message.channel.send(textwelcome)
        }, 1000)
        setTimeout(function() {
            message.channel.send(picturerules)
        }, 2000)
        setTimeout(function() {
            message.channel.send(textrules)
        }, 3000)
        setTimeout(function() {
            message.channel.send(picturesocialmedia)
        }, 4000)
        setTimeout(function() {
            message.channel.send(textsocialmedia)
        }, 5000)
    }
};