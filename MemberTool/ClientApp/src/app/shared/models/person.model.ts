import { PGRole } from './pg-role.model';
import { Project } from './project.model';

export interface Person {

  id: number;
  name: string;
  currentPGRole: PGRole;
  memberSince: string;
  userImgPath: string;
  currentProjects: Project[];
  pgRoles: PGRole[];
  email: string;
  linkedIn: string;
  location: string;
}
