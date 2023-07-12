# FarLands Wiki

This is the repo which hosts the source for the FarLands Wiki.

To build, you must have both [mdBook](https://github.com/rust-lang/mdBook) and
[mdBook-pagetoc](https://github.com/slowsage/mdbook-pagetoc) installed.

You'll also need to install the `mdbook-fl` preprocessor.  Which you
can either do by cloning the repo and running `cargo install --path .`
or just install from the GitHub page like the CI does: `cargo install
--git ...`

Once you've got those, you can run

```sh
mdbook build
```

To build the book into `book/`

For development, use 

```sh
mdbook serve [-p <port>]
```

to build and serve (with hot reload) on a given port.
