// This is currently unused, but I'm leaving in in here incase we decide to
// use it in the future.

// Gets the commands in a JSON array
toFile(
    '[' + FL.getCommandHandler().commands.stream().map(cmd => {
        const data = cmd.data();
        return JSON.stringify({
            name: data.name(),
            description: data.description(),
            usage: data.usage(),
            category: data.category().name(),
            aliases: java.lang.String.join(",", data.aliases()),
            rank: data.minimumRank().ordinal(),
        });

    }).collect(java.util.stream.Collectors.joining(',')) + ']'
)
