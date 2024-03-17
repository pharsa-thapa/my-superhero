# MySuperHero

## Introduction 
MySuperHero is a web application that allows user to search for favourite super hero character, view power stats and save into the system. Later this saved super hero power stats can also be updated and saved.

## How to access the app?
You can easily access the app [MySuperHero](https://master.d172znlri2cnll.amplifyapp.com). If you are not able to click on the lin Copy and use the URL - https://master.d172znlri2cnll.amplifyapp.com. Code base is also publicly available to access at [MySuperHero Githuh](https://github.com/pharsa-thapa/my-superhero).

## How to use MySuperHero
Once you land on the home page, you will see header with logo and salutation (on top), search field (on left side) and a main page (at middle of the page)

### My Saved Super Heroes Page
The middle of the page is the section where your saved superheroes will be listed. If there are not any records saved you will see a message "No Saved Super Heroes". Once you start saving super heroes record, they will be listed here along with the image. Each record are given provision to Edit Power Stats.

### Search Super Hero
Start typing your favourite super hero in the search field, You will see a list of matching superheroes below the search field.

### View Your Super Hero
On the matching list, each of the item has a View button with an icon which will trigger the page to view details of the clicked super hero along with the image.

### Saving your Super Hero
On the View dialog, there is a Save button below which will save the deails of the viwed superhero for future. 

### Editing Power Stats
Once you click on the Edit Power Stats button in your saved item, you will see a dialog box which allows to adjust your new value for each item of the power stats. Once you are done with adjustments, simply click on Save button. This will update the power stats of the selected super hero immediately.

## Used Stack
1. React  with amplify/react-ui and bootstrap
2. Node js
3. Lambda Functions
4. AWS Amplify
5. App Sync
6. Dynamo DB

## Package Versions
1. Node Version 16.13 +
2. React Version 18.2.0
3. NPM version 8.19.2
4. Amplify CLI Version 12.10.1
5. Git Version 2.40.0

## Assumptions
### Feature Scope
1. User means end user
2. No Authentication or User based data saving feature
3. Edit means Only the Power Stats Update Feature
4. View means Viewing Details from superheros API
5. View later means Viewing data that has been saved into Dynamo DB after being copied from superheroes API
