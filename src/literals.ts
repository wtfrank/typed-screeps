/**
 * This file creates literal versions of many of the constants
 * It should be kept in sync with constants.ts
 */

//// Extras

type Terrain = "plain" | "swamp" | "wall";

////////
// Return Codes

type ScreepsReturnCode =
  OK |
  ERR_NOT_OWNER |
  ERR_NO_PATH |
  ERR_BUSY |
  ERR_NOT_FOUND |
  ERR_NOT_ENOUGH_RESOURCES |
  ERR_NOT_ENOUGH_ENERGY |
  ERR_INVALID_TARGET |
  ERR_FULL |
  ERR_NOT_IN_RANGE |
  ERR_INVALID_ARGS |
  ERR_TIRED |
  ERR_NO_BODYPART |
  ERR_NOT_ENOUGH_EXTENSIONS |
  ERR_RCL_NOT_ENOUGH |
  ERR_GCL_NOT_ENOUGH

type OK = 0;
type ERR_NOT_OWNER = -1;
type ERR_NO_PATH = -2;
type ERR_NAME_EXISTS = -3;
type ERR_BUSY = -4;
type ERR_NOT_FOUND = -5;
type ERR_NOT_ENOUGH_RESOURCES = -6;
type ERR_NOT_ENOUGH_ENERGY = -6;
type ERR_INVALID_TARGET = -7;
type ERR_FULL = -8;
type ERR_NOT_IN_RANGE = -9;
type ERR_INVALID_ARGS = -10;
type ERR_TIRED = -11;
type ERR_NO_BODYPART = -12;
type ERR_NOT_ENOUGH_EXTENSIONS = -6;
type ERR_RCL_NOT_ENOUGH = -14;
type ERR_GCL_NOT_ENOUGH = -15;

type CreepActionReturnCode =
  OK |
  ERR_NOT_OWNER |
  ERR_BUSY |
  ERR_INVALID_TARGET |
  ERR_NOT_IN_RANGE |
  ERR_NO_BODYPART

type CreepMoveReturnCode =
  OK |
  ERR_NOT_OWNER |
  ERR_BUSY |
  ERR_TIRED |
  ERR_NO_BODYPART

////////
// Find Constants

type ExitConstant =
  FIND_EXIT_TOP |
  FIND_EXIT_RIGHT |
  FIND_EXIT_BOTTOM |
  FIND_EXIT_LEFT

type FindConstant =
  FIND_EXIT_TOP |
  FIND_EXIT_RIGHT |
  FIND_EXIT_BOTTOM |
  FIND_EXIT_LEFT |
  FIND_EXIT |
  FIND_CREEPS |
  FIND_MY_CREEPS |
  FIND_HOSTILE_CREEPS |
  FIND_SOURCES_ACTIVE |
  FIND_SOURCES |
  FIND_DROPPED_RESOURCES |
  FIND_STRUCTURES |
  FIND_MY_STRUCTURES |
  FIND_HOSTILE_STRUCTURES |
  FIND_FLAGS |
  FIND_CONSTRUCTION_SITES |
  FIND_MY_SPAWNS |
  FIND_HOSTILE_SPAWNS |
  FIND_MY_CONSTRUCTION_SITES |
  FIND_HOSTILE_CONSTRUCTION_SITES |
  FIND_MINERALS |
  FIND_NUKES

type FIND_EXIT_TOP = 1;
type FIND_EXIT_RIGHT = 3;
type FIND_EXIT_BOTTOM = 5;
type FIND_EXIT_LEFT = 7;
type FIND_EXIT = 10;
type FIND_CREEPS = 101;
type FIND_MY_CREEPS = 102;
type FIND_HOSTILE_CREEPS = 103;
type FIND_SOURCES_ACTIVE = 104;
type FIND_SOURCES = 105;
type FIND_DROPPED_RESOURCES = 106;
type FIND_STRUCTURES = 107;
type FIND_MY_STRUCTURES = 108;
type FIND_HOSTILE_STRUCTURES = 109;
type FIND_FLAGS = 110;
type FIND_CONSTRUCTION_SITES = 111;
type FIND_MY_SPAWNS = 112;
type FIND_HOSTILE_SPAWNS = 113;
type FIND_MY_CONSTRUCTION_SITES = 114;
type FIND_HOSTILE_CONSTRUCTION_SITES = 115;
type FIND_MINERALS = 116;
type FIND_NUKES = 117;

////////
// Body Part Constants

type BodyPartConstant =
  MOVE |
  WORK |
  CARRY |
  ATTACK |
  RANGED_ATTACK |
  TOUGH |
  HEAL |
  CLAIM

type MOVE = "move";
type WORK = "work";
type CARRY = "carry";
type ATTACK = "attack";
type RANGED_ATTACK = "ranged_attack";
type TOUGH = "tough";
type HEAL = "heal";
type CLAIM = "claim";

////////
// Look Constants

type LookConstant =
  LOOK_CREEPS |
  LOOK_ENERGY |
  LOOK_RESOURCES |
  LOOK_SOURCES |
  LOOK_MINERALS |
  LOOK_STRUCTURES |
  LOOK_FLAGS |
  LOOK_CONSTRUCTION_SITES |
  LOOK_NUKES |
  LOOK_TERRAIN

type LOOK_CONSTRUCTION_SITES = "constructionSite";
type LOOK_CREEPS = "creep";
type LOOK_ENERGY = "energy";
type LOOK_FLAGS = "flag";
type LOOK_MINERALS = "mineral";
type LOOK_NUKES = "nuke";
type LOOK_RESOURCES = "resource";
type LOOK_SOURCES = "source";
type LOOK_STRUCTURES = "structure";
type LOOK_TERRAIN = "terrain";

////////
// Direction Constants

type DirectionConstant =
  TOP |
  TOP_RIGHT |
  RIGHT |
  BOTTOM_RIGHT |
  BOTTOM |
  BOTTOM_LEFT |
  LEFT |
  TOP_LEFT;

type TOP = 1;
type TOP_RIGHT = 2;
type RIGHT = 3;
type BOTTOM_RIGHT = 4;
type BOTTOM = 5;
type BOTTOM_LEFT = 6;
type LEFT = 7;
type TOP_LEFT = 8;

////////
// Color Constants

type ColorConstant =
  COLOR_RED |
  COLOR_PURPLE |
  COLOR_BLUE |
  COLOR_CYAN |
  COLOR_GREEN |
  COLOR_YELLOW |
  COLOR_ORANGE |
  COLOR_BROWN |
  COLOR_GREY |
  COLOR_WHITE

type COLOR_RED = 1;
type COLOR_PURPLE = 2;
type COLOR_BLUE = 3;
type COLOR_CYAN = 4;
type COLOR_GREEN = 5;
type COLOR_YELLOW = 6;
type COLOR_ORANGE = 7;
type COLOR_BROWN = 8;
type COLOR_GREY = 9;
type COLOR_WHITE = 10;

////////
// Structure Constants

type StructureConstant =
  STRUCTURE_EXTENSION |
  STRUCTURE_RAMPART |
  STRUCTURE_ROAD |
  STRUCTURE_SPAWN |
  STRUCTURE_LINK |
  STRUCTURE_WALL |
  STRUCTURE_KEEPER_LAIR |
  STRUCTURE_CONTROLLER |
  STRUCTURE_STORAGE |
  STRUCTURE_TOWER |
  STRUCTURE_OBSERVER |
  STRUCTURE_POWER_BANK |
  STRUCTURE_POWER_SPAWN |
  STRUCTURE_EXTRACTOR |
  STRUCTURE_LAB |
  STRUCTURE_TERMINAL |
  STRUCTURE_CONTAINER |
  STRUCTURE_NUKER |
  STRUCTURE_PORTAL;

type STRUCTURE_EXTENSION = "extension";
type STRUCTURE_RAMPART = "rampart";
type STRUCTURE_ROAD = "road";
type STRUCTURE_SPAWN = "spawn";
type STRUCTURE_LINK = "link";
type STRUCTURE_WALL = "wall";
type STRUCTURE_KEEPER_LAIR = "keeperLair";
type STRUCTURE_CONTROLLER = "controller";
type STRUCTURE_STORAGE = "storage";
type STRUCTURE_TOWER = "tower";
type STRUCTURE_OBSERVER = "observer";
type STRUCTURE_POWER_BANK = "powerBank";
type STRUCTURE_POWER_SPAWN = "powerSpawn";
type STRUCTURE_EXTRACTOR = "extractor";
type STRUCTURE_LAB = "lab";
type STRUCTURE_TERMINAL = "terminal";
type STRUCTURE_CONTAINER = "container";
type STRUCTURE_NUKER = "nuker";
type STRUCTURE_PORTAL = "portal";

////////
// Resource Constants

type ResourceConstant =
  RESOURCE_ENERGY |
  RESOURCE_POWER |
  RESOURCE_UTRIUM |
  RESOURCE_LEMERGIUM |
  RESOURCE_KEANIUM |
  RESOURCE_GHODIUM |
  RESOURCE_ZYNTHIUM |
  RESOURCE_OXYGEN |
  RESOURCE_HYDROGEN |
  RESOURCE_CATALYST |
  RESOURCE_HYDROXIDE |
  RESOURCE_ZYNTHIUM_KEANITE |
  RESOURCE_UTRIUM_LEMERGITE |
  RESOURCE_UTRIUM_HYDRIDE |
  RESOURCE_UTRIUM_OXIDE |
  RESOURCE_KEANIUM_HYDRIDE |
  RESOURCE_KEANIUM_OXIDE |
  RESOURCE_LEMERGIUM_HYDRIDE |
  RESOURCE_LEMERGIUM_OXIDE |
  RESOURCE_ZYNTHIUM_HYDRIDE |
  RESOURCE_ZYNTHIUM_OXIDE |
  RESOURCE_GHODIUM_HYDRIDE |
  RESOURCE_GHODIUM_OXIDE |
  RESOURCE_UTRIUM_ACID |
  RESOURCE_UTRIUM_ALKALIDE |
  RESOURCE_KEANIUM_ACID |
  RESOURCE_KEANIUM_ALKALIDE |
  RESOURCE_LEMERGIUM_ACID |
  RESOURCE_LEMERGIUM_ALKALIDE |
  RESOURCE_ZYNTHIUM_ACID |
  RESOURCE_ZYNTHIUM_ALKALIDE |
  RESOURCE_GHODIUM_ACID |
  RESOURCE_GHODIUM_ALKALIDE |
  RESOURCE_CATALYZED_UTRIUM_ACID |
  RESOURCE_CATALYZED_UTRIUM_ALKALIDE |
  RESOURCE_CATALYZED_KEANIUM_ACID |
  RESOURCE_CATALYZED_KEANIUM_ALKALIDE |
  RESOURCE_CATALYZED_LEMERGIUM_ACID |
  RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE |
  RESOURCE_CATALYZED_ZYNTHIUM_ACID |
  RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE |
  RESOURCE_CATALYZED_GHODIUM_ACID |
  RESOURCE_CATALYZED_GHODIUM_ALKALIDE

type _ResourceConstantSansEnergy =
  RESOURCE_POWER |
  RESOURCE_UTRIUM |
  RESOURCE_LEMERGIUM |
  RESOURCE_KEANIUM |
  RESOURCE_GHODIUM |
  RESOURCE_ZYNTHIUM |
  RESOURCE_OXYGEN |
  RESOURCE_HYDROGEN |
  RESOURCE_CATALYST |
  RESOURCE_HYDROXIDE |
  RESOURCE_ZYNTHIUM_KEANITE |
  RESOURCE_UTRIUM_LEMERGITE |
  RESOURCE_UTRIUM_HYDRIDE |
  RESOURCE_UTRIUM_OXIDE |
  RESOURCE_KEANIUM_HYDRIDE |
  RESOURCE_KEANIUM_OXIDE |
  RESOURCE_LEMERGIUM_HYDRIDE |
  RESOURCE_LEMERGIUM_OXIDE |
  RESOURCE_ZYNTHIUM_HYDRIDE |
  RESOURCE_ZYNTHIUM_OXIDE |
  RESOURCE_GHODIUM_HYDRIDE |
  RESOURCE_GHODIUM_OXIDE |
  RESOURCE_UTRIUM_ACID |
  RESOURCE_UTRIUM_ALKALIDE |
  RESOURCE_KEANIUM_ACID |
  RESOURCE_KEANIUM_ALKALIDE |
  RESOURCE_LEMERGIUM_ACID |
  RESOURCE_LEMERGIUM_ALKALIDE |
  RESOURCE_ZYNTHIUM_ACID |
  RESOURCE_ZYNTHIUM_ALKALIDE |
  RESOURCE_GHODIUM_ACID |
  RESOURCE_GHODIUM_ALKALIDE |
  RESOURCE_CATALYZED_UTRIUM_ACID |
  RESOURCE_CATALYZED_UTRIUM_ALKALIDE |
  RESOURCE_CATALYZED_KEANIUM_ACID |
  RESOURCE_CATALYZED_KEANIUM_ALKALIDE |
  RESOURCE_CATALYZED_LEMERGIUM_ACID |
  RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE |
  RESOURCE_CATALYZED_ZYNTHIUM_ACID |
  RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE |
  RESOURCE_CATALYZED_GHODIUM_ACID |
  RESOURCE_CATALYZED_GHODIUM_ALKALIDE

type MineralConstant =
  RESOURCE_UTRIUM |
  RESOURCE_LEMERGIUM |
  RESOURCE_KEANIUM |
  RESOURCE_GHODIUM |
  RESOURCE_ZYNTHIUM |
  RESOURCE_OXYGEN |
  RESOURCE_HYDROGEN |
  RESOURCE_CATALYST

type RESOURCE_ENERGY = "energy";
type RESOURCE_POWER = "power";

type RESOURCE_UTRIUM = "U";
type RESOURCE_LEMERGIUM = "L";
type RESOURCE_KEANIUM = "K";
type RESOURCE_GHODIUM = "G";
type RESOURCE_ZYNTHIUM = "Z";
type RESOURCE_OXYGEN = "O";
type RESOURCE_HYDROGEN = "H";
type RESOURCE_CATALYST = "X";

type RESOURCE_HYDROXIDE = "OH";
type RESOURCE_ZYNTHIUM_KEANITE = "ZK";
type RESOURCE_UTRIUM_LEMERGITE = "UL";
type RESOURCE_UTRIUM_HYDRIDE = "UH";
type RESOURCE_UTRIUM_OXIDE = "UO";
type RESOURCE_KEANIUM_HYDRIDE = "KH";
type RESOURCE_KEANIUM_OXIDE = "KO";
type RESOURCE_LEMERGIUM_HYDRIDE = "LH";
type RESOURCE_LEMERGIUM_OXIDE = "LO";
type RESOURCE_ZYNTHIUM_HYDRIDE = "ZH";
type RESOURCE_ZYNTHIUM_OXIDE = "ZO";
type RESOURCE_GHODIUM_HYDRIDE = "GH";
type RESOURCE_GHODIUM_OXIDE = "GO";

type RESOURCE_UTRIUM_ACID = "UH2O";
type RESOURCE_UTRIUM_ALKALIDE = "UHO2";
type RESOURCE_KEANIUM_ACID = "KH2O";
type RESOURCE_KEANIUM_ALKALIDE = "KHO2";
type RESOURCE_LEMERGIUM_ACID = "LH2O";
type RESOURCE_LEMERGIUM_ALKALIDE = "LHO2";
type RESOURCE_ZYNTHIUM_ACID = "ZH2O";
type RESOURCE_ZYNTHIUM_ALKALIDE = "ZHO2";
type RESOURCE_GHODIUM_ACID = "GH2O";
type RESOURCE_GHODIUM_ALKALIDE = "GHO2";

type RESOURCE_CATALYZED_UTRIUM_ACID = "XUH2O";
type RESOURCE_CATALYZED_UTRIUM_ALKALIDE = "XUHO2";
type RESOURCE_CATALYZED_KEANIUM_ACID = "XKH2O";
type RESOURCE_CATALYZED_KEANIUM_ALKALIDE = "XKHO2";
type RESOURCE_CATALYZED_LEMERGIUM_ACID = "XLH2O";
type RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE = "XLHO2";
type RESOURCE_CATALYZED_ZYNTHIUM_ACID = "XZH2O";
type RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE = "ZXHO2";
type RESOURCE_CATALYZED_GHODIUM_ACID = "XGH2O";
type RESOURCE_CATALYZED_GHODIUM_ALKALIDE = "XGHO2";

