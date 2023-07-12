# Packages

> This feature is only enabled for members of the {{#rank knight}} rank
> and higher

Send the item you're holding in your hand to your friend with `/package <player> [message]`.

The message sent with the package can use the [MiniMessage format](../chat/minimessage.md).

## Packages Toggle

If you don't want to receive packages anymore, you can change your
settings with `/packages <ask|accept|decline>`.

| Option    | Description                                     |
| --------- | ----------------------------------------------- |
| `ask`     | ask you for each package that you receive       |
| `accept`  | [default] accept every package that you receive |
| `decline` | decline every packages that you receive         |

## View Pending Package

If your [packages toggle](#packages-toggle) is set to `ask`, then you can
view your pending packages with `/packageview`.  This will show a list
of your pending packages and give you the option to accept or decline
them.
