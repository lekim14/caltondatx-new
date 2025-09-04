export interface I_PeopleAnalytics{
    totalViewers: number;
    otsDuration: number;
    totalOTS: number;
    watcherDurations: number;
    totalWatcher: number;
    engagementRate: number;
    averageAttentionTime: number;
}

export interface I_VehicleAnalytics{
    totalCount: number;
    totalSpeed: number;
    totalCountBySpeed: number;
    totalDuration: number;
    averageSpeed: number;
    averageDwellTime: number;
}
export interface I_VehicleType{
    type: VehicleTypes;
    total: number;
}
export enum VehicleTypes{
    CAR = 'Car',
    VAN = 'Van',
    TRUCK = 'Truck',
    BUS = 'Bus',
    MOTORCYCLE = 'Motorcycle',
    TRAIN = 'Train'
}

export enum AgeGroup{
    CHILD = 'Child',
    TEEN = 'Teen',
    YOUNG_ADULT = 'Young Adult',
    ADULT = 'Adult',
    MIDDLE_AGE = 'Middle Age',
    SENIOR = 'Senior'
}
export interface I_AgeGroup{
    ageGroup: AgeGroup;
    total: number;
}