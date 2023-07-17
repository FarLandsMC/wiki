#!/bin/sh

# This is the build script to be run by CI

PATH="$PATH:./" mdbook build
cp ./update.sh book
