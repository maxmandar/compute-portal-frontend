export interface Employee {
    id: number;
    username: string;
    fullname: string;
    email: string;
    title:string;
    department: "GTO";
    manager? : number;
  }
