# Thoughts while approaching this project

## Understanding the existing code

After installing and cloning this repository, I had a look at the existing code to work out what was already in place. I created a basic function to fetch the service result and log it to the console in order to play with it a little.

After an initial investigation, I decided which files and components I wanted to create and how I wanted to handle the jobs data. I decided to handle the jobs object inside `QuestionOne` and to pass the array into a `JobsList` component. I would also pass a callback function that would call the service and request the jobs based on the search term. This callback would be passed to a `SearchField` component.

Next, I created the `JobsList`. For the first iteration, all it did was accept a list of jobs and map them to a list with the necessary information. There was no styling or anything - that can be added later.

The next step was to create the search box and functionality - the `SearchField`. I first set up the functional component with an input box that is controlled by a ref. I added a button and set it up to expect an onSearch callback, which will come from `QuestionOne`. I decided to use a button for now, just to make sure the link between the request and data display worked as expected.

I then used the new components in `QuestionOne` and tested manually to make sure things were in place. When linking everything together, I noticed some issues with the `Pick` description of the service. As the service didn't filter the data, and we need to display the location plus use the ID, I adjusted the return type of the `IDataService` functions.

Once satisfied with all of this, I next looked at the submit button. I removed it and the ref, and created a function called `onChange` which could be passed to the input. At this point, I ran the tests to ensure everything was okay. I adjusted the label of my input to match the tests, reran and everything passed :party-parrot.