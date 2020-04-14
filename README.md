# angularjs
Demonstration of displaying tabular data in AngularJS

# Story
As the System User I would like to see active user’s personal data in a table so that I may make management decisions. I would like to filter, order and search the data to help me make those decisions.
## Definition of Done
1. A table bound to the data “user.json” showing the following columns
   - Name
   - Age
   - Registered Date, format dd-mm-yyyy dd:mm:ss
   - Email
   - Balance , format currency as pounds to 2 decimal places
   - Sorted by “Name” ascending by default
   - No paging

2. A “Search” input and label
   - Typing in the search input filters the table results by “Name”

3. A button named “Reset Balance” that sets all of users balances to zero and reflects this in the view. Restrictions:
   - Must use AngularJS
   - Responsive grid (using a 3 rd party framework is acceptable)
   - No restrictions on ECMA standards (whatever you’re comfortable with).
