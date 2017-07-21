# Monday

* 6:00pm - Intro
* 6:20pm - Git: Basic Workflow
  * Fork & clone
    * At the main class repo page on GitHub, click on the **Fork** link at top right
    * Fork to your personal GitHub account
    * On your fork's page, copy the repo URL (it should look like *yourusername/code102.git* instead of *FundamentalsOfCode/code102.git*)
    * In your terminal, navigate to a suitable location to clone this repo and clone with `git clone [url]`
    * Use `ls` to check that git created a new directory with the same name as the repo
    * Change into the new directory with the command `cd code102`
  * What's the difference between the directory called `code102` and the repository called `code102`?
  * In your repo's directory, create a new file for your class notes: notes/monday.md
    * You can create an empty file with `touch notes/monday.md`
    * ...or you can create the file in your text editor
  * Add the new file to your repo *before* you add any content:
    * `git add notes/monday.md`
    * `git commit -m "Add notes file for Monday"`
  * Take notes on what you learn today in this markdown file
* 7:00pm - Developer Tools
  * You need to develop a relationship with your text editor ([VS Code](https://code.visualstudio.com/docs/introvideos/basics), [Atom](http://flight-manual.atom.io/getting-started/sections/atom-basics/) [2](/resources/atom.md), [Sublime](http://docs.sublimetext.info/en/latest/basic_concepts.html), etc.). Spend the time to get to know it, and to customize it to make your workflow easier and more productive.
  * Learn keyboard shortcuts (see links on [main page](/)). If your laptop allows multiple workspaces, learn how to use them.
  * Learn how to type. If you can't type quickly and accurately, you'll be at a severe disadvantage. (A fantastic resource is [typing.io](https://typing.io).)
* 7:15pm - Prework (you should be at least 20% complete by the end of class)
* 8:30pm - Git
  * Did you add your new `notes/monday.md` file to the repo earlier? How can you check?
  * Practice your git workflow:
    * `git status` (to make sure you have changes to the repo)
    * `git add -p` (to "stage" the changes)
    * `git status` (this time, to check that everything has been staged)
    * `git commit -m "Add good commit message"` (to "take the snapshot")
    * `git push origin master` (to share the changes with your remote repo)

[Back to main README](/README.md) | [Tuesday](/schedule/tuesday.md)
