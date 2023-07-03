export interface VmwareServerSize {
    "id": number,
    "name": string,
    "code": string,
    "vcpu": number,
    "ram_gb": number,
}


export const dummyVmwareServerSize: VmwareServerSize[] = 
  [
    {
        "id": 1,
        "name": "Vmware 1vCPU 8GB RAM",
        "code": "Vmware-1vCPU-8GBRAM",
        "vcpu": 1,
        "ram_gb": 8
    },
    {
        "id": 2,
        "name": "Vmware 2vCPU 16GB RAM",
        "code": "Vmware-2vCPU-16GBRAM",
        "vcpu": 2,
        "ram_gb": 16
    },
    {
        "id": 3,
        "name": "Vmware 3vCPU24 GBRAM",
        "code": "Vmware-3vCPU-24-GBRAM",
        "vcpu": 3,
        "ram_gb": 24
    },
    {
        "id": 4,
        "name": "Vmware 4vCPU32 GBRAM",
        "code": "Vmware-4vCPU-32-GBRAM",
        "vcpu": 4,
        "ram_gb": 32
    },
    {
        "id": 5,
        "name": "Vmware 5vCPU40 GBRAM",
        "code": "Vmware-5vCPU-40-GBRAM",
        "vcpu": 5,
        "ram_gb": 40
    },
    {
        "id": 6,
        "name": "Vmware 6vCPU48 GBRAM",
        "code": "Vmware-6vCPU-48-GBRAM",
        "vcpu": 6,
        "ram_gb": 48
    },
    {
        "id": 7,
        "name": "Vmware 7vCPU56 GBRAM",
        "code": "Vmware-7vCPU-56-GBRAM",
        "vcpu": 7,
        "ram_gb": 56
    },
    {
        "id": 8,
        "name": "Vmware 8vCPU64 GBRAM",
        "code": "Vmware-8vCPU-64-GBRAM",
        "vcpu": 8,
        "ram_gb": 64
    },
    {
        "id": 9,
        "name": "Vmware 9vCPU72 GBRAM",
        "code": "Vmware-9vCPU-72-GBRAM",
        "vcpu": 9,
        "ram_gb": 72
    },
    {
        "id": 10,
        "name": "Vmware 10vCPU80 GBRAM",
        "code": "Vmware-10vCPU-80-GBRAM",
        "vcpu": 10,
        "ram_gb": 80
    },
    {
        "id": 11,
        "name": "Vmware 11vCPU88 GBRAM",
        "code": "Vmware-11vCPU-88-GBRAM",
        "vcpu": 11,
        "ram_gb": 88
    },
    {
        "id": 12,
        "name": "Vmware 12vCPU96 GBRAM",
        "code": "Vmware-12vCPU-96-GBRAM",
        "vcpu": 12,
        "ram_gb": 96
    },
    {
        "id": 13,
        "name": "Vmware 13vCPU104 GBRAM",
        "code": "Vmware-13vCPU-104-GBRAM",
        "vcpu": 13,
        "ram_gb": 104
    },
    {
        "id": 14,
        "name": "Vmware 14vCPU112 GBRAM",
        "code": "Vmware-14vCPU-112-GBRAM",
        "vcpu": 14,
        "ram_gb": 112
    },
    {
        "id": 15,
        "name": "Vmware 15vCPU120 GBRAM",
        "code": "Vmware-15vCPU-120-GBRAM",
        "vcpu": 15,
        "ram_gb": 120
    },
    {
        "id": 16,
        "name": "Vmware 16vCPU128 GBRAM",
        "code": "Vmware-16vCPU-128-GBRAM",
        "vcpu": 16,
        "ram_gb": 128
    }
]

export interface VmwareServerOs {
    "id"?: number;
    "version": string;
    "code": string;
    "name": string;
    "description": string;
}


export const dummyVmwareServerOs: VmwareServerOs[] = [
    {
        "id": 1,
        "version": "Windows Server 2022",
        "code": "WINDOWS_SERVER_2022",
        "name": "Windows Server",
        "description" : "Windows Server 2022 Operating System"
 
    },
    {
        "id": 2,
        "version": "Red Hat 8",
        "code": "RED_HAT_8",
        "name": "Red Hat Enterprise Linux",
        "description" : "Red Hat Enterprise Linux 8 Operating System"
    },
    
]


export interface VmwareServerExtraRam {
    requestedExtraRam: boolean;
}