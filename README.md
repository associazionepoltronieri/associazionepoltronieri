Associazione Alberto Poltronieri
================================

Development
-----------

You need to install [Node.js](http://nodejs.org/) and the following tools:

```
$ npm install -g enfield
...

$ npm install -g grunt-cli
...

$ npm install -g bootlint
...
```

Then you need to install the dependencies: `$ npm install`

You may generate the site locally, using [enfield](https://github.com/fortes/enfield).

Then you may validate the html, using the default [Grunt](http://gruntjs.com/)
task; at last, you may validate the [Boostrap](http://getbootstrap.com/) code
with [bootlint](https://github.com/twbs/bootlint).

```
$ enfield
...

$ grunt
...

$ bootlint _site/*.html
...
```

Deploy
------

There are two repos:

- [staging](https://github.com/associazionepoltronieri/associazionepoltronieri.github.com)

- [live](https://github.com/associazionepoltronieri/associazionepoltronieri)

The development uses staging repo, master branch.

To sync the two repos, you need to add the following to the config of the live
repo:

```
[remote "staging"]
	url = git@github.com:associazionepoltronieri/associazionepoltronieri.github.com.git
	fetch = +refs/heads/*:refs/remotes/origin/*
```

When you need to sync the live repo with the staging one, you need to execute
the following commands:

```
git pull staging master
git push
```

The live repo has two branches: `master` and `gh-pages`.

After syncing staging master branch with live master one, the last step to go
live is to merge live master branch with live gh-pages one.
