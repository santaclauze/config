alias ll='ls -altr'
alias dc='docker-compose'
alias cport='sudo lsof -i -P -n | grep LISTEN'

# GIT
pl() { git pull origin ${*:-dev}; }
p() { git push origin ${*:-dev}; }
c() { git commit -m "$*"; }
a() { git add "${*:--A}"; }
s() { git status; }

# Docker
dsr() { for container in "$@"; do docker stop "$container" && docker rm "$container"; done; }
alias umd='npx @yeutech/rollup-umd-scripts'

