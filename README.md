# Gametime Hero RSVP Manager

## Overview

This project implements a simple RSVP Manager module to manage player responses for events. It was created as part of the coding challenge for the Software Engineer Intern role at GameTime Hero.

The RSVP Manager includes functionality for:

- Adding or updating a player's RSVP status
- Retrieving a list of confirmed attendees
- Counting total, confirmed, and declined responses
- The project is implemented in TypeScript and includes unit tests written with Jest to ensure code reliability.

## Features

- Add/Update RSVP: Allows adding or updating a player's RSVP status to one of the following: Yes, No, or Maybe.
- Confirmed Attendees: Retrieves a list of players who have confirmed (Yes) their attendance.
- Response Counts: Counts the number of total, confirmed, and declined responses.

## Technologies Used

- TypeScript for strong typing and better tooling support
- Jest for unit testing and ensuring the code works as expected
- Node.js for runtime environment

## Getting Started

Prerequisites
To run this project, you will need:

- Node.js installed on your machine.
- npm (Node Package Manager), which comes with Node.js.

## Installation

1. Clone the repository 
2. Install dependencies: `npm install`
3. Run unit tests to ensure everything works: `npm test`

## Running the Application

To run the app, use one of the following commands:

- Using npm start: This will run the app using ts-node: `npm start`
- Using npx directly (if you prefer running it without npm start): `npx ts-node src/app.ts`

This will execute the app.ts file, demonstrating the functionality of the RSVP Manager.

## File Structure

The project is structured as follows:
```/src
  /models
    - player.interface.ts    # Contains Player and RsvpEntry interfaces
  /services
    - rsvp.service.ts        # The main service for handling RSVPs
    - logger.ts              # Logger service for dependency injection
  /tests
    - rsvp.service.spec.ts   # Unit tests for RsvpService
  - app.ts                   # Entry point for demonstrating functionality
/package.json                # Project metadata and dependencies
/package-lock.json           # Locked dependencies for consistent installs
.gitignore                   # Ignores node_modules and other unnecessary files
```

## Running Tests
To run the unit tests with Jest:
`npm test`
This will run all the tests in the project and ensure that everything is functioning as expected.



