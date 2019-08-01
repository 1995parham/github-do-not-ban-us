#!/bin/bash 

file_msg=GiFE
[[ -f ${file_msg} ]] && {
    less  $file_msg 
}||{
    echo -e "Github is For Everyone" 
}
