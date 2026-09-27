import { LoginLocators } from "../Locators/LoginLocators";
import { RegisterPage } from "./RegisterPage";
import { Page } from "@playwright/test";


export class loginPage{
    constructor(private page:Page){
    // A constructor is a special method that is automatically called 
    // when an object is created and is mainly used to initialize object properties.

    }
    async loginPage(username:string,password:string){
    await this.page.click(LoginLocators.loginButton);

    await this.page.fill(LoginLocators.userNameInput, username);

    await this.page.fill(LoginLocators.passWordInput, password);

    await this.page.check(LoginLocators.rememberMe);

    await this.page.click(LoginLocators.Login);
        //await this.page.fill(LoginLocators.loginButton.)
    }
}