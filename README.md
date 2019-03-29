# complex_services

This application presents a demo of the Dialog application. Dialog is a modular application for diabetes type 2 patients that uses complex services to enhance and monitor everyday processes such as physical activities and food consumtion of diabetes type 2 patients.

Dialog consists of a combination of hardware and software components, these components, also referred to as services, provide several data sources such as:

- metrics about food and drinks
- data about the patients google calendar
- physiological data from the fitbit hardware device
- bloodsugar values from the freestylelibre hardware 

In order to run this project please follow the stated steps below:

1. clone this repository, or if you have it as a zip extract files.
2. navigate into the folder via your terminal:

```bash
cd complex_services
```

3. we now need to install all the required dependencies by running the following command
```bash
npm install
```

4. in order for the google calendar API to work the application needs some extra information. 
Please navigate to this link: https://developers.google.com/calendar/quickstart/nodejs and click the blue button saying 'enable the google calendar api'.
After, click the button; 'download client configuration'. **IMPORTANT** Place this file in the ROOT of the project (same level as app.js).

5. We can now run the project by typing the following command:

```bash
npm start
```

6. When running the application and selecting the google calendar API (second page after stating name age and gender), please keep your terminal open as you will be prompted to give authorization via
your terminal. 

Click the url after the message: "Authorize this app by visiting this url" After authorizing, copy the code that is being given. You have to paste the code into your terminal where it says: 'Enter the code from that page here'. Et Voila; there are twenty events.

## Services used
> https://developer.nutritionix.com
> https://developers.google.com/calendar/
> https://dev.fitbit.com/getting-started/
> https://www.freestylelibre.nl/

