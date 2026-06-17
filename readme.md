# BookStack

[![Codeberg release](https://img.shields.io/gitea/v/release/bookstack/bookstack.svg?gitea_url=https://codeberg.org)](https://codeberg.org/bookstack/bookstack/releases/latest)
[![license](https://img.shields.io/badge/License-MIT-yellow.svg)](https://codeberg.org/bookstack/bookstack/src/branch/development/LICENSE)
[![Crowdin](https://badges.crowdin.net/bookstack/localized.svg)](https://crowdin.com/project/bookstack)
[![Build Status](https://codeberg.org/bookstack/bookstack/badges/workflows/test-php.yml/badge.svg)](https://codeberg.org/bookstack/bookstack/actions?workflow=test-php.yml)
[![Lint Status](https://codeberg.org/bookstack/bookstack/badges/workflows/lint-php.yml/badge.svg)](https://codeberg.org/bookstack/bookstack/actions?workflow=lint-php.yml)
[![php-metrics](https://img.shields.io/static/v1?label=Metrics&message=php&color=4F5B93)](https://source.bookstackapp.com/php-stats/index.html)
<br>
[![Alternate Source](https://img.shields.io/static/v1?label=Alt+Source&message=Git&color=ef391a&logo=git)](https://source.bookstackapp.com/)
[![Community Discussions](https://img.shields.io/static/v1?label=Community&message=Discussions&color=4d36c4&logo=zulip)](https://community.bookstackapp.com/)
[![Mastodon](https://img.shields.io/static/v1?label=Mastodon&message=@bookstack&color=595aff&logo=mastodon)](https://www.bookstackapp.com/links/mastodon)
<br>
[![PeerTube](https://img.shields.io/static/v1?label=PeerTube&message=bookstack@foss.video&color=f2690d&logo=peertube)](https://foss.video/c/bookstack)
[![YouTube](https://img.shields.io/static/v1?label=YouTube&message=bookstackapp&color=ff0000&logo=youtube)](https://www.youtube.com/bookstackapp)



## ⚖️ License

The BookStack source is provided under the [MIT License](https://codeberg.org/bookstack/bookstack/src/branch/development/LICENSE). 

The libraries used by, and included with, BookStack are provided under their own licenses and copyright.
The licenses for many of our core dependencies can be found in the attribution list below, but this is not an exhaustive list of all projects used within BookStack. 

## Git Push Rules

### 1. Clone this Repo
Use bash or terminal to clone this repo
```
https://github.com/eLlawliet/BookStack.git
```
### 2. Create work branch
To create a branch you can start by:
 - Click branches
 - Click new branches
 - Input your branches name `Recomended Format` ('Works number'-'What to do'---'where')
 - Choose master as source and click create branch
after that go to your terminal and use this command:
```
git fetch origin
git checkout branch name
```
## Pushing and merging
When you finish your job you can push and merge by doing this step:
### 1. Checking right branch
In your terminal type:
```
git branch
```
to make sure you are in your work branch
### 2. add, commit, push
Then you can start doing add, commit and push by using these command:
```
git add .
git commit -m "your message"
git push
```
**Pay attention to the "commit message convention" for your message**
### 3. Create a pull request
after you push you can press create & compare pull request or you can follow this step by step:
- Click pull request tab
- Click New pull request
- Choose Master as base and your branch as compare
- Click create pull request

## Check other branch
### 1. Fetching all branch
Open your terminal and go inside volun-web folder then use this command:
```
git pull origin master
git fetch origin
```
### 2. Checkout the branch
After Fetching all branch you can check branch you want by using this command:
```
git checkout [Name of branch]
```

## Commit Message Convention 
### Format
 
`<type>(optional scope): <description>`
Example: `feat(pre-event): add speakers section`
 
### 1. Type
 
Available types are:
 
- feat → Changes about addition or removal of a feature. Ex: `feat: add table on landing page`, `feat: remove table from landing page`
- fix → Bug fixing, followed by the bug. Ex: `fix: illustration overflows in mobile view`
- docs → Update documentation (README.md)
- style → Updating style, and not changing any logic in the code (reorder imports, fix whitespace, remove comments)
- chore → Installing new dependencies, or bumping deps
- refactor → Changes in code, same output, but different approach
- test → Update testing suite, cypress files
- revert → when reverting commits
- perf → Fixing something regarding performance (deriving state, using memo, callback)
- vercel → Blank commit to trigger vercel deployment. Ex: `vercel: trigger deployment`
 
### 2. Optional Scope
 
Labels per page Ex: `feat(pre-event): add date label`
 
\*If there is no scope needed, you don't need to write it
 
### 3. Description
 
Description must fully explain what is being done.
 
Add BREAKING CHANGE in the description if there is a significant change.
 
**If there are multiple changes, then commit one by one**
 
- After colon, there are a single space Ex: `feat: add something`
- When using `fix` type, state the issue Ex: `fix: file size limiter not working`
- Use imperative, and present tense: "change" not "changed" or "changes"
- Don't use capitals in front of the sentence
- Don't add full stop (.) at the end of the sentence

## 👪 Attribution

The great people that have worked to build and improve BookStack can [be seen here](https://codeberg.org/bookstack/bookstack/activity/contributors). The wonderful people that have provided translations, either through GitHub, Codeberg or via Crowdin [can be seen here](https://codeberg.org/bookstack/bookstack/src/branch/development/.github/translators.txt).

Below are the great open-source projects used to help build BookStack. 
Note: This is not an exhaustive list of all libraries and projects that would be used in an active BookStack instance.

* [Laravel](http://laravel.com/) - _[MIT](https://github.com/laravel/framework/blob/v8.82.0/LICENSE.md)_
* [TinyMCE](https://www.tinymce.com/) - _[MIT](https://github.com/tinymce/tinymce/blob/develop/LICENSE.TXT)_
* [Lexical](https://lexical.dev/) - _[MIT](https://github.com/facebook/lexical/blob/main/LICENSE)_
* [CodeMirror](https://codemirror.net) - _[MIT](https://github.com/codemirror/CodeMirror/blob/master/LICENSE)_
* [Sortable](https://github.com/SortableJS/Sortable) - _[MIT](https://github.com/SortableJS/Sortable/blob/master/LICENSE)_
* [Google Material Icons](https://github.com/google/material-design-icons) - _[Apache-2.0](https://github.com/google/material-design-icons/blob/master/LICENSE)_
* [markdown-it](https://github.com/markdown-it/markdown-it) and [markdown-it-task-lists](https://github.com/revin/markdown-it-task-lists) - _[MIT](https://github.com/markdown-it/markdown-it/blob/master/LICENSE) and [ISC](https://github.com/revin/markdown-it-task-lists/blob/master/LICENSE)_
* [Dompdf](https://github.com/dompdf/dompdf) - _[LGPL v2.1](https://github.com/dompdf/dompdf/blob/master/LICENSE.LGPL)_
* [KnpLabs/snappy](https://github.com/KnpLabs/snappy) - _[MIT](https://github.com/KnpLabs/snappy/blob/master/LICENSE)_
* [WKHTMLtoPDF](http://wkhtmltopdf.org/index.html) - _[LGPL v3.0](https://github.com/wkhtmltopdf/wkhtmltopdf/blob/master/LICENSE)_
* [diagrams.net](https://github.com/jgraph/drawio) - _[Embedded Version Terms](https://www.diagrams.net/trust/) / [Source Project - Apache-2.0](https://github.com/jgraph/drawio/blob/dev/LICENSE)_
* [SAML PHP Toolkit](https://github.com/SAML-Toolkits/php-saml) - _[MIT](https://github.com/SAML-Toolkits/php-saml/blob/master/LICENSE)_
* [League/CommonMark](https://commonmark.thephpleague.com/) - _[BSD-3-Clause](https://github.com/thephpleague/commonmark/blob/2.2/LICENSE)_
* [League/Flysystem](https://flysystem.thephpleague.com) - _[MIT](https://github.com/thephpleague/flysystem/blob/3.x/LICENSE)_
* [League/html-to-markdown](https://github.com/thephpleague/html-to-markdown) - _[MIT](https://github.com/thephpleague/html-to-markdown/blob/master/LICENSE)_
* [League/oauth2-client](https://oauth2-client.thephpleague.com/) - _[MIT](https://github.com/thephpleague/oauth2-client/blob/master/LICENSE)_
* [pragmarx/google2fa](https://github.com/antonioribeiro/google2fa) - _[MIT](https://github.com/antonioribeiro/google2fa/blob/8.x/LICENSE.md)_
* [Bacon/BaconQrCode](https://github.com/Bacon/BaconQrCode) - _[BSD-2-Clause](https://github.com/Bacon/BaconQrCode/blob/master/LICENSE)_
* [phpseclib](https://github.com/phpseclib/phpseclib) - _[MIT](https://github.com/phpseclib/phpseclib/blob/master/LICENSE)_
* [Clockwork](https://github.com/itsgoingd/clockwork) - _[MIT](https://github.com/itsgoingd/clockwork/blob/master/LICENSE)_
* [PHPStan](https://phpstan.org/) & [Larastan](https://github.com/nunomaduro/larastan) - _[MIT](https://github.com/phpstan/phpstan/blob/master/LICENSE) and [MIT](https://github.com/nunomaduro/larastan/blob/master/LICENSE.md)_
* [PHP_CodeSniffer](https://github.com/PHPCSStandards/PHP_CodeSniffer) - _[BSD 3-Clause](https://github.com/PHPCSStandards/PHP_CodeSniffer/blob/master/licence.txt)_
* [JakeArchibald/IDB-Keyval](https://github.com/jakearchibald/idb-keyval) - _[Apache-2.0](https://github.com/jakearchibald/idb-keyval/blob/main/LICENCE)_
* [HTML Purifier](https://github.com/ezyang/htmlpurifier) and [htmlpurifier-html5](https://github.com/xemlock/htmlpurifier-html5) - _[LGPL-2.1](https://github.com/ezyang/htmlpurifier/blob/master/LICENSE) and [MIT](https://github.com/xemlock/htmlpurifier-html5/blob/master/LICENSE)_

For a detailed breakdown of the JavaScript & PHP projects imported and used via NPM & composer package managers, along with their licenses, please see the [dev/licensing/js-library-licenses.txt](dev/licensing/js-library-licenses.txt) and [dev/licensing/php-library-licenses.txt](dev/licensing/php-library-licenses.txt) files
