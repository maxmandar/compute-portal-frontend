export interface Project {
    id?: number;
    name: string;
    description_objective: string;
}


export interface ProjectPermission {
    id?: number;
    project: number;
    username: number;
    role: string;
  }
  

export interface ProjectUserRole {
    id? : number;
    name: string;
    description: string;
}