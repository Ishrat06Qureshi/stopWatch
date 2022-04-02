 function getOnboardusersPayload(props) {
    const { icaInformationObject , enterCompanyDetailsForm } = props;
    const currentMonth = (new Date().getMonth()+1).toString().padStart(2,0);
    const currentDate = new Date().getDate().toString().padStart(2,0);
    const {
    firstNameEnglish: icaPersonNameEnglish = '' ,
    firstNameArabic: icaPersonNameArabic = '',
    fullEnglishName: icaPersonNameFullEnglish = '',
    fullArabicName: icaPersonNameFullArabic = '' ,
    familyNameEnglish: icaLastNameEnglish = '' ,
    familyNameArabic: icaLastNameArabic = '',
    secondNameEnglish: icaPersonNameMiddleEnglish = '',
    secondNameArabic: icaPersonNameMiddleArabic = '' } =icaInformationObject.personName || {};
    const { 
    enDesc: nationalityEnglish = '' ,
    arDesc: nationalityArabic = ''} = icaInformationObject.nationality || {};
    const {
      issuDate: identityCardIssue = '',
      expiryDate: identityCardExpiry = '',
      number: identityCardNumber = '',
    } = icaInformationObject.identityCard || {};
    const {
      enDesc: icaGender = ''
    } = icaInformationObject.gender || {};
    const {dateOfBirth : icaDateOfBirth = ''} = icaInformationObject || {};
    // const {
    //     coEmail : email = '',
    //     coProfileCountryCode: countryCode = '',
    //     shareholderCount: shareCount = '',
    //     depositResource : depositResourceName = '',
    //     monthlyTransaction: monthlyTransDetails = '',
    //     annualTurnOver : annual = '',
    //     fundsource : generalFund = '',
    //     vatNumber : vat = '',
    //     city : coCity = '',
    //     country:coCountry = '',
    //     postalCode: coPostalCode = '',
    //     addressOne : coAdressOne = '',
    //     emirates: coEmirates = '',
    //     coRegistrationType : registrationType = '',
    //     resgistrationNumber : coRegistrationNumber = ''
    // } = enterCompanyDetailsForm || {};
    //    const {
        // establishment_Date: incorpDate = '',
        // countryOriginAr: incorpCountry = '',
        // expiryDate : tradeExpiryDate = '',
        // legalFormEng : legal = '',
        // activitiesName : businessActvities = [],
        // issueDate : tradeIssueDate = ''
    //    } = licenceObj || {};
     const payload = {
      profileInfo: {
        firstName: 'ded6',
        mobileNo: coProfileMobileNumber,
        email: email,
        companyName: 'dedSix',
        countryCode: countryCode,
        lastName: 'user',
        companyAuthoriseUser: true,
        shareholderCount: shareCount,
      },
      businessInfo: {
        depositSource: depositResourceName,
        monthlyTransaction: monthlyTransDetails,
        annualTurnover: annual,
      },
      addressInfo: {
        city: coCity,
        country: coCountry,
        postalCode: coPostalCode,
        address1: coAdressOne,
        emirates: coEmirates,
        address2: '',
      },
      eidInfoDTO: {
        firstName:
          props.locale === 'en' ? icaPersonNameEnglish : icaPersonNameArabic,
        lastName: props.locale === 'en' ? icaLastNameEnglish : icaLastNameArabic,
        nationality:
          props.locale === 'en' ? nationalityEnglish : nationalityArabic,
        dateExpiry: identityCardIssue.slice(0, identityCardIssue.indexOf('T')),
        dateIssue: identityCardExpiry.slice(0, identityCardExpiry.indexOf('T')),
        dob:icaDateOfBirth.slice(0, identityCardExpiry.indexOf('T')) ,
        fullName:  props.locale === 'en'
            ? icaPersonNameFullEnglish
            : icaPersonNameFullArabic,
        gender: icaGender.toLowerCase() === 'female' ? 'F':'M',
        identityNo: identityCardNumber,
        middleName:
          props.locale === 'en'
            ? icaPersonNameMiddleEnglish
            : icaPersonNameMiddleArabic,
      },
      tradeLicenseInfo: {
        dateOfIncorporation: incorpDate.split('T')[0],
        countryOfIncorporation: incorpCountry,
        registrationType: registrationType,
        registrationNumber: coRegistrationNumber,
        dateOfRegistration: '',
        dnbNumber: '',
        dateExpiry: tradeExpiryDate.split('T')[0],
        identityNo: 'TL969303336',
        issuingAuthorityName: 'YAP',
        tradeLicenseIssuingDate: tradeIssueDate.split('T')[0],
        legalType: legal,
        licenseActivity: businessActvities.activities
        .map((elem) => {
          return elem.activityNameEng;
        })
        .join(','),
    //   },
      cddInfo: {
        landline: '',
        generalSourceOfFunds: generalFund,
        vatNumber: vat,
      },
    
      rrn: `927${new Date().getFullYear()}${currentMonth}${currentDate}${new Date().getTime()}`
    };
    return payload;
  }
 const props = {
    icaInformationObject :{
        "unifiedNumber": 3450480,
        "identityCard": {
            "number": 784199275721514,
            "issuDate": "2014-06-17T00:00:00",
            "expiryDate": "2016-05-21T00:00:00"
        },
        "nationality": {
            "id": 11,
            "arDesc": "nationality arabic",
            "enDesc": "JORDAN"
        },
        
        "gender": {
            "id": 2,
            "arDesc": "arDesc",
            "enDesc": "FEMALE"
        },
        "dateOfBirth": "1992-07-21T00:00:00"
    }
 }



console.log(getOnboardusersPayload(props))
