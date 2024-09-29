import { PlanType } from "./BillingCard";
import { plans } from "./plans";

const rangeDivider: number = 100;
const discountRate: number = 0.25;

const defaultPlan: PlanType = plans[3];
const defaultSliderRange: number = 300;

export { rangeDivider, discountRate, defaultPlan, defaultSliderRange };
