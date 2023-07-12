# Trusting Players

There are 5 different levels of trust that you can grant a player.

- [Access Trust](#access-trust)
- [Container Trust](#container-trust)
- [Build Trust](#build-trust)
- [Management Trust](#management-trust)
- [Co-Owner](#co-owner)

Be careful who you trust on your claims, if a player griefs a build or
steals items from a claim on which they are trusted, staff will not
punish that player, restore the build, nor return the lost items.  See
[Rule 4](../welcome/rules.md#rule-4) for more information.

Each level of trust (except for co-owner) can be revoked by using the
`/untrust <username>` command.  This will untrust them from all trust
levels. Co-owner can be revoked using the `/removecoowner <username>`
command.

## Access Trust

Access trust can be granted by `/accesstrust <username>` or `/at <username>`.

This trust gives the player the ability to interact with things in the
area.  This includes opening doors, activating pressure plates, animal
interactions, villager trading, etc.

## Container Trust

Container trust can be granted with `/containertrust <username>` or `/ct
<username>`.

This trust level includes all permissions from access trust.

This level grants the player the ability to use containers, such as chests,
hoppers, barrels, etc.

## Build Trust

Build trust can be granted with `/trust <username>`.

This trust level includes all permissions from container trust and access
trust.

This level grants the player the ability to do anything on the claim,
except for manage the claim itself.

## Management Trust

Management trust can be granted with `/managementtrust <username>` or
`/mt <username>`.

This trust level includes all permissions from build trust, container
trust, and access trust.

This level grants the player the ability to change claim toggles and
manage the trust list.  The player is _not_ able to delete your claim or
change its size.

## Co-Owner

Co-Owner can be granted with `/addcoowner <username>` and revoked with
`/removecoowner <username>`.

This player acts exactly the same as the owner.  They can do everything
in the claim, including resizing and subdividing.  They can not delete
the claim.

Be very careful with who you trust at this level.  Players at this level
can do some very serious damage if they have bad intents.

## Trusting the Public

You can trust the public in your claim by using `public` or `*` instead of the
username.  This is not recommended to be done for any level other than
access trust or maybe container trust depending on the situation.

## Trustlist

You can view all players currently trusted in your claim by using the
`/trustlist` command.  This will list each trust level and the players
who are in it.
