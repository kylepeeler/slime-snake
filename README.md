# Slime Snake

(Fill this in after we finish it. What is this game?)

### Requirements

We need [Node.js](https://nodejs.org) to install and run scripts.

## Install and run

Run next commands in your terminal:

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies and launch browser with examples.|
| `npm start` | Launch browser to show the examples. <br> Press `Ctrl + c` to kill **http-server** process. |
=======

## Documentation

### Slimes
| Color | Ability |
|-|-|
| Red | Open doors (1 door to win level) |
| Blue | Bridge across water |
| Green | Can attack wizards |
| Purple | Can attack knights |

### Enemies
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
