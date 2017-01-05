Utegration Fiori Frontend Presentation
==========================
Presentation of SAP Fiori UI for Utegration 2017 company event.

To build
------

Install the dependencies with this command.

    npm install

Link to UI5 library
------

If you want to run it offline (say using SAP Web IDE personal edition), you can add a local local OpenUI5 library [source code](http://openui5.org/download.html) to this path:

    utegration-fiori-frontend/webapp/resources

or, if you prefer use CDN, you can go to `index.html` and change the bootstrap `src="resources/sap-ui-core.js"` to:

    src="https://openui5.hana.ondemand.com/resources/sap-ui-core.js"