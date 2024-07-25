import conf from '../conf/conf.js';
import { Client, Account, ID } from 'appwrite';

export class AuthService {
    // making properties
    // since methods are directly made over them
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }
    // whenever object made, this contructor will execute

    // following are methods over those properties
    async createAccount({email, password, name}) {
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            // await till account created
            if(userAccount)
            {
                // call another method
                return this.login({email, password});
            }
            else
            {
                return userAccount;
            }
        } catch(error) {
            throw error;
        }
    }
    // won't go further until await statement executed

    async login({email, password}) {
        try{
            return await this.account.createEmailSession(email, password);
        } catch(error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try{
            return await this.account.get();
        } catch(error) {
            // throw error;
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }
        return null;
    }

    async logout() {
        try{
            await this.account.deleteSessions();
            // logout from all sessions the account is currently in
        } catch(error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }
    // delete session is basically logout

    // login is making a new session basically
}

const authService = new AuthService();
// whenever someone makes an object, then only the client must be made and account must be made accessible

export default authService;
// instead export object itself

// export default AuthService;
// exported class, whoever accesses this needs to make object out of this to access the methods