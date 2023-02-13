import Character from '../character';
import Bowman from '../Bowman';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Undead from '../Undead';
import Zombie from '../Zombie';

test('Заданный персонаж не существует', () => {
  expect(() => {
    const result = new Character('Gerald', 'Witchman');
    return result;
  }).toThrow();
});

test('creation Bowman', () => {
  const recieved = new Bowman('Lusie');
  expect(recieved).toEqual({
    name: 'Lusie',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('creation Daemon', () => {
  const recieved = new Daemon('Lusie', 'Daemon');
  expect(recieved).toEqual({
    name: 'Lusie',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('creation Magician', () => {
  const recieved = new Magician('Lusie', 'Magician');
  expect(recieved).toEqual({
    name: 'Lusie',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('creation Swordsman', () => {
  const recieved = new Swordsman('Lusie', 'Swordsman');
  expect(recieved).toEqual({
    name: 'Lusie',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('creation Undead', () => {
  const recieved = new Undead('Lusie', 'Undead');
  expect(recieved).toEqual({
    name: 'Lusie',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('creation Zombie', () => {
  const recieved = new Zombie('Lusie', 'Zombie');
  expect(recieved).toEqual({
    name: 'Lusie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
