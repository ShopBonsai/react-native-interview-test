# Aproach by Elías

## Folder structure

Even though I think is a good idea having this folder structure proposed by you, I'm proposing one that I think is also good and clearer. You are going to see it accross the project and mainly that's the way I make the applications and my projects in general.

## Debugging

I saw that you had `redux-logger` as the default debugging tool. I want you to check out [React Native Debugger](https://github.com/jhen0409/react-native-debugger). Is like debugging React and Redux on the browser.

## Hooks

I read about recompose, but since we already have Hooks, I think is good not to use it and have the configuration Redux indenpently of the React logic.

# Welcome to the Bonsai React Native Frontend Interview Test!

We have prepared an operational React Native app configured for Android and iOS with some simple structure to help you get going.

## Scenario:

You have been provided with a test API from a movie theatre chain's ticketing system. As a proof of concept they want to see how we could work with their data in a feed and you have been tasked with developing a simple proof of concept.

### API

* URL for the API is: https://us-central1-bonsai-interview-endpoints.cloudfunctions.net/movieTickets?skip=0&limit=10
* The `skip` and `limit` parameters are the only ones that exist.
* There are only 1000 movie tickets in this test feed but there will be more in the future.

## Goal

Your goal is to create a feed of movie tickets. You don't need any login, registration, account screens, settings, just the feed is _required_. It is also required to be able to interact with a feed item in at least one way such as: liking, viewing details, adding to cart and ensure you store this state on the frontend. Even though this is just an exercise it is important that you take care about scalability, reusability and robustness. Assume other developers will be working with you eventually.

## Evaluation

Please document your changes well and make as many atomic commits as you feel are necessary for someone to track your changes.

We will be evaluating the following:

* Adopting and using modern best practices
* Coding style
* Attention to detail
* Clarity in communication
* Robustness of testing, both manual and automatic testing
* Reasonable style of the app, it doesn't have to look designed, but it has to have a reasonable structure, with general sensibility
* Ability to work with an API and manage pagnination from the frontend

People who do well will be contacted through email within a week of acknowledgement of pull request submission.

Thank you and good luck!
