# Slime Snake
![Game Screenshot](screenshot.png)
## CSCI 437 Final Project - Written by Kyle Peeler, Trent Spice, and Tim Hickam

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
# Software Engineering Plan
##Team Member Responsibilities
* Kyle Peeler - Software Architect, UI Design/Implementation, Team Coordinator, Slime AI
* Trent Spice - Map Planning, Map Generation, Collision Management, SFX, Animations
* Tim Hickam - Integration, Combat, Slime Mechanics, Interactions

Team members were given tasks determined by consensus after finishing prior tasks. Considerations to past work was 
given when determining who would work on new tasks e.g. Trent was primarily given map-based tasks due to his 
familiarity with the map design tooling and implementation.

Timeline
0. Plan mechanics for game
1. Implement working example using Phaser
1. ~~Implement TiledPhysics plugin example~~
2. Scrap TiledPhysics plugin dependency
3. Design Slime Follower mechanic
4. Add ability to pick up slimes
5. Procured sprite art for enemies and map
6. Generate basic map structure
7. Add ability to rotate slime positions without changing order
8. Removing slimes (no intended way for this to happen yet)
9. Spawn enemies based on map data
10. Implement combat
11. Add map interactions (bridge and final door)
12. Add UI for user to monitor slimes
13. Create health bars for enemies
14. Make beginning and end states for game based on win/lose/start

# State Transition Diagram
![Game Screenshot](FiniteStateDiagram.png)

