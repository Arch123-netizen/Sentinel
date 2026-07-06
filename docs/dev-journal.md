Day by Day development journal

# Day 1(June 29,2026)

## Objectives

- Install develpoment tools
- Create GitHub repository
- Clone repository
- Set up project Structure

## Completed

- Installed VS Code
- Installed Git
- Installed Python
- Cloned repository
- Configured VS Code

## Challenges

- GitHub password authentication failed.
- Created multiple files instead of folders on VS Code.

## Reflections

- I learned how to set up a software project using Git and GitHub. Proved essential for organizing and journaling down each day's entire process.

# Day 2(June 30,2026)

## Objectives

- Build the basic Chrome extension structure.
- Learn how Chrome extensions are organized.
- Successfully load Sentinel into Chrome.

## Completed

- Created the manifest.json configuration file.
- Built the popup interface using HTML, CSS, and Javascript.
- Organized the extension into proper structure.
- Successfully loaded Sentinel as an unpacked extension in Chrome.

## Challenges

- Properly creating and structuring the files and folders.
- Syntax errors in programming of HTML and CSS.

## Reflections

- I learned how different programming languages play different roles like how HTML is responsible for structure, CSS for appearance and JavaScript for behavior. Additionally I learned to run an extension in Chrome.

# Day 3(July 1,2026)

## Objectives

- Make the browser read the URL.
- Display it along with the status of the browser.

## Completed

- Added the tabs permission.
- Updated the popup window.
- Used the Chrome Tabs API

## Challenges

- Understanding new JavaScript code.

## Reflections

- I learned how the popup communicates with the browser to retrieve live data and how codes also need time to run. 


# Day 4(July 2,2026)

## Objectives

- Introduce an Observation Layer.
- Separating data collection into its own module.

## Completed

- Implemented new function getCurrentObservation()
- Updated popup to display the website, protocol and connection status.

## Challenges

- Syntax error and misspellings.
- New links couldn't communicate wth other modules.

## Reflections

- I learned that files communicate using import and export modules, which allows different files to have clear communication. 

# Day 5(July 3,2026)

## Objectives

- Build first analysis engine.

## Completed

- Designed and implemented new fucntion analyzeObservation().
- Introduced new popup-winodow with risk score.

## Challenges

- New anaylsis layer and observation layer got overlapped, making it a bit difficult to adjust.

## Reflections

- I learned that instead of just displaying whether a webpage is safe or unsafe, keeping a risk score and telling the user why it made that decision can help the user more.

# Day 6(July 5,2026)

## Objectives

- Refactor the Analysis Layer into modular heurisitc functions.

## Completed

- Implemented URL length detection.
- Implemented IPv4 address detection using an expression.

## Challenges

- Testing the IP address heuristic was diffcult because visiting websites like 1.1.1.1 redirected the browser to one.one.one.one, meaning the externsion no longer saw an IP address

## Reflections

- I learned that regular expressions can be used to recognize patterns such as IPv4 addresses and refactoring improves software architecture without changing the program's behavior. 