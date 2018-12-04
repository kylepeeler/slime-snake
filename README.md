![Game Logo](assets/documentation/game-logo.png)
# CSCI 437 Final Project - Written by Kyle Peeler, Trent Spice, and Tim Hickam

## Screenshot:
![Game Screenshot](assets/documentation/screenshot.png)

TODO: Brief game description

### Requirements

You need [Node.js](https://nodejs.org) to install and run scripts.

## User instructions

`cd` into the root directory of the game and run the following commands in your terminal:

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies and launch browser with examples.|
| `npm start` | Launch browser to show the game. By default it runs on [http://localhost:8000](http://localhost:8000) <br> Press `Ctrl + c` to kill **http-server** process. |

# Documentation

## Game Design Document
TODO: Be sure to explain every main scene in your game and all the moving parts. Describe all the sprites, their interactions,
how they are born and die, and what causes the scene to change states (if it does.) (merge with below?)

### Slimes
| Color | Ability |
|-|-|
| Red | Open doors (1 door to win level) |
| Blue | Bridge across water |
| Green | Can attack wizards |
| Purple | Can attack knights |

### Enemies (TODO: need to remove some?)
| Color | Type | Ability |
|-|-|-|
| Red | Knight | Low HP |
| Silver | Knight | Medium / High HP |
| Red | Wizard | Low HP | 
| Green | Wizard | Medium HP | 
| Blue | Wizard | High HP |

### Layer names
| # | Name |
|-|-|
| 0 | ground |
| 1 | wall |
| 2 | water |
| 3 | door |
| 4 | objects |
| 5 | water |

### Point names
| # | Name |
|-|-|
| 0 | spawnpoint |
| 1 | slime-red |
| 2 | slime-blue |
| 3 | slime-green |
| 4 | slime-purple |
| 5 | knight-red |
| 6 | knight-silver |
| 7 | wizard-red |
| 8 | wizard-green |
| 9 | wizard-blue |
---
--
## Documentation Directory (Google Docs Link)
[View in Google Docs](https://drive.google.com/open?id=1QAKDRge5tcbDovE5R6uUZ5oQze7akGbx)

## Software Engineering Plan
TODO: Describe the structure of the team, each person's primary responsibilities, a proposed (and actual) time line with milestones identified, and any other documentation needed for process management.

## State Transition Diagram
TODO: State Transition Diagram - Please show a simple state transition diagram describing the various states in your game and how the transitions between these states occur.

