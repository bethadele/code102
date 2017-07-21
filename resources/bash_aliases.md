## Setting up aliases in bash


1. open a new terminal window, confirm that it is in your home directory by typing `cd`
1. look for the following two (hidden) files in your home directory: `.bashrc` or `.bash_profile`.  If they don't both exist, create them: `touch ~/.bashrc ~/.bash_profile`<sup>2</sup>
1. open the `.bashrc` file with the command `vi ~/.bashrc`
1. press `I` to enter insert mode, and copy the following block into the file:
`[[ -s ~/.bash_aliases ]] && source ~/.bash_aliases`
1. press `esc` to enter command mode, then type `:wq` and press enter to save and exit.
1. open the `.bash_profile` file in the same way: `vi .bash_profile`
1. press `I` to enter insert mode, and copy the following block into the file:
`[[ -s ~/.bashrc ]] && source ~/.bashrc`
1. again, press `esc` to enter command mode, then type `:wq` and press enter to save and exit.
1. create the `.bash_aliases` file with the following command: `touch ~/.bash_aliases`
1. open the file with vi: `vi ~/.bash_aliases`
1. press `I` to enter insert mode, and paste in the large block of text below.
1. save and exit, `<esc> :wq <enter>`
1. finally, type `source .bash_profile` to load all the aliases.
1. confirm the aliases load when you start a terminal by exiting your terminal and restarting.  Type `alias` and press enter, and you should see the list below.

``` bash
#
# directory aliases
#

alias ll='ls -l'
alias lla='ls -la'
alias cd..='cd ..'


#
# git aliases
#

alias ga='git add'
alias gc='git commit -m'
alias gpo='git push origin'
alias gs='git status'


#
# class-centric aliases
#
# change this to the full directory where your Code 201 classwork exists

alias 201='cd ~/Documents/Code201/labwork'

#
# bash management aliases
#

alias edbash='vi ~/.bashrc'
alias edal='vi ~/.bash_aliases'
alias newdot='source ~/.bashrc'
```


##### footnotes
1. `touch` is a utility that creates a file if it doesn't exist.
