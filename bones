#!/usr/bin/env bash

file="${1}"
extension="${file##*.}"
closet_door="closet"
skeleton="skeleton.${extension}"

function make_skeleton() {
  cp "${closet_door}/${skeleton}" "${file}"
  chmod +x "${file}"
}

if [ -f "${closet_door}/${skeleton}" ]; then
  make_skeleton
  echo "Skeleton found"
else
  echo "No skeleton found for the file extension (.${extension})"
fi
