# DBD Perk Randomizer 🎲

This repository hosts a simple JavaScript code I created to randomize Dead by Daylight (DBD) perks. It's designed to add a fun twist to your DBD gameplay by randomizing the perks you or your friends can use in the game.

## Project Overview 📖

The script fetches an `.html` copy of the [DBD Killer Perks page](https://deadbydaylight.fandom.com/wiki/Killer_Perks) directly from this GitHub repository. Then, the `index.js` file processes this HTML to extract the perk information from the table and randomizes the list of perks.

## How It Works ⚙️

1. **HTML Fetch**: Instead of downloading the HTML file manually, the script fetches the `Killer_Perks.html` file directly from this repository.
2. **Randomization**: The `index.js` file reads the fetched HTML, extracts the perks from the table, and randomizes their order.
3. **Display**: The randomized list of perks is then ready to be displayed or used within `index.js`.

## Running the Project 🚀

To run this project on your local machine:

1. Clone the repository.
2. Run `index.js` to see the randomized perks.

```bash
git clone https://github.com/LouisArCo/DBD-Perk-Randomizer.git
cd dbd-perk-randomizer
node index.html
```

## Modifications Due to CORS Policy 🛠️

Due to the CORS policy restrictions when fetching the file directly from the website, I've modified the code to fetch the `.html` file directly from this GitHub repository, eliminating the need for a local HTML file.

## Contribution 💡

Feel free to fork this repository, make changes, or suggest enhancements by creating a pull request or an issue. All contributions are welcome!

## Acknowledgments 🙏

- Thanks to the [Dead by Daylight Fandom Wiki](https://deadbydaylight.fandom.com/wiki/Killer_Perks) for providing the perk information.
- Thanks to everyone who contributes to this project!

---

Enjoy your randomized DBD perks and happy gaming! 🎮
