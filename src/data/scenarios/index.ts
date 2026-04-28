import { Scenario } from '../../types';
import { rentalScenario } from './rental';
import { travelScenario } from './travel';
import { jobScenario } from './job';

export const SCENARIOS: Scenario[] = [
  rentalScenario,
  travelScenario,
  jobScenario
];
