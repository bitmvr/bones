#!/usr/bin/env bash

file="${1}"
extension="${file##*.}"
script_path="$(readlink "$(which bones)")"
closet_door="${script_path%/bones}/closet"
skeleton="skeleton.${extension}"

function make_skeleton() {
  cp "${closet_door}/${skeleton}" "${file}"
  chmod +x "${file}"
}

if [ -f "${closet_door}/${skeleton}" ]; then
  make_skeleton
  echo "Skeleton found"
else
  echo "No skeleton found with a '.${extension}' file extension"
fi
