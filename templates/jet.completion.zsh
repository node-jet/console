alias jet="node jet"

_jet_yargs_completions()
{
  local reply
  local si=$IFS
  IFS=$'
' reply=($(COMP_CWORD="$((CURRENT-1))" COMP_LINE="$BUFFER" COMP_POINT="$CURSOR" node jet --get-yargs-completions "${words[@]}"))
  IFS=$si
  _describe 'values' reply
}
compdef _jet_yargs_completions jet