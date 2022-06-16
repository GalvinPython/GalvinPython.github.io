# Changelog
There's no point in explaining the purpose of this file.  
Only counts from Commit 3 onwards

# Latest Commit
## C12
- *Version*: `C12-20220616`
- Released: `16/06/2022`
- Description: **Updated images**
### Modified
- images
  - All images with `.jpg` are now `.webp`
- css
  - All images now have drop shadows (may conflict)
  - All images on `index.html` have rounded corners

# Commit History
## C11
- *Version*: `C11-20220615.2`
- Released: `15/06/2022`
- Description: **Added error pages + Minor changes**

## C10
- *Version*: `C10-20220615`
- Released: `15/06/2022`
- Description: **Custom scrollbar + footer and header improvements**

## C9
- *Version*: `C9-20220609`  
- Released: `09/06/2022`

## C8
- *Version*: `C8-20220605`
- Released: `05/06/2022`
- Description: **Improvements to Sub Count pages**

### Modified
Not a lot of stuff. Mainly CSS

## C8.1
Edited `.GITIGNORE` to get rid of VSCode files. Not needed

## C8.2
Edited `changelog.md` to fix formatting issues


## C7
- *Version*: `C7-20220604.2`
- Released: `04/06/2022`
- Description: **Initial work on some JS files**

### Modified
- *js\pages\index.js*
  - Added a new redirect function
- *pages\channel_info\jsal\index.html*
  - Added a 'days since' function

### Additions
- A lot of JavaScript files, basically doing basic work
  - *js\channels\jsal.js*
  - *js\fetch_data\subs\jsal.js*
- *pages\sub_count\jsal\index.html*
 - Alpha page. Coming soon

## C6
- *Version*: `C6-20220604`
- Released: `04/06/2022`
- Description: **Minor channel info tweaks + misc. updates**

### Modified
- *pages/channel_info/jsal/index.html*:
  - Some channel info additions
- *global.css*
  - Updated CSS for all items

### Additions
- *server.ps1*
  - Automates activating the Python localhost server
- *compatability.md*
  - Checks if features are supported or not
  - To be implemented in some way or another

## C5
- *Version*: `C5-20220531`
- Released: `31/05/2022`
- Description: **Updated some images + proper disabled buttons**

### Modified
- */index.html*:
  - All buttons disabled, apart from pages under development
- *home.css*
  - CSS for disabled buttons
    - NOTE: Buttons get functional appearance, but are disabled if they are "coming soon"
- *ejsafc.jpg*
  - Got a compressed version from Google, saving around 80-90% of storage space

### Other
- Version strings on this file are *[Commit Number]-[YYYY][MM][DD]*
- Yes, I did forget Commits *3* and *4*

## C2
- *Released: `29/05/2022`*
- Description: **Channel Info Page in Beta and some cleaning up**

### Changes
- Channel Info Pages
  - Only for JSAL
  - In BETA
- Cleaning up
  - Replaced some JS function with abbr
  - Added newlines at the end of some files (to shut up GitHub)