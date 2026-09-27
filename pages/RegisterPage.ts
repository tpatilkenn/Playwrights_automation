import { Page } from '@playwright/test';
import {RegisterPageLocators} from '../Locators/RegisterPageLocators.ts';
import { LoginLocators } from '../Locators/LoginLocators.ts';
import { FirstName, LastName } from '../utils/envConfig.ts';

export class RegisterPage{
    constructor (private page :Page){
  
    }
     async registerPage(Email:string,Password:string,confirmPassword:string,
     RegisterButtonIcon:any,GenderName:any,FirstName:any,LastName:any,RegisterButton:any
      ){
     
        await this.page.click(RegisterPageLocators.RegisterButtonIcon,RegisterButtonIcon);
        await this.page.check(RegisterPageLocators.GenderName,GenderName);
        await this.page.fill(RegisterPageLocators.FirstName, FirstName);
        await this.page.fill(RegisterPageLocators.LastName, LastName);
        // await this.page.locator(RegisterPageLocators.FirstName,FirstName);
        // await this.page.locator(RegisterPageLocators.LastName,LastName);
        await this.page.fill(RegisterPageLocators.Email,Email);
        await this.page.fill(RegisterPageLocators.Password,Password);
        await this.page.fill(RegisterPageLocators.confirmPassword,confirmPassword);
        await this.page.click(RegisterPageLocators.RegisterButton,RegisterButton);

     }

   //   async login(username:string,password:string){

      
   //      await this.page.click(".ico-login");
   //      await this.page.fill(LoginLocators.userNameInput,username);
   //      await this.page.fill(LoginLocators.userNameInput,password);
   //      await this.page.check(LoginLocators.rememberMe);
   //      await this.page.click(LoginLocators.Login);
   //      //await this.page.fill(LoginLocators.loginButton.)
   //  } 



     }
     
