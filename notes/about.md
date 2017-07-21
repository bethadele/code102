This directory is where you can store your personal notes for the class.

If you put a file in the wrong place and commit it to the repo, here's how to recover:
```
git mv path/to/old/file.md path/to/new/file.md
git commit -m "Move file"
```

For example, if you put Monday's notes file in the main repo directory and want to move it into the *notes* directory, you could do this:
```
git mv monday.md notes/monday.md
git commit -m "Move Monday notes into correct directory"
```
