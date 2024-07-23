export interface Task {
    _id?: string
    description: string,
    startDate: Date,
    endDate: Date,
    status: statusas
}

export enum statusas{
    nepradėta = 'nepradėta', 
    vykdoma = 'vykdoma',
    pabaigta = 'pabaigta', 
    nutraukta = 'nutraukta'
}

