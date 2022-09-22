## Question

For this question we want you to setup a page with a text field that we can use to get a list of jobs that have matching names. Update the [src/question-one/QuestionOne.tsx](./question-one/QuestionOne.tsx) component to update the UI.

So first we need a input box that will be a live search field (please have a label of 'Search'). Typing anything into this field will begin the fetch of data from the dataservice. However, it should not fetch any records until at least 3 characters have been entered. Clearing this field should clear the list of results.

And finally when the results are displayed we will need to see:

- The job name
- The start and end date of the job
- The location of the job

Note: We have provided a `service` prop to the component that is defined in /src/service/DataService.js. It has methods you can use to retrieve the list of jobs to display.

### What we're looking for

The goal of this Question is to see how candidates think through form submissions and what scenarios a user is likely to encounter. We have unit tests available to validate your scenario, using `yarn test` from the terminal will run these. If you think there are additional scenarios to test for then feel free to add some!
