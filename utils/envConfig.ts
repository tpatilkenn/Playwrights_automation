const ENV_URL = {

    dev : "https://demowebshop.tricentis.com/login",
    QA : "https://demowebshop.tricentis.com/login",
    Stage :"https://demowebshop.tricentis.com/login",
    prod: "https://demowebshop.tricentis.com/login"

};


const ENV = process.env.ENV  || "prod" 
export const BASE_URL = (ENV_URL as any)[ENV]
// how can execute the specific environments ---------------important
// commands -  $env:ENV="qa"; npx playwright test tests/E2E


//export const BASE_URL = 'https://demowebshop.tricentis.com/login';
export const Email = 'Register0123@gmail.com';
export const PASSWORD = 'Demo@123';
export const ConfirmPassword = 'Demo@123';
export const FirstName = 'Denial';
export const LastName = 'Denial';
export const GenderName = '';
export const RegisterButtonIcon = '';





//Register0123@gmail.com  ...> username
// Password - > Demo@123


// automationexercise.com  -- > this web site is very used full for automation and execirse.

