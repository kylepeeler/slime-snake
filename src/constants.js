export const SHOW_DEBUG = false;

export const IGNORE_MAP_COLLISION = false;

export const SLIME_START_COLOR = "green";

export const SLIME_SPEED = 60;

export const TINT_MAP = {
  red: 0xff0000,
  green: 0x00ff00,
  blue: 0x0000ff,
  purple: 0xaa00ff,
  yellow: 0xffff00
};

export const COMBAT_MAP = {
  slime: {
    red: {
      current: 50,
      max: 50,
      attack: 25,
      attackPeriod: 1000,
      lastAttack: null
    },
    green: {
      current: 50,
      max: 50,
      attack: 25,
      attackPeriod: 1000,
      lastAttack: null
    },
    blue: {
      current: 50,
      max: 50,
      attack: 25,
      attackPeriod: 1000,
      lastAttack: null
    },
    purple: {
      current: 50,
      max: 50,
      attack: 25,
      attackPeriod: 1000,
      lastAttack: null
    },
    yellow: {
      current: 50,
      max: 50,
      attack: 25,
      attackPeriod: 1000,
      lastAttack: null
    }
  },
  wizard: {
    blue: {
      current: 25,
      max: 25,
      attack: 10,
      attackPeriod: 1000,
      lastAttack: null
    },
    green: {
      current: 55,
      max: 55,
      attack: 30,
      attackPeriod: 1000,
      lastAttack: null
    },
    red: {
      current: 30,
      max: 30,
      attack: 10,
      attackPeriod: 1000,
      lastAttack: null
    }
  },
  knight: {
    red: {
      current: 55,
      max: 55,
      attack: 10,
      attackPeriod: 1000,
      lastAttack: null
    },
    silver: {
      current: 25,
      max: 25,
      attack: 10,
      attackPeriod: 1000,
      lastAttack: null
    }
  }
};
