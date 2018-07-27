#!/bin/bash

cd ~/library

git pull

jupyter nbextension install coding_teacher_ext --user
jupyter nbextension enable coding_teacher_ext/main --section='common' --user


jupyter nbextension install virtual_teacher_panel --user
jupyter nbextension enable virtual_teacher_panel/main --section='common' --user

jupyter nbextension install cell_help --user
jupyter nbextension enable cell_help/main --section='common' --user
