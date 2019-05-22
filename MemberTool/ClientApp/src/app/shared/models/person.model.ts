import {PGRole} from './pg-role.model';

export interface Person {

  id: number;
  name: string;
  currentPGRole: PGRole;
  memberSince: string;
  userImgPath: string;
  backgroundImgPath: string;
  pgRoles: PGRole[];
  email: string;
  description: string;
  linkedIn: string;
}
