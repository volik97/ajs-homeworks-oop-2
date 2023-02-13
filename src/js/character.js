export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    const typeClass = [
      'Bowman',
      'Daemon',
      'Magician',
      'Swordsman',
      'Undead',
      'Zombie',
    ];
    if (name.length <= 2 && name.lenght >= 10) {
      throw new Error(
        'Допускаются только имена длиной от 2 символов и не более 10',
      );
    }
    if (typeof name !== 'string') {
      throw new Error('Тип класса должен быть строкой');
    }
    if (!typeClass.includes(type)) {
      throw new Error(
        'Выберите один из доступных классов: Bowman, Daemon, Magician, Swordsman, Undead, Zombie',
      );
    }
  }

  levelUp() {
    if (this.health !== 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить Level умершего');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
      if (this.health < 0) {
        this.health = 0;
      }
    }
  }
}
