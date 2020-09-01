type int = number;
export type Vec3 = {};
export type Vec2 = {};

export interface Element {
	show(): void;
	hide(): void;
	getData(): string;
	getDataId(): string;
	getWidgetType(): string;
	getIntegrity(): number;
	getHitPoints(): number;
	getMaxHitPoints(): number;
	getId(): string,
	getMass(): number,
	getElementClass(): string,
	setSignalIn(plug: string, state: boolean): void,
	getSignalIn(plug: string): boolean,
	getSignalOut(plug: string): boolean,
}

export interface Container extends Element {
	getItemsMass(): number,
	getSelfMass(): number,
}

export declare enum Axis {
	Longitudinal = 0,
	Lateral = 1,
	Vertical = 2,
}

export declare enum CommandType {
	ByThrottle = 0,
	ByTargetSpeed = 1,
	hidden = 2,
}

export interface ControlUnit extends Element {
	exit(): void,
	setTimer(timerTagId: string, period: number): void,
	stopTimer(timerTagId: string): void,
	getAtmosphereDensity(): number,
	getClosestPlanetInfluence(): number,
	getMasterPlayerRelativePosition(): Vec3,
	getMasterPlayerId(): int,
	setEngineCommand(taglist: string, acceleration: number, angularAcceleration: number, keepForceCollinearity: boolean, keepTorqueCollinearity: boolean, priority1SubTags: string, priority2SubTags: string, priority3SubTags: string, toleranceRatioToStopCommand: number): void,
	setEngineThrust(taglist: string, thrust: number): void,
	setAxisCommandValue(axis: Axis, commandValue: number): void,
	getAxisCommandValue(axis: Axis): number,
	setupAxisCommandProperties(axis: Axis, commandType: CommandType): void,
	getControlMasterModeId(): int,
	cancelCurrentControlMasterMode(): void,
	isAnyLandingGearExtended(): boolean,
	extendLandingGears(): void,
	retractLandingGears(): void,
	isMouseControlActivated(): boolean,
	isMouseDirectControlActivated(): boolean,
	isMouseVirtualJoystickActivated(): boolean,
	isAnyHeadlightSwitchedOn(): boolean,
	switchOnHeadlights(): void,
	switchOffHeadlights(): void,
	isRemoteControlled(): boolean,
	activateGroundEngineAltitudeStabilization(targetAltitude: number): void,
	getSurfaceEngineAltitudeStabilization(): number,
	deactivateGroundEngineAltitudeStabilization(): void,
	computeGroundEngineAltitudeStabilizationCapabilities(): Vec2,
	getThrottle(): number,
}

export interface Databank extends Element {
	clear(): void,
	getNbKeys(): int,
	getKeys(): string,
	hasKey(key: string): boolean,
	setStringValue(key: string, val: string): void,
	getStringValue(key: string): string,
	setIntValue(key: string, val: int): void,
	getIntValue(key: string): int,
	setFloatValue(key: string, val: number): void,
	getFloatValue(key: string): number,
}

export interface Door extends Element {
	activate(): void,
	deactivate(): void,
	toggle(): void,
	getState(): boolean,
}

export interface Engine extends Element {
	activate(): void,
	deactivate(): void,
	toggle(): void,
	getState(): boolean,
	setThrust(thrust: number): void,
	getMaxThrustBase(): number,
	getCurrentMinThrust(): number,
	getMaxThrustEfficiency(): number,
	getThrust(): number,
	torqueAxis(): Vec3,
	thrustAxis(): Vec3,
	getDistanceToObstacle(): number,
	isOutOfFuel(): boolean,
	hasBrokenFuelTank(): boolean,
	getCurrentFuelRate(): number,
	getFuelRateEfficiency(): number,
	getT50(): number,
	isObstructed(): boolean,
	getObstructionFactor(): number,
	getTags(): string,
	setTags(tags: string): void,
	getFuelConsumption(): number,
}

export declare enum FireworksType {
	Ball = 0,
	Palmtree = 1,
	Ring = 2,
	Shower = 3,
}

export declare enum FireworksColor {
	Blue = 0,
	Gold = 1,
	Green = 2,
	Purple = 3,
	Red = 4,
	Silver = 5,
}

export interface Fireworks extends Element {
	activate(): void,
	setExplosionDelay(t: number): void,
	setLaunchSpeed(v: number): void,
	setType(type: FireworksType): void,
	setColor(color: FireworksColor): void,
}

export interface ForceField extends Element {
	activate(): void,
	deactivate(): void,
	toggle(): void,
	getState(): boolean,
}

export interface LandingGear extends Element {
	activate(): void,
	deactivate(): void,
	toggle(): void,
	getState(): boolean,
}

export interface Light extends Element {
	activate(): void,
	deactivate(): void,
	toggle(): void,
	getState(): boolean,
}

export interface AntiGravityGenerator extends Element {
	activate(): void,
	deactivate(): void,
	toggle(): void,
	getState(): boolean,
	setBaseAltitude(altitude: number): void,
	getBaseAltitude(): number,
}

export type IndustryStatus = "STOPPED" |
	"RUNNING" |
	"JAMMED_MISSING_INGREDIENT" |
	"JAMMED_OUTPUT_FULL" |
	"JAMMED_NO_OUTPUT_CONTAINER"

export interface Industry extends Element {
	start(): void,
	startAndMaintain(quantity: int): void,
	batchStart(quantity: int): void,
	softStop(): void,
	hardStop(): void,
	getStatus(): IndustryStatus,
	getCycleCountSinceStartup(): int,
	getEfficiency(): number,
	getUptime(): number,
}

export interface Counter extends Element {
	getCounterState(): int,
	next(): void,
}

export interface Emitter extends Element {
	send(channel: string, message: string): void,
	getRange(): number,
}

export interface Receiver extends Element {
	getRange(): number,
}