import { CellSize, CellSizeHalf } from "@/game/globals.ts";
import { ITile } from "@/types/common.ts";

export const TilesRock = {
	displayName: "Rock",
	name: "Rock",
	id: 0,
} as const satisfies ITile;

export const TilesStatue = {
	displayName: "Statue",
	name: "Statue",
	id: 1,
} as const satisfies ITile;

export const TilesBush = {
	displayName: "Bush",
	name: "Bush",
	id: 2,
} as const satisfies ITile;

export const TilesWallTopLeft = {
	displayName: "Wall Top Left",
	name: "WallTopLeft",
	id: 3,
	shape: [{
		x: 0,
		y: CellSize,
	}, {
		x: 0,
		y: CellSizeHalf + CellSizeHalf / 2,
	}, {
		x: CellSizeHalf + CellSizeHalf / 2,
		y: 0,
	}, {
		x: CellSize,
		y: CellSize,
	}],
} as const satisfies ITile;

export const TilesWallTop = {
	displayName: "Wall Top",
	name: "WallTop",
	id: 4,
} as const satisfies ITile;

export const TilesWallTopRight = {
	displayName: "Wall Top Right",
	name: "WallTopRight",
	id: 5,
	shape: [{
		x: 0,
		y: 0,
	}, {
		x: CellSize,
		y: CellSizeHalf,
	}, {
		x: CellSize,
		y: CellSize,
	}, {
		x: 0,
		y: CellSize,
	}],
} as const satisfies ITile;

export const TilesTreeTopLeft = {
	displayName: "Tree Top Left",
	name: "TreeTopLeft",
	id: 6,
} as const satisfies ITile;

export const TilesTreeTop = {
	displayName: "Tree Top",
	name: "TreeTop",
	id: 7,
} as const satisfies ITile;

export const TilesTreeTopRight = {
	displayName: "Tree Top Right",
	name: "TreeTopRight",
	id: 8,
} as const satisfies ITile;

export const TilesSand = {
	displayName: "Sand",
	name: "Sand",
	id: 9,
} as const satisfies ITile;

export const TilesStairsDown = {
	displayName: "Stairs Down",
	name: "StairsDown",
	id: 10,
} as const satisfies ITile;

export const TilesStairsUp = {
	displayName: "Stairs Up",
	name: "StairsUp",
	id: 11,
} as const satisfies ITile;

export const TilesBlock = {
	displayName: "Block",
	name: "Block",
	id: 12,
} as const satisfies ITile;

export const TilesWallBottomLeft = {
	displayName: "Wall Bottom Left",
	name: "WallBottomLeft",
	id: 13,
	shape: [{
		x: 0,
		y: 0,
	}, {
		x: CellSize,
		y: 0,
	}, {
		x: CellSize,
		y: CellSize,
	}, {
		x: 0,
		y: CellSizeHalf,
	}],
} as const satisfies ITile;

export const TilesWallBottom = {
	displayName: "Wall Bottom",
	name: "WallBottom",
	id: 14,
} as const satisfies ITile;

export const TilesWallBottomRight = {
	displayName: "Wall Bottom Right",
	name: "WallBottomRight",
	id: 15,
	shape: [{
		x: 0,
		y: 0,
	}, {
		x: CellSize,
		y: 0,
	}, {
		x: CellSize,
		y: CellSizeHalf / 2,
	}, {
		x: 0,
		y: CellSize,
	}],
} as const satisfies ITile;

export const TilesTreeBottomLeft = {
	displayName: "Tree Bottom Left",
	name: "TreeBottomLeft",
	id: 16,
} as const satisfies ITile;

export const TilesFire = {
	displayName: "Fire",
	name: "Fire",
	id: 17,
} as const satisfies ITile;

export const TilesTreeBottomRight = {
	displayName: "Tree Bottom Right",
	name: "TreeBottomRight",
	id: 18,
} as const satisfies ITile;

export const TilesWallKeep = {
	displayName: "Wall Keep",
	name: "WallKeep",
	id: 19,
} as const satisfies ITile;

export const TilesPondTopLeft = {
	displayName: "Pond Top Left",
	name: "PondTopLeft",
	id: 20,
} as const satisfies ITile;

export const TilesPondTop = {
	displayName: "Pond Top",
	name: "PondTop",
	id: 21,
} as const satisfies ITile;

export const TilesPondTopRight = {
	displayName: "Pond Top Right",
	name: "PondTopRight",
	id: 22,
} as const satisfies ITile;

export const TilesSandTopLeft = {
	displayName: "Sand Top Left",
	name: "SandTopLeft",
	id: 23,
} as const satisfies ITile;

export const TilesSandTop = {
	displayName: "Sand Top",
	name: "SandTop",
	id: 24,
} as const satisfies ITile;

export const TilesSandTopRight = {
	displayName: "Sand Top Right",
	name: "SandTopRight",
	id: 25,
} as const satisfies ITile;

export const TilesCastleTopLeft = {
	displayName: "Castle Top Left",
	name: "CastleTopLeft",
	id: 26,
} as const satisfies ITile;

export const TilesCastleTop = {
	displayName: "Castle Top",
	name: "CastleTop",
	id: 27,
} as const satisfies ITile;

export const TilesCastleTopRight = {
	displayName: "Castle Top Right",
	name: "CastleTopRight",
	id: 28,
} as const satisfies ITile;

export const TilesGroundTile = {
	displayName: "Ground Tile",
	name: "GroundTile",
	id: 29,
} as const satisfies ITile;

export const TilesPondCenterLeft = {
	displayName: "Pond Center Left",
	name: "PondCenterLeft",
	id: 30,
} as const satisfies ITile;

export const TilesPondCenter = {
	displayName: "Pond Center",
	name: "PondCenter",
	id: 31,
} as const satisfies ITile;

export const TilesPondCenterRight = {
	displayName: "Pond Center Right",
	name: "PondCenterRight",
	id: 32,
} as const satisfies ITile;

export const TilesSandCenterLeft = {
	displayName: "Sand Center Left",
	name: "SandCenterLeft",
	id: 33,
} as const satisfies ITile;

export const TilesSandCenter = {
	displayName: "Sand Center",
	name: "SandCenter",
	id: 34,
} as const satisfies ITile;

export const TilesSandCenterRight = {
	displayName: "Sand Center Right",
	name: "SandCenterRight",
	id: 35,
} as const satisfies ITile;

export const TilesCastleBottomLeft = {
	displayName: "Castle Bottom Left",
	name: "CastleBottomLeft",
	id: 36,
} as const satisfies ITile;

export const TilesSolid = {
	displayName: "Door",
	name: "Door",
	id: 37,
} as const satisfies ITile;

export const TilesCastleBottomRight = {
	displayName: "Castle Bottom Right",
	name: "CastleBottomRight",
	id: 38,
} as const satisfies ITile;

export const TilesStairsKeep = {
	displayName: "Stairs Keep",
	name: "StairsKeep",
	id: 39,
} as const satisfies ITile;

export const TilesPondBottomLeft = {
	displayName: "Pond Bottom Left",
	name: "PondBottomLeft",
	id: 40,
} as const satisfies ITile;

export const TilesPondBottom = {
	displayName: "Pond Bottom",
	name: "PondBottom",
	id: 41,
} as const satisfies ITile;

export const TilesPondBottomRight = {
	displayName: "Pond Bottom Right",
	name: "PondBottomRight",
	id: 42,
} as const satisfies ITile;

export const TilesSandBottomLeft = {
	displayName: "Sand Bottom Left",
	name: "SandBottomLeft",
	id: 43,
} as const satisfies ITile;

export const TilesSandBottom = {
	displayName: "Sand Bottom",
	name: "SandBottom",
	id: 44,
} as const satisfies ITile;

export const TilesSandBottomRight = {
	displayName: "Sand Bottom Right",
	name: "SandBottomRight",
	id: 45,
} as const satisfies ITile;

export const TilesCastleTopLeftAlt = {
	displayName: "Castle Top Left Alt",
	name: "CastleTopLeftAlt",
	id: 46,
} as const satisfies ITile;

export const TilesCastleTopAlt = {
	displayName: "Castle Top Alt",
	name: "CastleTopAlt",
	id: 47,
} as const satisfies ITile;

export const TilesCastleTopRightAlt = {
	displayName: "Castle Top Right Alt",
	name: "CastleTopRightAlt",
	id: 48,
} as const satisfies ITile;

export const TilesStatue1 = {
	displayName: "Statue 1",
	name: "Statue1",
	id: 49,
} as const satisfies ITile;

export const TilesWaterBottomRight = {
	displayName: "Water Bottom Right",
	name: "WaterBottomRight",
	id: 50,
} as const satisfies ITile;

export const TilesWaterBottomLeft = {
	displayName: "Water Bottom Left",
	name: "WaterBottomLeft",
	id: 51,
} as const satisfies ITile;

export const TilesWaterTopRight = {
	displayName: "Water Top Right",
	name: "WaterTopRight",
	id: 52,
} as const satisfies ITile;

export const TilesWaterTopLeft = {
	displayName: "Water Top Left",
	name: "WaterTopLeft",
	id: 53,
} as const satisfies ITile;

export const TilesWater = {
	displayName: "Water",
	name: "Water",
	id: 54,
} as const satisfies ITile;

export const TilesDock = {
	displayName: "Dock",
	name: "Dock",
	id: 55,
} as const satisfies ITile;

export const TilesGrave = {
	displayName: "Grave",
	name: "Grave",
	id: 56,
} as const satisfies ITile;

export const TilesFireAlt = {
	displayName: "Fire Alt",
	name: "FireAlt",
	id: 57,
} as const satisfies ITile;

export const TilesStatue2 = {
	displayName: "Statue 2",
	name: "Statue2",
	id: 58,
} as const satisfies ITile;

export const TilesNone = {
	displayName: "None",
	name: "None",
	id: 59,
} as const satisfies ITile;

export const TilesTransition = {
	displayName: "Transition",
	name: "Transition",
	id: 37,
} as const satisfies ITile;

export const TilesWallHoleX = {
	displayName: "Wall Hole X",
	name: "WallHoleX",
	id: 60,
} as const satisfies ITile;

export const TilesWallHoleY = {
	displayName: "Wall Hole Y",
	name: "WallHoleY",
	id: 61,
} as const satisfies ITile;

export const TilesWallLeftX = {
	displayName: "Wall Left X",
	name: "WallLeftX",
	id: 63,
} as const satisfies ITile;

export const TilesWallLeftY = {
	displayName: "Wall Left Y",
	name: "WallLeftY",
	id: 64,
} as const satisfies ITile;

export const TilesWallLeftYFlip = {
	displayName: "Wall Left Y Flip",
	name: "WallLeftYFlip",
	id: 65,
} as const satisfies ITile;

export const TilesWallRightX = {
	displayName: "Wall Right X",
	name: "WallRightX",
	id: 66,
} as const satisfies ITile;

export const TilesWallRightY = {
	displayName: "Wall Right Y",
	name: "WallRightY",
	id: 67,
} as const satisfies ITile;

export const TilesWallRightYFlip = {
	displayName: "Wall Right Y Flip",
	name: "WallRightYFlip",
	id: 68,
} as const satisfies ITile;

export const TilesWallX = {
	displayName: "Wall X",
	name: "WallX",
	id: 72,
} as const satisfies ITile;

export const TilesWallY = {
	displayName: "Wall Y",
	name: "WallY",
	id: 73,
} as const satisfies ITile;

export const TilesCastle = {
	displayName: "Castle",
	name: "Castle",
	id: 2,
} as const satisfies ITile;

export const TilesDoorClosedX = {
	displayName: "Door Closed X",
	name: "DoorClosedX",
	id: 14,
} as const satisfies ITile;

export const TilesDoorClosedY = {
	displayName: "Door Closed Y",
	name: "DoorClosedY",
	id: 15,
} as const satisfies ITile;

export const TilesDoorLockedX = {
	displayName: "Door Locked X",
	name: "DoorLockedX",
	id: 16,
} as const satisfies ITile;

export const TilesDoorLockedY = {
	displayName: "Door Locked Y",
	name: "DoorLockedY",
	id: 17,
} as const satisfies ITile;

export const TilesDoorUnlockedX = {
	displayName: "Door Unlocked X",
	name: "DoorUnlockedX",
	id: 18,
} as const satisfies ITile;

export const TilesDoorUnlockedY = {
	displayName: "Door Unlocked Y",
	name: "DoorUnlockedY",
	id: 19,
} as const satisfies ITile;

export const Tiles = [
	TilesBlock,
	TilesBush,
	TilesCastle,
	TilesCastleBottomLeft,
	TilesCastleBottomRight,
	TilesSand,
	TilesCastleTop,
	TilesCastleTopAlt,
	TilesCastleTopLeft,
	TilesCastleTopLeftAlt,
	TilesCastleTopRight,
	TilesCastleTopRightAlt,
	TilesDock,
	TilesSolid,
	TilesDoorClosedX,
	TilesDoorClosedY,
	TilesDoorLockedX,
	TilesDoorLockedY,
	TilesDoorUnlockedX,
	TilesDoorUnlockedY,
	TilesFire,
	TilesFireAlt,
	TilesGrave,
	TilesGroundTile,
	TilesNone,
	TilesPondBottom,
	TilesPondBottomLeft,
	TilesPondBottomRight,
	TilesPondCenter,
	TilesPondCenterLeft,
	TilesPondCenterRight,
	TilesPondTop,
	TilesPondTopLeft,
	TilesPondTopRight,
	TilesRock,
	TilesSandBottom,
	TilesSandBottomLeft,
	TilesSandBottomRight,
	TilesSandCenter,
	TilesSandCenterLeft,
	TilesSandCenterRight,
	TilesSandTop,
	TilesSandTopLeft,
	TilesSandTopRight,
	TilesStairsDown,
	TilesStairsKeep,
	TilesStairsUp,
	TilesStatue,
	TilesStatue1,
	TilesStatue2,
	TilesTransition,
	TilesTreeBottomLeft,
	TilesTreeBottomRight,
	TilesTreeTop,
	TilesTreeTopLeft,
	TilesTreeTopRight,
	TilesWallBottom,
	TilesWallBottomLeft,
	TilesWallBottomRight,
	TilesWallHoleX,
	TilesWallHoleY,
	TilesWallKeep,
	TilesWallLeftX,
	TilesWallLeftY,
	TilesWallLeftYFlip,
	TilesWallRightX,
	TilesWallRightY,
	TilesWallRightYFlip,
	TilesWallTop,
	TilesWallTopLeft,
	TilesWallTopRight,
	TilesWallX,
	TilesWallY,
	TilesWater,
	TilesWaterBottomLeft,
	TilesWaterBottomRight,
	TilesWaterTopLeft,
	TilesWaterTopRight,
];

export type TTiles = typeof Tiles[number]["name"];
