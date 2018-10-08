export class Scoreboard {
    idStudent: string;
    fullname: string;
    math: number;
    physical: number;
    chemistry: number;
    constructor(point?: Scoreboard){
        if(point) {
            this.idStudent = point.idStudent;
            this.fullname = point.fullname;
            this.math =  point.math;
            this.physical = point.physical ;
            this.chemistry = point.chemistry;
            return;
        }
        this.fullname = '';
        this.math =  0;
        this.physical = 0 ;
        this.chemistry = 0
        
    }

    public getTotal(): number{
        return this.math + this.physical + this.chemistry;
    }
}