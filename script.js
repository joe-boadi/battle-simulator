 // Creating a simple battle function
 function battle(hero,villian) {
    const power1 = hero.powers[Math.floor(Math.random() * hero.powers.length)]
    const power2 = villian.powers[Math.floor(Math.random() * villian.powers.length)]

    const result = (Math.random() > 0.5) ? `${hero.full_name} wins using ${power1}!` : `${villian.full_name} wins using ${power2}!`
    return result;
}
