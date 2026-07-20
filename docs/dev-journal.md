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

# Day 7(July 6,2026)

## Objectives

- Improve Sentinel's URL Analysis Engine by adding new phisihing detection heurisitcs.

## Completed

- Implemented checkKeywords() to detect suspicious words commonly used in phisihing URLs.

- Fixed minor HTML and CSS issues, including formatting and styling errors.

## Challenges

- Template literals require backtick instead of quotation marks.

## Reflections

- I learned that phishing detection is based on collecting multiple weak indicators rather than relying on a single rule.

# Day 8(July 7,2026)

## Objectives

- Improve Sentinel;s architecture by making the Analysis Engine maintainable and easy to edit.

## Completed

- Refactored the Analysis Engine to execute heurisitcs using array.
- Created config.js to store risk values and configurable constants.

## Challenges

- Debugging the extension after introducing Javascript moduules.

## Reflections

- I learned that improving the architecture of a software can help the project grow without requiring major changes to existing code.

# Day 9(July 8,2026)

## Objectives

- Improve Sentinel by adding another phishing detection heurisitc.

## Completed

- Implemented a suspicious top-level(TLD) detection heuristic using a configurable list of TLDs stored in config.js

## Challenges

- Learned that detecting URL shortening services is not reliable with the current browser extension architecture because shoretened URLs redirect before Sentinel can analyze them.

## Reflections 

- I learned that while adding heurisitcs, keeping up to date heuristics is more efficient and relevant and outdated.

# Day 10(July 9,2026)

## Objectives

- Improve Sentinel's ability to detecting phishing websites through brand impersonation detection.

## Completed

- Implemented a brand impersonation heurisitc that detects domains containing trusted brand names while excluding their official domains.

## Challenges

- Debugged a NaN risk score caused by a mismatch between a configuration key and its usage in the analysis engine.

## Reflections

- I learned that a small typo can cause a major problem, even leading to an entire system failure.

# Day 11(July 10,2026)

## Objectives

- Improve Sentinel's findings system by replacing plain text with warnings with structured explanations.

## Completed

- Refactored all detection findings to use standarized objects containing an issue, reason, and recommendation.

## Challenges

- Multiple naming inconsistencies and debugging issues caused by mismatched idengifiers.

## Reflections

- I learned that maintaining consistent naming conventions and separating configuration from logic makes it easier to debug, maintain, and scale.

# Day 12(July 11,2026)

## Objectives

- Refactor Sentinel's analysis engine to eliminate repeated code using a centralized helper function.

## Completed

- Implemented an addFinding() helper function and updated all detection heuristics to use it for recording risk scores and findings.

## Challenges

- Fixed syntax and naming inconsistencies while refactoring multiple heuristics to use the new helper function.

## Reflections

- Centralizing repeated logic using helper functions makes the codebase cleaner, easier to maintain and more scalable for future featues.

# Day 13(July 12,2026)

## Objectives

- Establish an automated testing environment for Sentinel's analysis engine.

## Completed

- Configured Node.js, initialized the project for ES Modules, and created the first automated test to verify HTTPS detection without using the browser.

## Challenges

- Resolved project structure and module path issues while setting up the testing environment.

## Reflections

- I learned that automated tests provide a faster and more reliable way to verify functionality, reducing dependence on manual browser testing as Sentinel grows.

# Day 14(July 13,2026)

## Objectives

- Refactor Sentinel's automated testing system to support reusable and scalable test causes.

## Completed

- Implemented a reusable runTest() function and expanded the automated test suite by adding separate test cause for HTTP and HTTPS websites.

## Challenges

- Ensured the new test runner validated score, verdict, and finding count correctly while preserving the behavior of existing tests.

## Reflections

- I learned that reusable testing functions make it much easier to expand automated test coverage while keeping the test suite clean, consistent, and maintainable.

# Day 15(July 14,2026)

## Objectives

- Expand Sentinel's automated test suite to additional phishing detection heuristics.

## Completed

- Added automated tests for IP address detection and a combined brand impersonation scenario, increasing regression coverage across multiple interacting heurisitics.

## Challenges

- Investigated a failed brand impersonation test and determined that the expected test values were incorrect rather than the implementation.

## Reflections

- I learned that automated tests verify both implementation and assumptions and is just as important as writing the detection logic itself.

# Day 16(July 15,2026)

## Objective

- Refactor Sentinel into a modular detection architecture to prepare for AI integration.

## Completed

- Introduced a Detection Manager and new script engines, which is going to coordinate threat analysis.

## Challenges

- Encountered multiple module loading failures and syntax errors(SUSPICIOUS_TLD INSTEAD OF SUSPICIOUS_TLDS)

## Reflections

- I learned that architectural refactoring requires module organization and naming conventions, even a single letter can affect the perfomance of the entire system.

# Day 17(July 16,2026)

## Objective

- Introduce the AI Engine architecture into Sentinel and establish the foundation for a machine learning phishing detection pipeline.

## Completed

- Added a aiEngine.js file and implemented a feature extractor to convert website observations into numerical features.

## Challenges

- Encountered a module lading failure caused by a typo in the exported function.

## Reflections

- I learned that separating feature extractions and system orchestration creates a scalable architecture.

# Day 18(July 17,2026)

## Objective

- Establish the machine learning data pipeline by collecting real-world phishing aand benign datasets are preparing Sentinel for model training.

## Completed

- Created a structured machine learning workspace with different directories. Downloaded and integrated the PhishTank dataset and Tranco dataset for legitimate websites.

## Challenges

- Resolved dataset loading issues caused by filename mismatches and verified the preprocessing pipeline.

## Reflections

- I learned that machine learning midel depends heavily on the quality of its data pipeline and building reliable datasets is just as important as training the algorithm itself.

# Day 19(July 18, 2026)

## Objectives

- Transition Sentinel from a rule-based phishing detector into a machine learning-powered cybersecurity platform.
- Build the complete machine learning training pipeline and train the first AI models.

## Completed

- Processed and balanced phishing and benign URL datasets, producing a combined training dataset of 129,608 labeled samples.
- Designed and implemented Sentinel's first Python-based machine learning pipeline, including feature extraction, dataset preparation, and model training.
- Engineered the initial set of URL-based features for phishing classification.
- Trained the first Logistic Regression model, achieving a strong baseline with approximately 96.6% accuracy and an F1 score of approximately 96.6%.
- Trained a Random Forest classifier, which achieved significantly higher performance on the current evaluation dataset.
- Saved trained models for future integration into the Sentinel browser extension.
- Performed the first feature importance analysis, discovering that structural URL characteristics (such as path length, URL length, host length, and subdomain count) contributed far more to model predictions than keyword-based heuristics.

## Challenges

- Verified that unexpectedly high Random Forest performance should be treated cautiously rather than assumed to represent real-world performance.
- Recognized the need for stronger evaluation methods, including cross-validation and independent test datasets, to ensure the model generalizes beyond the current training data.

## Reflections

- I learned that building a machine learning system extends far beyond training a model; data engineering, feature engineering, evaluation methodology, and scientific validation are equally important components of a trustworthy cybersecurity solution.

# Day 20 (July 19, 2026)

## Objectives

- Improve Sentinel's machine learning feature engineering architecture.
- Increase the number of engineered URL features to better capture phishing characteristics.
## Completed

- Refactored the feature extraction system into a modular architecture, separating URL, character, domain, and path analysis into dedicated functions.
- Expanded Sentinel's engineered feature set from 12 to 26 cybersecurity-inspired features.

## Challenges

- Observed that the regenerated dataset contained one fewer sample than the previous version. Investigation showed the preprocessing pipeline remained internally consistent, highlighting the importance of verifying data integrity throughout machine learning workflows.

## Reflections

* I learned that reinforced that reliable machine learning is built through disciplined engineering rather than simply training more models. Modular feature engineering, reproducible experiments, and rigorous validation are just as important as achieving high accuracy.

