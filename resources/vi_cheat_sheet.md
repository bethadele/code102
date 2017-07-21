## vi commands

#### insert mode vs. command mode

There are two modes in vi.  When you start the program, it will begin in command mode.  

##### common commands to switch between modes
| cmd | description |
|---|---|
| i | insert mode right at cursor |
| I | insert mode at beginning of line |
| a | insert mode after cursor |
| A | insert mode at end of line |
| o | creates new line below cursor, begins input mode at beginning of line |
| O | creates new line above cursor, begins input mode at beginning of line |
| ESC | exits input mode, returns to command mode |

##### how to quit vi
| cmd | description |
|---|---|
| :q | quit without saving |
| :w | write changes without exiting |
| :wq, :x, ZZ | write changes and quit |

##### common commands in command mode

| cmd | description |
|---|---|
| arrow keys | move cursor around the file |
| h,j,k,l | move cursor left, down, up, right, respectively |
| *n*G | move to line *n*.  ex:  12G moves to line 12 of file |
| G | without a number, G moves to end of file |
| 0 (zero) | move to beginning of line |
| $ | move to end of line |
| w, b | move forward or backward by word |
| {, } | move forward or backward by paragraph |
| /word | find the next occurence of `word` |
| ?word | find the previous occurence of `word` |
| n | continue to the next occurence of the previous search |
| d | delete command.  requires additional information |
| dw | deletes a word |
| dd | deletes the current line |
| d3G | deletes all text from current cursor to line 3 |

Note that in many cases, there are a number of commands that do the same thing.
