module.exports= {
    name: 'apply',
    description: "Application channel",
    async execute(message, args){
        const applypicture = ({files: ["./Images/applications.png"]});
        const bulletpoints = ("• We will inform you of our decision within 72 hours.\n" +
        "• Please answer the questions as fully as you can — don't leave anything blank, if it doesn't apply to you just write N/A.\n" +
        "• This is an example of what your application should look like once finished: https://imgur.com/a/HHSxYwl")
        const applytext = ("‎\n" +
        "‎\n" +
        ":arrow_down: Application form (copy and fill in after the asterisks — do not delete the form itself; split into multiple messages if necessary) :arrow_down:\n" +
        "```\n**Personal information:**\n" +
        "• **Age:**\n" +
        "• **Gender:**\n" +
        "• **Country:**\n\n" +
        
        "**Character information:**\n" +
        "• **Character name:**\n" +
        "• **Class:**\n" +
        "• **What spec are you applying as?**\n" +
        "• **Can you play any of your offspecs?**\n" +
        "• **Do you maintain any alts? If so, what classes/specs?**\n" +
        "• **Link your Warcraft Logs:**\n" +
        "• **Link your alts' Warcraft Logs (if any):**\n" +
        "• **Link your Wowprogress:**\n" +
        "• **Provide a screenshot of your UI __in raid combat__ (e.g: https://imgur.com/a/WGASqQj):**\n\n" +
        
        "**Raiding information:**\n" +
        "• **What is your raiding history?**\n" +
        "• **Why are you leaving your current guild?**\n" +
        "• **What are your expectations from the guild?**\n" +
        "• **Is there anyone in our guild that can vouch for you?**\n" +
        "• **Can you maintain close to 100% attendance?**\n" +
        "• **How do you handle criticism?**\n\n" +
        
        "**Extra information:**\n" +
        "• **Is there anything else you'd like to add?**" +
        "```");

        message.channel.send(applypicture);
        setTimeout(function() {
            message.channel.send(bulletpoints)
        }, 1000)
        setTimeout(function() {
            message.channel.send(applytext)
        }, 2000)
    }
}