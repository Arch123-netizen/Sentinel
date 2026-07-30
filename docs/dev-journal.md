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

# Day 19(July 18,2026)

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

# Day 20(July 19,2026)

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


# Day 21(July 20,2026)

## Objectives

- Begin integrating Sentinel's machine learning pipeline into the browser extension.

## Completed

- Implemented a JavaScript feature extraction pipeline, introduced a Decision Engine to coordinate rule-based and AI analysis, validated feature extraction through testing, and restored the extension after resolving architectural issues caused by an attempted project restructuring.

## Challenges

- Encountered broken module imports after introducing a parallel project structure, requiring the architecture to be simplified back into a single consistent codebase.

## Reflections

- I learned that maintaining a single, consistent architecture is more important than introducing a better structure prematurely, and that validating feature extraction in both Python and JavaScript is essential before integrating machine learning into the browser extension.

# Day 22(July 21,2026)

## Objectives

- Convert Sentinel's trained machine learning model into a portable format suitable for deployment.

## Completed

- Successfully exported the trained Random Forest model from scikit-learn to ONNX, verified that the exported model produced the same predictions as the original Python model, integrated ONNX Runtime into the project, and prepared the browser extension for future local AI inference by adding the ONNX model and validating the required runtime assets.

## Challenges

- Encountered a feature mismatch between the saved model and the updated feature extractor, requiring the model to be retrained before exporting to ONNX.

## Reflections

- I learned that a trained model is only useful if it can be reliably deployed and verified in its target environment, and that validating model consistency after conversion is an essential part of a production machine learning pipeline.

# Day 23(July 22,2026)

## Objectives

- Integrate Sentinel's trained Random Forest model into the browser extension and enable local machine learning inference.

## Completed

- Successfully validated that the ONNX model produced matching predictions to the original scikit-learn model, attempted to integrate ONNX Runtime Web into Sentinel, investigated Chrome Manifest V3 Content Security Policy and WebAssembly compatibility issues, and ultimately restored Sentinel to the last stable committed version after determining that the browser-side ONNX integration was not yet reliable.

## Challenges

- Encountered repeated WebAssembly and ONNX Runtime Web errors caused by Content Security Policy restrictions, failed dynamic WASM module loading, and unavailable inference backends within the Chrome extension environment. The integration was rolled back to prevent destabilizing the working Sentinel extension.

## Reflections

- I learned that successfully converting and validating a machine learning model does not guarantee that it can be deployed directly in the target environment, and that deployment compatibility must be considered separately from model accuracy. 


# Day 24(July 23,2026)

## Objectives

- Strengthen Sentinel's rule-based phishing detection system by expanding heuristic coverage and validating its detection logic through automated tests.

## Completed

- Successfully expanded and validated Sentinel's rule-based detection system by adding automated tests for HTTP websites, HTTPS websites, IP addresses, brand impersonation, suspicious TLDs, suspicious keywords, compound suspicious URLs, and unusually long URLs, while resolving configuration inconsistencies and verifying that the browser extension works correctly.

## Challenges

- Encountered inconsistent configuration names for suspicious TLDs across Sentinel's analysis engine and browser extension, causing module import errors and a `NaN` risk score before the references were standardized.

## Reflections

* I learned that shared configuration interfaces must remain consistent across every component that depends on them, and that both automated tests and the actual deployed extension must be verified to ensure the entire system works correctly.

# Day 25(July 24,2026)

## Objectives

- Align Sentinel's JavaScript feature extraction pipeline with the 25-feature schema used to train the Random Forest model.

## Completed

- Expanded the JavaScript feature extractor from 12 to 25 features, matched the feature definitions and ordering used by the Python training pipeline, and created a feature contract test to verify that all 25 features are present in the correct order while confirming that the existing analysis and decision engine tests continue to pass.

## Challenges

- Discovered that the existing JavaScript feature extractor produced only 12 features while the Random Forest model had been trained using 25 features, requiring the feature extraction pipeline to be expanded and aligned before the AI model could be safely integrated.

## Reflections

- I learned that a machine learning model depends on a strict feature contract between training and inference, and that verifying feature definitions and ordering before deployment is essential for ensuring that the model receives the same type of data it was trained on.

# Day 26(July 25,2026)

## Objectives

- Verify that Sentinel's JavaScript feature extraction pipeline produces the same 25-feature vectors as the Python training pipeline.

## Completed

- Built an automated Python-to-JavaScript feature parity system, corrected a path-length normalization mismatch between Python and JavaScript URL parsing, generated a canonical fixture containing 10 representative URLs, and verified that all 10 URLs produced matching feature vectors while the feature schema, analysis tests, and decision engine tests continued to pass.

## Challenges

- Discovered that Python's `urlparse()` represented the path of a domain-only URL as an empty string while JavaScript's `URL` API represented it as `/`, requiring path normalization in the JavaScript feature extractor to ensure identical feature vectors between training and browser inference.

## Reflections

- I learned that successful machine learning deployment requires more than a trained model: the entire data pipeline must remain consistent between training and inference, and automated parity testing provides a reliable way to detect subtle differences before they affect model predictions.

# Day 27(July 26,2026)

## Objectives

- Improve Sentinel's machine learning dataset and validate the Random Forest V2 model and its ONNX deployment pipeline.

## Completed

- Built a balanced V2 dataset using improved benign and phishing URL sources, containing 64,786 benign URLs and 64,786 phishing URLs. Retrained the Random Forest V2 model, achieving an F1 score of 0.9807, then validated the model against known benign domains. Exported the trained model to ONNX, successfully loaded it with ONNX Runtime, and verified that Python and ONNX predictions and probabilities matched across a representative test suite.

## Challenges

- Discovered that the initial dataset caused the model to incorrectly classify clearly benign URLs as phishing, revealing a significant dataset-quality and distribution problem despite the extremely high 99.98% evaluation score. Rebuilt the dataset using a more reliable benign source and retrained the model. During ONNX integration, also encountered prediction mismatches caused by differences in how ONNX Runtime returned probability outputs, requiring the probability extraction and prediction logic to be corrected.

## Reflections
 
- I learned that a high model accuracy score is not enough to demonstrate that a cybersecurity model is reliable. Dataset quality, representative evaluation samples, and real-world validation are essential. I also learned that deploying a machine learning model requires verifying that the exported model behaves consistently with the original model, making Python-to-ONNX parity testing an important part of Sentinel's production pipeline.

# Day 28(July 27,2026)

## Objectives

- Integrate the Random Forest V2 model into Sentinel's AI inference pipeline, validate the ONNX deployment, and complete end-to-end testing of the rule-based and AI detection systems.

## Completed

- Exported the Random Forest V2 model to ONNX and verified that the exported model contains the expected 25 input features and produces the expected label and probability outputs. Successfully configured `onnxruntime-node` and loaded the model within Sentinel's Node.js testing environment. Connected the ONNX model to the AI engine and integrated it with the decision engine, allowing Sentinel to perform both rule-based and AI-based analysis on URLs. Tested the complete pipeline across multiple safe and suspicious URLs and confirmed that the rule-based engine continues to produce consistent risk scores, findings, and recommendations. Identified and resolved several integration issues involving ONNX runtime compatibility, model output handling, and module exports.

## Challenges

- Discovered that although the ONNX model successfully loads and executes inference, its predictions do not consistently match the original Python Random Forest model. Several clearly benign URLs, including `example.com`, `google.com`, `github.com`, `microsoft.com`, and `apple.com`, were incorrectly classified as phishing by the AI engine. This revealed a likely mismatch between the features used during model training and the feature vectors supplied during JavaScript inference, potentially involving feature ordering, feature calculation, or data representation. The issue has been isolated to the AI inference pipeline, while the rule-based detection system remains functional and reliable.

## Reflections

- I learned that successfully deploying a machine learning model is not enough to guarantee that the deployed system is behaving correctly. The training and inference pipelines must use identical feature definitions, ordering, and data representations. I also learned that model validation must include real-world representative examples rather than relying solely on evaluation metrics. The next step is to systematically compare the Python training features with the JavaScript inference features and establish complete Python-to-ONNX-to-JavaScript prediction parity before relying on the AI engine for Sentinel's final decisions.

# Day 29(July 28,2026)

## Objectives

- Stabilize Sentinel's browser extension after the failed ONNX Runtime Web integration, validate the rule-based detection pipeline, and verify that the extension remains functional without the AI inference system.

## Completed

- Identified and resolved the ONNX Runtime Web and WebAssembly deployment issues that prevented the Sentinel popup from loading correctly, restoring the extension to a stable working state. Removed the unstable browser-side AI inference path from the active extension architecture while preserving the trained Random Forest V2 model and its training pipeline for future integration. Validated all 25 machine-learning features against the training schema and successfully passed feature parity testing across 10 representative URLs. Re-ran the analysis and decision engine tests, confirming that HTTP and HTTPS detection, IP addresses, brand impersonation, suspicious TLDs, suspicious keywords, compound suspicious URLs, and long URLs are functioning correctly. Tested the Sentinel popup directly in the browser across multiple safe and suspicious URLs and confirmed that it correctly displays the website, protocol, secure connection status, risk score, verdict, findings, explanations, and recommendations. Added the custom extension icon structure and configured the manifest to load the Sentinel icon.

## Challenges

- The browser deployment of the Random Forest V2 model using ONNX Runtime Web encountered significant WebAssembly and Content Security Policy compatibility issues, resulting in failed WASM loading and the absence of an available inference backend. Continuing to debug the deployment would have consumed too much time without guaranteeing a reliable result, so the browser AI integration was removed from the active architecture. Additional testing revealed that the rule engine currently does not display executable file extensions as a user-facing finding, despite executable extensions being included in the machine-learning feature extraction pipeline.

## Reflections

- I learned that a machine-learning system can be successfully trained and exported while still being difficult to deploy reliably in a real browser environment. I also learned the importance of maintaining a stable fallback architecture when an experimental component fails, allowing Sentinel's core rule-based detection system to remain functional while preserving the AI model for future development. Today's testing reinforced the value of automated feature parity and integration tests, as they allowed the system to be validated systematically rather than relying only on manual browser testing. Sentinel now has a stable foundation for the final Day 30 sprint, which should focus on final hardening, UI improvements, comprehensive testing, documentation, and release preparation rather than introducing another major architectural change.


# Day 30(July 29,2026)

## Objectives

- Complete the final hardening and validation of Sentinel's browser extension, verify that all core detection systems function correctly, and prepare the project for the end of the initial 30-day development sprint.

## Completed

- Fixed the Sentinel popup's protocol display so that protocols are presented correctly without the trailing colon. Added executable and archive file-extension detection to the rule-based analysis engine, including a dedicated risk weight and detailed finding explanation with a security recommendation. Successfully validated the new detection capability through both automated decision-engine testing and direct browser testing. Completed the final automated validation of Sentinel's feature extraction and detection systems, with all 25 machine-learning features maintaining parity with the training schema and all 10 feature-parity URLs passing successfully. Confirmed that the rule-based analysis tests passed across HTTP and HTTPS websites, IP addresses, brand impersonation, suspicious TLDs, suspicious keywords, compound suspicious URLs, and long URLs. Completed the final decision-engine test across safe and suspicious URLs and verified that executable file extensions are correctly detected and reported. Confirmed that the Sentinel browser popup correctly displays website information, protocol, secure connection status, risk score, verdict, findings, explanations, and recommendations. Committed and pushed the final Day 30 changes to GitHub and verified that the repository's working tree is clean.

## Challenges

- The final stage focused primarily on stability rather than introducing major new functionality. The Random Forest V2 AI inference system remains outside the active browser decision pipeline because the ONNX Runtime Web deployment encountered browser WebAssembly and Content Security Policy compatibility issues. Rather than risk destabilizing the completed extension, the AI inference system was preserved as experimental work while the reliable rule-based engine remained the active detection mechanism. The final sprint therefore required balancing the original AI-based vision of Sentinel with the practical need to deliver a stable and functional browser extension.

## Reflections

- Completing the 30-day Sentinel sprint demonstrated that building a cybersecurity product requires more than implementing individual features. The project required designing an architecture, developing a feature-extraction pipeline, validating parity between training and inference systems, building explainable detection rules, testing edge cases, integrating the system into a browser extension, debugging deployment issues, and maintaining a stable fallback when experimental technology failed. The most important lesson from the final day was that a reliable security product is more valuable than an unfinished system that depends on unstable components. Sentinel now has a functional and tested foundation that can be extended in future development phases. The next phase should focus on improving detection accuracy, expanding real-world testing, strengthening the architecture, and revisiting AI integration only when it can be deployed reliably and validated end-to-end.

# Day 31(July 30,2026)

## Objectives

- Integrate Sentinel's Random Forest V2 AI engine into the active detection pipeline.

## Completed

- Integrated the Random Forest V2 ONNX model with Sentinel through a local Node.js AI server.
- Connected the AI engine and rule-based engine through the Decision Engine.


## Challenges

- Integrated multiple components including ONNX inference, the AI server, feature extraction, the Decision Engine, and the browser extension.

## Reflections

- I learned that integrating AI into a cybersecurity product requires reliable coordination between the model, feature pipeline, inference system, decision logic, and user interface.

