
export class User {
    public id: string;
    public firstname: string;
    public lastname: string;
    public dateofbirth: Date;
    public totalPoint: number;

    constructor(_user: User){
        this.id = _user.id;
        this.firstname = _user.firstname;
        this.lastname = _user.lastname;
        this.dateofbirth = _user.dateofbirth;
        this.totalPoint = _user.totalPoint;
    }
}