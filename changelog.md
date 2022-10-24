# Changelog
There's no point in explaining the purpose of this file.  
Only counts from Preview 2 onwards

# Latest Commit
## Preview 28
- Released: `24/10/2022`
- Description: `Added Geograhy Stuff 🌎`

# Commit History
## Preview 27
- Released: `29/07/2022`
- Description: `🎨 Updated footer`

### 🔨 Modifications
- Styled buttons in footer to fix image placements
- Added footer with an ID into each HTML document to prevent **Violation - Don't use document.write()** warnings
 
## Preview 26
- Released: `26/07/2022`
- Description: `🔨 Fixed navbar bug`

### 🔨 Modifications
- Updated dropdowns in the navbar to new URLs

## Preview 25
- Released: `26/07/2022`
- Description: `🎊 Site relaunch`

### 🔨 Modifications
- All `sub_count` and `view_count` pages
  - Deleted them. Now all in `index.html` with queries
- changed names of profile pictures
  - Instead of being all the name, they're now abbreviations

## Preview 24
- Released: `25/07/2022`
- Description: `⏱ Optimisation update`  

*Note*: This update was not released to the general public due to new API causing 500 errors

### 🔨 Modifications
- Replaced all `/js/fetch_data/` files with their respective type file (subs, views) 
  - This is to make it easier to make updates
  - Optimises the development process, not necessarily the end user
- `/styles/global.css`
  - Added a little hover transition when using the navbar

## Preview 23
- Released: `21/07/2022`
- Description: **✨ Code Cleanup + API Data**

### 🔨 Modifications
- All `sub_count` and `view_count` pages
  - Added the API number present in the estimated data
- `index.html`
  - Removed the status column as this was not needed
- footer
  - Added icons to navigation - largely broken still

### ➕ Additions
- images
  - added `ic_misc_home.svg` for the footer
  - added banners for future use

### ♻ Deletions
- NPM / node.js files
  - These files will make for a more secure backend system which deals with APIs or with server issues
  - Split `server.ps1` into `local_server.ps1` and `node_server.ps1` to make running the servers easier (both localhost however)

## Preview 22
- Released: `17/07/2022`
- Description: **Added odometers**

### Modifications
- All `sub_count` and `view_count` pages
  - Added an odometer to both Estimated and YouTube API data
    - *(YouTube API data is still not working - will be functional in a couple updates time)*
- `index.html`
  - Buttons don't open in a new page - instead links are replaced
    - *(There will be an option to open in a new tab shortly)*

## Preview 21
- Released: `17/07/2022`
- Description: **Updated footer + new SVGs**

### Modifications
- Profile Pictures
  - Updated *JackSucksAtClips*
- All `sub_count` and `view_count` pages
  - Updated text in `subCountText`
  - Removed line break which would appear after data was fetched

### Additions
- Images
  - `.svg`s for:
    - GitHub
    - Instagram
    - Reddit
    - Twitter
    - YouTube
  - Added for later use

## Preview 20
- Released: `16/07/2022`
- Description: **Updated data graphs**

### Modifications
- images
  - Updated the following channels to the latest gradient:
    - Jack Massey Welsh (Tesla)
    - *50 Character Long Channel Name*
    - JSAG
    - JSAL
    - JSAS
- all `sub_count` and `view_count` pages
  - Updated the data chart to the channels colour palette

## Preview 19
- Released: `15/07/2022`
- Description: **View Count Pages active for all channels**

## Preview 18
- Released: `14/07/2022`
- Description: **Added View Count Page + Updated homepage**

### Modifications
- `index.html`
  - Added `type="button"` attribute to all buttons
  - Disabled and enabled some buttons
  - Added redirect functions to buttons for future use
- `navbar.html`
  - Added an *other* dropdown to navbar
  - Added "*coming soon*" note for links with `javascript:void(0)` as their redirect

### Additions
- View Pages  
  - Only added for JSAL atm

## Preview 17
- Released: `12/07/2022`
- Description: **Updated Navbar**

### Modifications
- `index.html`
  - Replaced the message **Navbar under development. Site not optimsied for mobile** with **NOTE: There is no mobile support (yet)**
  - This message is now written in the navbar, not in index.html

## Preview 16
- Released: `11/07/2022`
- Description: **Minor CSS improvements**

### Additions
- `/pages/*/index.html`
  - Added for navigation

### Modifications
- `JackSucksAtPopUpPirate.webp`
  - Updated to the latest PFP with the gradient
- `footer.js`
  - Updated footer a bit
- `navbar.js`
  - Added dropdown menus for better navigation and aesthetics
- `index.html`
  - Removed **NEW** tag from *Sub Count* buttons

## Preview 15
- Released: `07/07/2022`
- Description: **Released Subscriber Count page for all channels**

### Modifications
- CSS
  - `abbr[title]` now has effect in `sub_count.css`
  - New toggle button in `global.css`
    - *Not fully implemented yet*
- `/index.html`
  - All `Subscriber Count` buttons are no longer disabled
- `navbar.js` and `footer.js`
  - Only one `document.write()` function as opposed to multiple for every line

### Additions
- All channels have their own JavaScript and HTML files
  - Really nothing else to mention

## Preview 14
- Released: `18/06/2022`
- Description: **Updated Subscriber Count pages**

## Preview 13
- *Version*: `C13-20220616.2`
- Released: `16/06/2022`
- Description: **Updated some CSS**

## Preview 12
- *Version*: `C12-20220616`
- Released: `16/06/2022`
- Description: **Updated images**
### Modified
- images
  - All images with `.jpg` are now `.webp`
- css
  - All images now have drop shadows (may conflict)
  - All images on `index.html` have rounded corners

## Preview 11
- *Version*: `C11-20220615.2`
- Released: `15/06/2022`
- Description: **Added error pages + Minor changes**

## Preview 10
- *Version*: `C10-20220615`
- Released: `15/06/2022`
- Description: **Custom scrollbar + footer and header improvements**

## Preview 9
- *Version*: `C9-20220609`  
- Released: `09/06/2022`

## Preview 8
- *Version*: `C8-20220605`
- Released: `05/06/2022`
- Description: **Improvements to Sub Count pages**

### Modified
Not a lot of stuff. Mainly CSS

## Preview 8.1
Edited `.GITIGNORE` to get rid of VSCode files. Not needed

## Preview 8.2
Edited `changelog.md` to fix formatting issues


## Preview 7
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

## Preview 6
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

## Preview 5
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

## Preview 2
- *Released: `29/05/2022`*
- Description: **Channel Info Page in Beta and some cleaning up**

### Changes
- Channel Info Pages
  - Only for JSAL
  - In BETA
- Cleaning up
  - Replaced some JS function with abbr
  - Added newlines at the end of some files (to shut up GitHub)
