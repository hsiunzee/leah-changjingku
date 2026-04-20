import { Scenario } from '../../types';
import { rentalScenario } from './rental';
import { travelScenario } from './travel';

export const SCENARIOS: Scenario[] = [
  rentalScenario,
  travelScenario
];
