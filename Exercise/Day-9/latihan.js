// Class untuk Karakter dalam game
class Character {
    constructor(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
    }

    // Method untuk menyerang karakter lain
    attack(enemy) {
        enemy.health -= this.strength;
        console.log(`${this.name} attacks ${enemy.name} with ${this.strength} strength, current healt ${enemy.name} is ${enemy.health}`);
    }

    // Method untuk menerima damage
    takeDamage(amount) {}
}

  // Implementasi
const hero = new Character("Hero", 100, 15);
const villain = new Character("Villain", 80, 12);

hero.attack(villain); // Output: Hero attacks Villain with 15 strength, current healt villain is 65
villain.attack(hero); // Output: Villain attacks Hero with 12 strength, current healt Hero is 88