# Legacy Codes

Before MiniMessage existed, there was another form of formatting.
These used the `&` and a character to tell what form of formatting you
wanted.

It is generally recommended to use MiniMessage for most things since
they tend to be nicer to use, but for those who already have the legacy
codes memorised, we have kept them in the plugin.

## Colours

> This feature is only enabled for members of the {{#rank adept}} rank
> and above.

| Code | Colour                                            |
| ---- | ------------------------------------------------- |
| &0   | <span style="color: #000000">black        </span> |
| &1   | <span style="color: #0000aa">dark_blue    </span> |
| &2   | <span style="color: #00aa00">dark_green   </span> |
| &3   | <span style="color: #00aaaa">dark_aqua    </span> |
| &4   | <span style="color: #aa0000">dark_red     </span> |
| &5   | <span style="color: #aa00aa">dark_purple  </span> |
| &6   | <span style="color: #ffaa00">gold         </span> |
| &7   | <span style="color: #aaaaaa">gray         </span> |
| &8   | <span style="color: #555555">dark_gray    </span> |
| &9   | <span style="color: #5555ff">blue         </span> |
| &a   | <span style="color: #55ff55">green        </span> |
| &b   | <span style="color: #55ffff">aqua         </span> |
| &c   | <span style="color: #ff5555">red          </span> |
| &d   | <span style="color: #ff55ff">light_purple </span> |
| &e   | <span style="color: #ffff55">yellow       </span> |
| &f   | <span style="color: #ffffff">white        </span> |

> _Note: On FarLands, the `&0` colour code is disabled for accessibility_

### Hex Colours

When hexadecimal colour support was added in 1.16, we added a format on
FarLands to put these codes in chat.

You can use `&#<colour>` to put a colour in chat.  You can also use a 3
character hexadecimal code.  This gets expanded into the full 6
character form: `&#5f7` and `&#55ff77` are equivalent.

> _Note: On FarLands, all very dark hex codes are disabled for accessibility_

## Decoration

> This feature is only enabled for members of the {{#rank adept}} rank
> and above.

| Code | Effect            |
| ---- | ----------------- |
| &k   | obfuscated        |
| &l   | **bold**          |
| &m   | ~~strikethrough~~ |
| &n   | <u>underline</u>  |
| &o   | _italic_          |
| &r   | reset             |

> _Note: On FarLands, the `&k` colour code is disabled for accessibility_
