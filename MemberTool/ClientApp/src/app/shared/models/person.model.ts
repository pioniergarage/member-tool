import {PGRole} from './pg-role.model';

export interface Person {

  id: number;
  name: string;
  currentPGRole: PGRole;
  memberSince: string;
  userImgPath: string;
  backgroundImgPath: string;
  pgRoles: PGRole[];
  mail: string;
  description: string;
  linkedIn: string;
}
