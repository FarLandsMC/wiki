# Types of Shops

There are three type of shops: `sell`, `buy`, and `barter`.

## Sell Shop

A shop annotated with the `sell` type can be used to sell item in
exchange for diamonds.  This means that your shop needs to be stocked
with the item that you're selling.

If your shop sign is

```
[shop]
  5
  1
 sell
```

then a person who buys from your shop gets 5 items and gives you 1
diamond.

## Buy Shop

A shop annotated with the `buy` type can be used to buy items in
exchange for diamonds.  This means that your shop needs to have
diamonds in the chest.

If your shop sign is

```
[shop]
  2
  4
 buy
```

then a person who sells to your shop gets 4 diamonds and gives you 2
items.

## Barter Shop

A shop annoted with the `barter` type can be used to barter for one item
in exchange for another.  This means that your shop needs to have the
sell item in the chest.

If your shop sign is

```
[shop]
  32
  64
barter
```

where your sell item is sticks and your buy item is bamboo,

then a person who buys from your shop gets 64 bamboo and gives you 32
sticks.
