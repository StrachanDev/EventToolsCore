import { observable, computed, action } from 'mobx';

export class User {
    private static anonymous: string = 'anonymous';

    constructor(userType?:string) {
        this.UserType = userType || User.anonymous;
    }
    @computed
    public get IsAnonymous(): boolean {
        return this.UserType === User.anonymous;
    }

    @observable
    public UserType: string;
}

export class UserService {
    constructor() {
        this.LoggedOnUser = new User();
    }

    @observable
    public LoggedOnUser: User;
}