module.exports= {
    name: 'trialinfo',
    description: "trialinfo text",
    execute(message, args){
        const part1 = ('Hello and welcome to **Prismatic**! Here is some important information you might need during your trial:\n'+
        '• **Our trial period is 3 weeks**. This starts from the first raid you attend, not from the moment you join the guild. About **2 weeks in**, the officer team will have a conversation with you about your performance and whether we are more inclined to pass or extend your trial. This will also be a good opportunity for you to express any concerns or ask any questions you might have regarding your trial or the guild itself.\n\n'+
        '• Sign-ups to raid are done in <#854831306298097694>. To complete the sign-up, you will need to select your role (tank, melee, ranged or healer). The first time, you\'ll also receive a message from the bot itself to select your class. This step won\'t be necessary for any of the following sign-ups unless you change what character you play. There are also options in case you will be late or absent, so always pick the adequate one. In these situations, you must also message one of the officers and let them know of the reason.\n\n' +
        '• The <#819596858078003238> channel is the most important one. We post there frequently so please make sure to keep it unmuted and read everything carefully.\n\n'+
        '• Minimum weekly requirement is **one +15 key**. We obviously encourage people to do as many as possible for the most amount of options in the Great Vault but the absolute minimum is just one. Feel free to use the channel <#854506635744509952> to find people in the guild to run dungeons with! **PvP is not mandatory**.\n\n'+
        '• Any tactic videos, WAs or anything else that might be relevant to a specific fight during progression will be either shared ahead of time in the existing channel for the boss in question or in-game during the raid itself. We also have a small list of mandatory addons that all raiders must have:\n')
        const part2 = ('‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎• **DeadlyBossMods/BigWigs**\n'+
        '‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎• **WeakAuras2**\n'+
        '‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎• **Method Raid Tools**\n'+
        '‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎• **RCLootCouncil**\n\n\n'+
        'If you ever have any questions or concerns, please feel free to just message anyone in the officer team and we will get back to you as soon as possible.')
        message.channel.send(part1);
        setTimeout(function() {
            message.channel.send(part2)
        }, 1000)

    }
}