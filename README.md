# provincial_election_static

Can be connected directly to an S3 bucket.

How to Navigate: App uses URL endpoints to navigate between election widgets: Layout: https://domain.com/path/to/widget/#/widget_type/prov/year/riding

The riding (not case sensitive) is only used in map widget to zoom in on specific ridings on widget load.

Data is organized by province, then year. With directories for headshots, and data files.

Requires 4 files to work per election:

"prov_config.json" - Includes title, seat total, majority total and data refresh timer variables. Additional variables can be added as needed.
"prov_partyResults.json" - Overall party results via the "api/party/result/overall/(mains)/json" flow endpoint
"prov_declaration.json" - Declarations results via the "api/OverallResult/?format=json" flow endpoint
"prov_ridingResults.json" - Riding/Candidate results via the "api/CandidateByRiding/?json=true" flow endpoint
Filtered Results (NEW!): -within each year directory, add a directory named "filtered". -updated electionconfig.json with filter label, query url (that is pushed via BladeRunner. This URL is not actually used by widget, there for organization only) and filename to be stored in the filtered directory. -add as many filters as needed by adding a new object to the filtered results array.

Set up a new year of data:

Create a directory in province's data folder for the desired year.
- add the required files as stated above.
- update the config to include: 
  - Election Title, 
  - Total Seats, 
  - seats for Majority Win, 
  - Timer for interval between new data fetches
  - initBounds,maxBounds (ignore for now)
  - Filtered Results List if applicable. Requires "label", "URL" (to be used with BLADErunner), and "filename" fields. Add these files to a directory labeled "filtered" in the election directory
navigate to the new year by changing the province/year in the endpoint of the widget to the desired year: eg. https://domain.com/#/map/prov/year
