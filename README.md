# DBD Perk Randomizer 🎲

This repository hosts a simple JavaScript code I created to randomize Dead by Daylight (DBD) perks. It's designed to add a fun twist to your DBD gameplay by randomizing the perks you or your friends can use in the game.

## Project Overview 📖

The script works by downloading an `.html` copy of the [DBD Killer Perks page](https://deadbydaylight.fandom.com/wiki/Killer_Perks) from the Dead by Daylight Fandom wiki and naming it `Killer_Perks.html`. Then, the `index.js` file processes this HTML to extract the perk information from the table and randomizes the list of perks.

## How It Works ⚙️

1. **HTML Download**: The script initially requires a manual download of the Killer Perks page from the DBD wiki. The page should be saved as `Killer_Perks.html` in the project's directory.
2. **Randomization**: The `index.js` file reads the HTML file, extracts the perks from the table, and randomizes their order.
3. **Display**: The randomized list of perks is then ready to be displayed or used within `index.js`.

## Running the Project 🚀

To run this project on your local machine:

1. Clone the repository.
2. Ensure you have the `Killer_Perks.html` file in the root directory.
3. Run `index.html` and press the button to see the randomized perks.
