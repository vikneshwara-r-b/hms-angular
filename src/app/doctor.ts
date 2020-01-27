export class Doctor {
    pkUserId: number;
    userUsername:string;
    userPassword:string;
    userEmail:string;
    userPhonenumber:string;
    userFirstname: string;
    userLastname: string;
    userAge: number;
    userCity:string;
    userState:string;
    userStreet:string;
    fkRoleId:number;
    userIsactive:number;
	pkDoctorId:number;
	doctorExperience:number;
	doctorSpeciality:string;
	fkUserId:number;
	doctorIsactive:number;
}
