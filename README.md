# The Race is On!

This project contains a simple AngularJS (v1.5) application that needs some updates to be fully functional. 
Your job is to complete the set of User Stories and Defects below to complete the application.

## Application Overview

The application is a simple page that lists a set of horses in a fictional horse race. The app
allows the user to `bet` on a horse, add additional horses to the race, edit the horses in the race,
and will show the currently selected horse (with the option to cancel the bet).

The completed application looks like the screen below:

![finished product](https://github.com/Bradleycorn/cdi-dev-eval/raw/master/finished-product.png)


## Deliverables

You should return a complete set of code that will run the project. Please submit your finished work
by pushing a new branch to this repository that uses your name as the branch name (i.e. firstname-lastname). 

In addition, you should be able to talk about the code and be able to discuss the following topics:
* The code changes and additions you made, how they work, and why you did things the way you did.
* All code in the project, what it does and how it works.

While you should always take care to write good clean html and css, the primary purpose of this
project is to evaluate your javascript and angular development skills. For this evaluation, you
may need to edit a few of the html elements or stylesheet rules here and there, but all of the 
elements and styles needed should already be in there. However, if you'd like to add your own, 
that is fine.


# User Stories and Defects
Below is a list of user stories and defects that outline the primary tasks for you to complete as part of this evaluation. Complete each story or defect as best you can.

1. Defect - List of Horses does not display. 
   
   When the application is first loaded, a list of horses in the race should be displayed, but
   all that is shown is the Add Horse form. Fix this defect so that the list of horses in the race 
   is displayed properly.
   
2. Make the Bet Button work

    As a player, I would like to be able to bet on a horse. 
    Wire up the Bet button so that the user can place a bet by clicking on the button. 
    When the button is clicked, it should show a green checkmark instead of the button.
    (note, the HTML element for the checkmark already exists in the view, you just need to 
    make sure it shows up.)
    
3. Defect - Selected Horse doesn't show.

    When a bet has been placed on a horse, some information about the horse should be
    displayed at the top of the list (just below the site header), along with a button
    to cancel the bet, but nothing is shown. Fix this defect so that the bet information
    and cancel button is shown at the top of the list. Make sure that the cancel button works.
    
4. Make Add Horse work 
    
    As an administrator, I want to add more horses to the race. The form appears, but, the
    Add button doesn't currently function. Make it work, so that when you click add, if
    there are values in both of the form fields, the horse will get added to the race. Finally,
    after the horse is added, the input fields should be cleared so another horse can be added.
    
5. Refactor the "Add Horse" Form

    Refactor the "Add Horse" form, making it into a custom element directive named crudHorse.
    Extract the html for the form into it's own template. The existing form controller can
    be used for the directive.
    
    
6. Add edit capability to the Form

    As an administrator, I might need to edit the name and/or odds of a horse in the race. 
    When I click on the name of a horse in the list, it's name and odds should show up in the
    input fields in the form at the bottom of the window. The button text should change to show
    "Update Horse". When I click on "Update Horse", it should update the name and odds of the horse
    in the list, clear the form fields, and change the button text back to "Add Horse".
    
    
    


## Getting Started

To get you started you can simply clone this repository and install the dependencies:

### Prerequisites

You need git to clone the repository..

We also use a number of Node.js tools to initialize bootstrap the project. You must have Node.js
and its package manager (npm) installed.

### Install Dependencies

We have two kinds of dependencies in this project: tools and Angular framework code. The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the Node Package Manager.

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`. After that, you should find out that you have
two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the Angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
`angular-seed` changes this location through the `.bowerrc` file. Putting it in the `app` folder
makes it easier to serve the files by a web server.*

### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at [`localhost:8000/index.html`][local-app-url].


