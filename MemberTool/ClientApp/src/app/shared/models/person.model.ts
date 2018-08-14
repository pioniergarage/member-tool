import {PGRole} from './pg-role.model';

export class Person {

  constructor(
    public id: number,
    public name: string,
    public currentPGRole: PGRole,
    public memberSince: string,
    public userImgPath: string,
    public backgroundImgPath: string,
    public pgRoles: PGRole[],
    public mail: string,
    public description: string,
    public linkedIn: string
  ) {}
}
