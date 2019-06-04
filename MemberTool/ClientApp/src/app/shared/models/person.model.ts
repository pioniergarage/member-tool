import { PGRole } from './pg-role.model';
import { Project } from './project.model';

export interface Person {

  id: number;
  name: string;
  currentPGRole: PGRole;
  memberSince: string;
  userImgPath: string;
  // backgroundImgPath: string; // no longer necessary
  currentProjects: Project[];
  pgRoles: PGRole[];
  email: string;
  description: string;
  linkedIn: string;
  location: string;

  // ToDo: answers are not used yet
}
