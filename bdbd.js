curl --location --request POST 'https://stage-sgs.api.abudhabi.ae/gateway/TammJourneyEdb/2.0/onboard' \
--header 'Accept: application/json; charset=utf-8' \
--header 'x-Gateway-APIKey: 379d8250-xxxxxxxxxxxx-xxxxxxx-xxxxx \
--header 'Authorization: Basic KioqOioqKg==' \
--data-raw '{
    {
        "profileInfo": {
            "firstName": "AAMER",
            "mobileNo": "500918889",
            "email": "kjmkd@gmail.com",
            "companyName": "1007883 SERVICES L.L.C",
            "countryCode": "00971",
            "lastName": "CALO",
            "companyAuthoriseUser": true,
            "shareholderCount": "1"
        },
        "businessInfo": {
            "depositSource": "Business proceeds",
            "monthlyTransaction": "200-500 Transactions",
            "annualTurnover": "AED 10 Million - AED 100 Million"
        },
        "addressInfo": {
            "city": "ABU DHABI",
            "country": "AE",
            "postalCode": "0",
            "emirates": "Abu_Dhabi",
            "address2": "أبوظبي -  أبوظبي",
            "address1": "  -  -  مبنى, مبنى"
        },
        "eidInfo": {
            "firstName": "AAMER",
            "lastName": "CALO",
            "dateExpiry": "2030-10-04",
            "dateIssue": "2014-03-30",
            "dob": "1991-01-02",
            "fullName": "AAMER ANEES CALO",
            "gender": "F",
            "identityNo": "784199090955555",
            "middleName": "ANEES",
            "nationality": "SY"
        },
        "tradeLicenseInfo": {
            "dateOfIncorporation": "2021-08-15",
            "countryOfIncorporation": "AE",
            "registrationType": "INCORPORATION_CERTIFICATE",
            "registrationNumber": "",
            "dateOfRegistration": "2021-08-15",
            "dnbNumber": "",
            "dateExpiry": "2022-08-14",
            "issuingAuthorityName": "ADDED",
            "tradeLicenseIssuingDate": "2021-08-15",
            "legalType": "limited liability co (llc)",
            "licenseActivity": [
                "Oil And Gas Fields Services "
            ],
            "identityNo": "CN-3014434"
        },
        "cddInfo": {
            "landline": "",
            "generalSourceOfFunds": "3455",
            "vatNumber": "3456",
            "accountPurpose": "sss",
            "missingVatReason": ""
        },
        "rrn": "927202202171645079414987"
    }
}'