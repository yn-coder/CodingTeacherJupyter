#!/bin/bash

# As mentioned in https://github.com/Microsoft/AzureNotebooks/issues/245,
# it looks like nbextensions is a symbolic link to a non-existing directory
# initially
rm -rf /home/nbuser/.local/share/jupyter/nbextensions
mkdir /home/nbuser/.local/share/jupyter/nbextensions

git pull

jupyter nbextension install coding_teacher_ext --user

jupyter nbextension enable coding_teacher_ext/main --section='common' --user