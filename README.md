Associazione Alberto Poltronieri
================================

Development notes
-----------------

There are two repos:

- [staging](https://github.com/associazionepoltronieri/associazionepoltronieri.github.com)

- [live](https://github.com/associazionepoltronieri/associazionepoltronieri)

The development uses staging repositor, master branch.

To sync the two repos, you need to add the following to the config of the live
repo:

```
[remote "staging"]
	url = git@github.com:associazionepoltronieri/associazionepoltronieri.github.com.git
	fetch = +refs/heads/*:refs/remotes/origin/*
```

When you need to sync the live with the staging one, you need to execute the
following commands:

```
git pull staging master
git pull
git push
```

The live repo has two branches: master and gh-pages.

After syncing staging master branch with live master branch, the last ste to go
live is to merge live master branch with live gh-pages one.
