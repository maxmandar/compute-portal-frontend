export interface Iid {
    id: number;
    steering_committee_members: { id: number; username: string }[];
    project_managers: { id: number; username: string }[];
    security_architect: { id: number; username: string };
    lead_technical_delivery_manager: { id: number; username: string };
    application_l3: { id: number; username: string };
    segment: { id: number; name: string };
    subsegment: { id: number; name: string };
    tno_head: { id: number; username: string };
    requestor: { id: number; username: string };
    watchers: { id: number; username: string }[];
    project_name: string;
    budget: string;
    objective: string;
    tagcc_date: string;
    itc_date: string;
    go_live_date: string;
    reviewer: number;
    verifier: number;
    approver: number;
  }
  

  export interface IidProject {
    name: string;
    description_objective: string;
  }

  export interface IidWithDetails extends Iid {
    name: string;
    description_objective: string;
  }

  export interface IidSegment {
    "id": number;
    "name": string;

  }

  export interface IidSubSegment {
    "id": number;
    "name": string

  }