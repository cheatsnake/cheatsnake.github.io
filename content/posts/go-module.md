+++
title = "Managing a public Go module"
date = 2026-08-16
[extra]
toc = true
go_to_top = true
+++

A simple guide on how to publish a Go module and manage it over time.

## Preparation

```sh
mkdir module
cd module
```

... initialize git and connect to GitHub.

```sh
go mod init github.com/yourname/module
```

```sh
touch module.go
```

And feel free to write some code.

> For best practice, don't forget to also add a [LICENSE](https://pkg.go.dev/license-policy) file.

## Beta stage

```sh
git add .
git commit -m "beta release"
git tag v0.1.0
git push origin master v0.1.0
```

Documentation: https://pkg.go.dev/github.com/yourname/module@v0.1.0

Installation: `go get github.com/yourname/module@v0.1.0`

Import: `github.com/yourname/module`

> Always follow [Semantic Versioning](https://semver.org).

## Release

Release it when you're sure that your code is stable for the wild.

```sh
git add .
git commit -m "Release v1.0.0"
git tag v1.0.0
git push origin master v1.0.0
```

Documentation: https://pkg.go.dev/github.com/yourname/module

Installation: `go get github.com/yourname/module@v1.0.0`

Import: `github.com/yourname/module`

## New major releases

Create them for all breaking changes.

The previous major version should stay in a separate branch to allow releasing patches. So before making new changes, save the current code in a new branch:

```sh
git checkout master
git checkout -b v1
git push origin v1
```

Now you are ready for a major change:

```sh
git checkout master
```

Update module path in `go.mod`:

```
module github.com/yourname/module/v2
```

Update internal imports (if any):

```go
// Change from:
import "github.com/yourname/module/subpackage"
// To:
import "github.com/yourname/module/v2/subpackage"
```

... make your changes.

```sh
git add .
git commit -m "Release v2.0.0"
git tag v2.0.0
git push origin master v2.0.0
```

Documentation: https://pkg.go.dev/github.com/yourname/module/v2

Installation: `go get github.com/yourname/module/v2@v2.0.0`

Import: `github.com/yourname/module/v2`

## Example

You can see an example of a simple module that has gone through this life cycle here:
https://github.com/cheatsnake/module

Corresponding links to go pkg:

- https://pkg.go.dev/github.com/cheatsnake/module@v0.2.0
- https://pkg.go.dev/github.com/cheatsnake/module
- https://pkg.go.dev/github.com/cheatsnake/module/v2
