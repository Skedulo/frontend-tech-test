# Instructions

We have scaffolded out a component for you in [`src/question-one/QuestionOne.tsx`](./question-one/QuestionOne.tsx). You will need to update this component to satisfy the following brief.

## Brief

We expect you to complete most of the task within the above component. However, you may find that you also need to make changes elsewhere in the project to complete your solution.

We have included some basic styling. Implementing a snazzy design is **not required**, but of course we'd love you to show off some CSS skills if you have time!

### User Story

As a user, I want to search for jobs by a keyword or phrase, so that I can see a filtered list of matching jobs.

The `QuestionOne` component has a `service` prop - This is a data service which has methods you can use to retrieve the list of jobs to display.

### Acceptance Criteria

- [ ] Should have a search field
  - [ ] Should trigger a data fetch on input
  - [ ] Should not fetch any data until at least 3 characters have been entered
  - [ ] Should clear the results list when the value is cleared
- [ ] Should show search results in a list
  - [ ] Should include the job name
  - [ ] Should include the job start and end date
  - [ ] Should include the job location

## What we're looking for

The goal is to see how candidates think through form submissions and what scenarios a user is likely to encounter.

We have included unit tests to validate your solution - Run these from the terminal with `yarn test`. If you think there are additional scenarios to test for then feel free to add some!
