+++
title = "How to use server as a remote git repository"
date = 2026-07-11
[extra]
toc = false
go_to_top = true
+++

This is not obvious for everyone, but you can use your regular Linux servers as a place for managing your git repositories. Below is a step-by-step guide on how to set it up.

Let's go to the server and create a root directory for hosting our git repositories:

```bash
mkdir -p /srv/git
```

> By [convention](https://www.pathname.com/fhs/pub/fhs-2.3.html#SRVDATAFORSERVICESPROVIDEDBYSYSTEM), we use `/srv/git`

Next, you need to initialize new repository with any name you like:

```bash
git init /srv/git/my-app --bare
```

Output will be like this:

```
Initialized empty Git repository in /srv/git/my-app/
```

This is called a bare repo. It's a system git data folder for storing history of changes - just the regular `.git` folder as in any other git repository.

So now we can connect to this empty repo to push some data. To demonstrate it, I'll just create a folder with a `README.md` file on my local machine:

```bash
mkdir my-app
cd my-app
echo "Hello, World" >  README.md
```

Then init local git repo, commit changes, connect to remote and push it:

```bash
git init
git add .
git commit -m "init readme"
git remote add origin root@1.1.1.1:/srv/git/my-app
git push -u origin master
```

> Replace `root@1.1.1.1` with your server's SSH username and IP address

And that's it. Now, if you want to clone this repo into another machine, or use it on the server, just clone it as usual and work with it:

```bash
git clone root@1.1.1.1:/srv/git/my-app
```

---

To learn more about Git bare repos you can watch [this video](https://youtu.be/8aZW9mYOxhc?si=pRPyYaha0yTh-ywl) or read the [official Git documentation](https://git-scm.com/book/en/v2/Git-on-the-Server-Getting-Git-on-a-Server).
