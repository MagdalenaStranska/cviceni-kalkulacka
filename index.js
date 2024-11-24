// Kalkulačka
// Vytvořte si repozitář ze šablony cviceni-kalkulacka se stránkou, která obsahuje číselník a displej jednoduché kalkulačky.

// Zařiďte, aby se při kliknutí na libovolné tlačítko na displeji kalkulačky objevila cifra, která je na tlačíku napsaná. Postupujte dle návodu:
// 1.Nejprve vyrobte funkci s názvem handleDigitClick. To bude posluchač, který později navěsíme na všechna tlačítka.
// 2.Váš posluchač bude mít jeden parametr představující událost. Z vlastnosti target tohoto parametru získejte tlačíko, na které bylo kliknuto. Cifru zjístíte z jeho textContent.
// 3.Jakmile znáte cifru, vložte ji jako textContent na displej kalkulačky.
// 4.Pověste váš posluchač na všechna tlačítka s ciframi.
// 5.U běžné kalkulačky mačkáním tlačítek postupně sestavujeme nějaké víceciferné číslo. Zařiďte, aby cifry na displeji přibývaly jako na běžné kalkulačce (tj. nově přidaná cifra se přidá doprava, jako je na animaci výše). Také zaříďte, aby se na displej nedalo vložit delší než devíticiferné číslo.
// *Bonus
// Pomocí podmínky if zařiďte, aby číslo na displeji nezačínalo nulou, ledaže je tam nula samotná.

const handleDigitClick = (event) => {
    const display = document.querySelector('.display');
    let digit = event.target.textContent;

    // Pokud je na displeji "0", nahradíme ji číslicí (nebo přidáme číslici, pokud už je něco jiného)
    if (display.textContent === '0') {
        display.textContent = digit;
    } else if (display.textContent.length < 9) {
        // Pokud délka textu není větší než 9, přidáme novou číslici na konec
        display.textContent += digit;
    }
};

  // Získáme všechny prvky s třídou "btn-num"
  const buttons = document.querySelectorAll('.btn-num');

  // Projdeme každý prvek a navážeme na něj udalost kliknutí
  buttons.forEach(button => {
    button.addEventListener('click', handleDigitClick);
  });