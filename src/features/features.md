# FarLands Features

Our FarLands plugin contains many very useful features that enhance
gameplay and make server life much more pleasant.

## Bedrock Breaking

This is a feature/bug in Vanilla but has been patched by paper.  To
replace this mechanic, we implemented a method similar to the old 1.12
method of breaking bedrock and end portal frames.

To break a bedrock block, one must drop a dragon egg from the end of a
piston head, as shown below in the GIF.

_Note: You can't break the bottom bedrock in the world using this
method._

![GIF of bedrock breaking](./img/bedrock_breaking.gif)

## Slime Chunk Finder

One can easily find a slime chunk by throwing a slime ball on the
ground!  If it bounces, it's in a slime chunk.

![GIF of slime chunk finder](./img/slime_chunk.gif)

## Invisible Item Frames

Item frames with an item in them can be made invisible by splashing a
potion of invisibility on the item frames.  The frame will then be
invisible until the item is removed.

![GIF of invisible item frames](./img/invis_item_frames.gif)

## Bee Counts

You can see the amount of bees in any Bee Nest or Bee Hive by right
clicking it or picking it up!

![Image of bee count on bee hive](./img/bee_count.png)

## Rail Rotation

Rails are basically impossible to place the correct way on the first try.
On FarLands, you can Shift + Right Click a rail to change its rotation.

![GIF of rail rotation](./img/rail_rotation.gif)

## Unwaxable Signs

One is able to unwax a waxed sign by Shift + Right Clicking on a waxed
sign while holding an axe.

![GIF of unwaxing](./img/unwax_sign.gif)

## Firework Launch

In order to help with flying using the Elytra, you can right click with
a firework rocket on the ground in order to start gliding.  This feature
can be toggled with `/config firework-launch <on|off>`

![GIF of firework launch](./img/firework_launch.gif)

## Leashable Entities

Many entities which are not normally leashable, can be.  These include
Villagers, Turtles, and more!

![GIF of leashable entities](./img/leashable_entities.gif)

## Homes

You can set homes for you to teleport back to!  The number of homes that
you have depends on your rank.  Set a home with `/sethome [name]`, go to
it with `/home [name]`.  You can move a home to your current location
with `/movehome [name]`, or rename a home with `/renamehome <old-name>
<new-name>`.

Your home called `home` is a special home that doesn't need to be
specified for `[name]`.  You can do `/home` to get to your home called
`home`.

Homes can be shared with your friends by using the `/sharehome` command.
Use `/sharehome send <player> <home>` to send a home and use `/sharehome
accept <playername> [home-name]` to accept it and rename it.

If you don't have a home and you sleep in a bed, a home called `home`
will be automatically placed at your new respawn point so you can get
back there.

![GIF of home teleportation](./img/homes.gif)

## Death Compass

A compass can point to your death location in the event of your death so
that you can easily find your items.

Alternatively, the coordinates of you death are printed in the chat and
can be found again with the `/lastdeath` command.

![GIF of death compass](./img/death_compass.gif)

## PTime and PWeather

The `/ptime` and `/pweather` commands can be used to control the time
and weather that the player sees.  This can be useful when building to
see what your build looks like or just because rain is annoying.

## Packages

Send the item you're holding in your hand to your friend with `/package <player> [message]`.

If you don't want to receive packages anymore, you can change your
settings with `/packages <ask|accept|decline>`.

| Option    | Description                                     |
| --------- | ----------------------------------------------- |
| `ask`     | ask you for each package that you receive       |
| `accept`  | [default] accept every package that you receive |
| `decline` | decline every packages that you receive         |
