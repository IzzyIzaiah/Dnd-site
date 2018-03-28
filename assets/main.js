function Comparator(a, b) {
  if (a[1] < b[1]) return -1;
  if (a[1] > b[1]) return 1;
  return 0;
}

function myFunction() {
  var x = document.getElementById('mySelect').selectedIndex
  var y = document.getElementById('raceSelect').selectedIndex
  var z = document.getElementById('raceSelect').options
  if (x == 0) {
    document.getElementById('demo').innerHTML = 'You selected d20'
    var dex = Math.floor(Math.random() * 20) + 1
    var charis = Math.floor(Math.random() * 20) + 1
    var intel = Math.floor(Math.random() * 20) + 1
    var wisd = Math.floor(Math.random() * 20) + 1
    var str = Math.floor(Math.random() * 20) + 1
    var con = Math.floor(Math.random() * 20) + 1
    var dexmod = (dex - 10) / 2
    var charmod = (charis - 10) / 2
    var intelmod = (intel - 10) / 2
    var wisdmod = (wisd - 10) / 2
    var strmod = (str - 10) / 2
    var conmod = (con - 10) / 2
    dexmod = Math.floor(dexmod)
    charmod = Math.floor(charmod)
    intelmod = Math.floor(intelmod)
    wisdmod = Math.floor(wisdmod)
    strmod = Math.floor(strmod)
    conmod = Math.floor(conmod)

    const allLines = [
      `Hero Stats`,
      `=============`,
      `Strenght: ${str} Mod: ${strmod}`,
      `Dexterity: ${dex} Mod: ${dexmod}`,
      `Constitution: ${con} Mod: ${conmod}`,
      `Intelligence: ${intel} Mod: ${intelmod}`,
      `Wisdom: ${wisd} Mod: ${wisdmod}`,
      `Charisma: ${charis} Mod: ${charmod}`
    ]

    document.getElementById('demo').innerHTML = allLines.join('<br/>')
    if (y == 0 || y == 1 || y == 2 || y == 3 || y == 3 || y == 4 || y == 5 || y == 6 || y == 7 || y == 8 || y == 9 || y == 10 || y == 11 || y == 12 || y == 13 || y == 14 || y == 15 || y == 16 || y == 17 || y == 18 || y == 19 || y == 20 || y == 21 || y == 22 || y == 23 || y == 24 || y == 25 || y == 26) {
      if (y == 1) {
        dex + 2
        wisd + 1
        document.getElementById('addInfo').innerHTML = "Wisdom +1, Dexterity +2"
      }
      if (y == 2) {
        charis + 2
        document.getElementById('addInfo').innerHTML = "Charisma +2"
      }
      if (y == 3) {
        str + 2
        dex + 1
        document.getElementById('addInfo').innerHTML = "Strength +2, Dexterity +1"
      }
      if (y == 4) {
        str + 2
        charis + 1
        document.getElementById('addInfo').innerHTML = "strenght +2, Charisma +1"
      }
      if (y == 5) {
        con + 2
        document.getElementById('addInfo').innerHTML = "Constitution +2"
      }
      if (y == 6) {
        dex + 2
        document.getElementById('addInfo').innerHTML = "Dexterity +2"
      }
      if (y == 7) {
        dex + 2
        intel + 1
        document.getElementById('addInfo').innerHTML = "Dexterity +2, Intelligence +1"
      }
      if (y == 8) {
        wisd + 2
        str + 1
        document.getElementById('addInfo').innerHTML = "Wisdom +2, Strenght +1"
      }
      if (y == 9) {
        con + 2
        document.getElementById('addInfo').innerHTML = "Constitution +2"
      }
      if (y == 10) {
        intel + 2
        document.getElementById('addInfo').innerHTML = "Intelligence +2"
      }
      if (y == 11) {
        dex + 2
        con + 1
        document.getElementById('addInfo').innerHTML = "Dexterity +2, Constitution +1"
      }
      if (y == 12) {
        str + 2
        con + 1
        document.getElementById('addInfo').innerHTML = "Strenght +2, Constitution +1"
      }
      if (y == 13) {
        charis + 2
        document.getElementById('addInfo').innerHTML = "Charisma +2, Add +1 to 2 other ability scores"       
      }
      if (y == 14) {
        dex + 2
        document.getElementById('addInfo').innerHTML = "Dexterity +2"
      }
      if (y == 15) {
        str + 2
        con + 1
        document.getElementById('addInfo').innerHTML = "Strenght +2, Constitution +1"
      }
      if (y == 16) {
        con + 2
        intel + 1
        document.getElementById('addInfo').innerHTML = "Constitution +2, Intelligence +1"
      }
      if (y == 17) {
        con + 1
        dex + 1
        charis + 1
        intel + 1
        str + 1
        wisd + 1
        document.getElementById('addInfo').innerHTML = "+1 to all stats"
      }
      if (y == 18) {
        dex + 2
        wisd + 1
        document.getElementById('addInfo').innerHTML = "Dexterity +2, Wisdom +1"
      }
      if (y == 19) {
        dex + 2
        str - 2
        document.getElementById('addInfo').innerHTML = "Dexterity +2, Strenght -2"
      }
      if (y == 20) {
        con + 2
        wisd + 1
        document.getElementById('addInfo').innerHTML = "Constitution +2, Wisdom +1"
      }
      if (y == 21) {
        str + 2
        con + 1
        int - 2
        document.getElementById('addInfo').innerHTML = "Strenght +2, Constitution +1, Intelligence -2"
      }
      if (y == 22) {
        dex + 2
        charis + 1
        document.getElementById('addInfo').innerHTML = "Dexterity +2, Charisma +1"
      }
      if (y == 23) {
        charis + 2
        intel + 1
        document.getElementById('addInfo').innerHTML = "Charisma +2, Intelligence +1"
      }
      if (y == 24) {
        str + 2
        wisd + 1
        document.getElementById('addInfo').innerHTML = "Strenght +2, Wisdom +1"
      }
      if (y == 25) {
        str + 1
        con + 1
        charis + 1
        document.getElementById('addInfo').innerHTML = "Strenght +1, Constitution +1, Charisma +1"
      }
      if (y == 26) {
        charis + 2
        intel + 1
        document.getElementById('addInfo').innerHTML = "Charisma +2, Intelligence +1"
      }
      var dexmod = (dex - 10) / 2
      var charmod = (charis - 10) / 2
      var intelmod = (intel - 10) / 2
      var wisdmod = (wisd - 10) / 2
      var strmod = (str - 10) / 2
      var conmod = (con - 10) / 2
      dexmod = Math.floor(dexmod)
      charmod = Math.floor(charmod)
      intelmod = Math.floor(intelmod)
      wisdmod = Math.floor(wisdmod)
      strmod = Math.floor(strmod)
      conmod = Math.floor(conmod)
      const allLinesRace = [
        `You chose ${z[y].text}, index: ${y}`,
        `Stats added:`,
        `=============`,
        `Hero Stats`,
        `=============`,
        `Strenght: ${str} Mod: ${strmod}`,
        `Dexterity: ${dex} Mod: ${dexmod}`,
        `Constitution: ${con} Mod: ${conmod}`,
        `Intelligence: ${intel} Mod: ${intelmod}`,
        `Wisdom: ${wisd} Mod: ${wisdmod}`,
        `Charisma: ${charis} Mod: ${charmod}`
      ]
      document.getElementById('statsAdded').style.display = 'block'
      if (y == 0) {
        document.getElementById('statsAdded').innerHTML = allLinesRace.join('<br/>')
        document.getElementById('statsAdded').style.display = 'none'
        document.getElementById('firstdash').style.display = 'none'
        document.getElementById('seconddash').style.display = 'none'
        document.getElementById('addInfo').innerHTML = ""
      }
      if (y != 0) {
        document.getElementById('statsAdded').innerHTML = allLinesRace.join('<br/>')
        document.getElementById('statsAdded').style.display = 'block'
        document.getElementById('firstdash').style.display = 'block'
        document.getElementById('seconddash').style.display = 'block'
      }
      document.getElementById('demo').innerHTML = allLines.join('<br/>')
    }
  }
  if (x == 1) {
    document.getElementById('demo').innerHTML = 'You selected 4D6'
    var d61 = Math.floor(Math.random() * 7) + 1
    var d62 = Math.floor(Math.random() * 7) + 1
    var d63 = Math.floor(Math.random() * 7) + 1
    var d64 = Math.floor(Math.random() * 7) + 1
    var array = [d61, d62, d63, d64]
    array.sort(Comparator)
    var dex = array[1] + array[2] + array[3]
    var d611 = Math.floor(Math.random() * 7) + 1
    var d621 = Math.floor(Math.random() * 7) + 1
    var d631 = Math.floor(Math.random() * 7) + 1
    var d641 = Math.floor(Math.random() * 7) + 1
    var array1 = [d611, d621, d631, d641]
    array1.sort(Comparator)
    var charis = array1[1] + array1[2] + array1[3]
    var d612 = Math.floor(Math.random() * 7) + 1
    var d622 = Math.floor(Math.random() * 7) + 1
    var d632 = Math.floor(Math.random() * 7) + 1
    var d642 = Math.floor(Math.random() * 7) + 1
    var array2 = [d612, d622, d632, d642]
    array2.sort(Comparator)
    var intel = array2[1] + array2[2] + array2[3]
    var d613 = Math.floor(Math.random() * 7) + 1
    var d623 = Math.floor(Math.random() * 7) + 1
    var d633 = Math.floor(Math.random() * 7) + 1
    var d643 = Math.floor(Math.random() * 7) + 1
    var array3 = [d613, d623, d633, d643]
    array3.sort(Comparator)
    var wisd = array3[1] + array3[2] + array3[3]
    var d614 = Math.floor(Math.random() * 7) + 1
    var d624 = Math.floor(Math.random() * 7) + 1
    var d634 = Math.floor(Math.random() * 7) + 1
    var d644 = Math.floor(Math.random() * 7) + 1
    var array4 = [d614, d624, d634, d644]
    array4.sort(Comparator)
    var str = array4[1] + array4[2] + array4[3]
    var d615 = Math.floor(Math.random() * 7) + 1
    var d625 = Math.floor(Math.random() * 7) + 1
    var d635 = Math.floor(Math.random() * 7) + 1
    var d645 = Math.floor(Math.random() * 7) + 1
    var array5 = [d615, d625, d635, d645]
    array5.sort(Comparator)
    var con = array5[1] + array5[2] + array5[3]
    if (y == 1) {
      dex + 2
      wisd + 1
      document.getElementById('addInfo').innerHTML = "Wisdom +1, Dexterity +2"
    }
    if (y == 2) {
      charis + 2
      document.getElementById('addInfo').innerHTML = "Charisma +2"
    }
    if (y == 3) {
      str + 2
      dex + 1
      document.getElementById('addInfo').innerHTML = "Strength +2, Dexterity +1"
    }
    if (y == 4) {
      str + 2
      charis + 1
      document.getElementById('addInfo').innerHTML = "strenght +2, Charisma +1"
    }
    if (y == 5) {
      con + 2
      document.getElementById('addInfo').innerHTML = "Constitution +2"
    }
    if (y == 6) {
      dex + 2
      document.getElementById('addInfo').innerHTML = "Dexterity +2"
    }
    if (y == 7) {
      dex + 2
      intel + 1
      document.getElementById('addInfo').innerHTML = "Dexterity +2, Intelligence +1"
    }
    if (y == 8) {
      wisd + 2
      str + 1
      document.getElementById('addInfo').innerHTML = "Wisdom +2, Strenght +1"
    }
    if (y == 9) {
      con + 2
      document.getElementById('addInfo').innerHTML = "Constitution +2"
    }
    if (y == 10) {
      intel + 2
      document.getElementById('addInfo').innerHTML = "Intelligence +2"
    }
    if (y == 11) {
      dex + 2
      con + 1
      document.getElementById('addInfo').innerHTML = "Dexterity +2, Constitution +1"
    }
    if (y == 12) {
      str + 2
      con + 1
      document.getElementById('addInfo').innerHTML = "Strenght +2, Constitution +1"
    }
    if (y == 13) {
      charis + 2
      document.getElementById('addInfo').innerHTML = "Charisma +2, Add +1 to 2 other ability scores"       
    }
    if (y == 14) {
      dex + 2
      document.getElementById('addInfo').innerHTML = "Dexterity +2"
    }
    if (y == 15) {
      str + 2
      con + 1
      document.getElementById('addInfo').innerHTML = "Strenght +2, Constitution +1"
    }
    if (y == 16) {
      con + 2
      intel + 1
      document.getElementById('addInfo').innerHTML = "Constitution +2, Intelligence +1"
    }
    if (y == 17) {
      con + 1
      dex + 1
      charis + 1
      intel + 1
      str + 1
      wisd + 1
      document.getElementById('addInfo').innerHTML = "+1 to all stats"
    }
    if (y == 18) {
      dex + 2
      wisd + 1
      document.getElementById('addInfo').innerHTML = "Dexterity +2, Wisdom +1"
    }
    if (y == 19) {
      dex + 2
      str - 2
      document.getElementById('addInfo').innerHTML = "Dexterity +2, Strenght -2"
    }
    if (y == 20) {
      con + 2
      wisd + 1
      document.getElementById('addInfo').innerHTML = "Constitution +2, Wisdom +1"
    }
    if (y == 21) {
      str + 2
      con + 1
      int - 2
      document.getElementById('addInfo').innerHTML = "Strenght +2, Constitution +1, Intelligence -2"
    }
    if (y == 22) {
      dex + 2
      charis + 1
      document.getElementById('addInfo').innerHTML = "Dexterity +2, Charisma +1"
    }
    if (y == 23) {
      charis + 2
      intel + 1
      document.getElementById('addInfo').innerHTML = "Charisma +2, Intelligence +1"
    }
    if (y == 24) {
      str + 2
      wisd + 1
      document.getElementById('addInfo').innerHTML = "Strenght +2, Wisdom +1"
    }
    if (y == 25) {
      str + 1
      con + 1
      charis + 1
      document.getElementById('addInfo').innerHTML = "Strenght +1, Constitution +1, Charisma +1"
    }
    if (y == 26) {
      charis + 2
      intel + 1
      document.getElementById('addInfo').innerHTML = "Charisma +2, Intelligence +1"
    }
    var dexmod = (dex - 10) / 2
    var charmod = (charis - 10) / 2
    var intelmod = (intel - 10) / 2
    var wisdmod = (wisd - 10) / 2
    var strmod = (str - 10) / 2
    var conmod = (con - 10) / 2
    dexmod = Math.floor(dexmod)
    charmod = Math.floor(charmod)
    intelmod = Math.floor(intelmod)
    wisdmod = Math.floor(wisdmod)
    strmod = Math.floor(strmod)
    conmod = Math.floor(conmod)
    const allLines = [
      `Hero Stats`,
      `=============`,
      `Strenght: ${str} Mod: ${strmod}`,
      `Dexterity: ${dex} Mod: ${dexmod}`,
      `Constitution: ${con} Mod: ${conmod}`,
      `Intelligence: ${intel} Mod: ${intelmod}`,
      `Wisdom: ${wisd} Mod: ${wisdmod}`,
      `Charisma: ${charis} Mod: ${charmod}`
    ]
    const allLinesRace = [
      `You chose ${z[y].text}, index: ${y}`,
      `Stats added:`,
      `=============`,
      `Hero Stats`,
      `=============`,
      `Strenght: ${str} Mod: ${strmod}`,
      `Dexterity: ${dex} Mod: ${dexmod}`,
      `Constitution: ${con} Mod: ${conmod}`,
      `Intelligence: ${intel} Mod: ${intelmod}`,
      `Wisdom: ${wisd} Mod: ${wisdmod}`,
      `Charisma: ${charis} Mod: ${charmod}`
    ]
    if (y == 0) {
      document.getElementById('statsAdded').innerHTML = allLinesRace.join('<br/>')
      document.getElementById('statsAdded').style.display = 'none'
      document.getElementById('firstdash').style.display = 'none'
      document.getElementById('seconddash').style.display = 'none'
      document.getElementById('addInfo').innerHTML = ""
    }
    if (y != 0) {
      document.getElementById('statsAdded').innerHTML = allLinesRace.join('<br/>')
      document.getElementById('statsAdded').style.display = 'block'
      document.getElementById('firstdash').style.display = 'block'
      document.getElementById('seconddash').style.display = 'block'
    }
    document.getElementById('demo').innerHTML = allLines.join('<br/>')
  }
}
function myDice() {
  var x = document.getElementById('dice').selectedIndex
  var y = document.getElementById('dice').options
  var d100 = Math.floor(Math.random() * 100) + 1
  var d50 = Math.floor(Math.random() * 50) + 1
  var d20 = Math.floor(Math.random() * 20) + 1
  var d12 = Math.floor(Math.random() * 12) + 1
  var d10 = Math.floor(Math.random() * 10) + 1
  var d8 = Math.floor(Math.random() * 8) + 1
  var d6 = Math.floor(Math.random() * 6) + 1
  var d4 = Math.floor(Math.random() * 4) + 1
  var d2 = Math.floor(Math.random() * 2) + 1
  if (x == 0) {
    document.getElementById('demodice').innerHTML = d100
  }
  if (x == 1) {
    document.getElementById('demodice').innerHTML = d50
  }
  if (x == 2) {
    document.getElementById('demodice').innerHTML = d20
  }
  if (x == 3) {
    document.getElementById('demodice').innerHTML = d12
  }
  if (x == 4) {
    document.getElementById('demodice').innerHTML = d10
  }
  if (x == 5) {
    document.getElementById('demodice').innerHTML = d8
  }
  if (x == 6) {
    document.getElementById('demodice').innerHTML = d6
  }
  if (x == 7) {
    document.getElementById('demodice').innerHTML = d4
  }
  if (x == 8) {
    document.getElementById('demodice').innerHTML = d2
  }
  document.getElementById('demoindex').innerHTML =
    'Index: ' + y[x].index + ' is ' + y[x].text
}
function btnClear() {
    document.getElementById('demo').innerHTML = ''
    document.getElementById('demodice').innerHTML = ''
    document.getElementById('demoindex').innerHTML = ''
    document.getElementById('firstdash').innerHTML = ''
    document.getElementById('seconddash').innerHTML = ''
    document.getElementById('statsAdded').innerHTML = ''
    document.getElementById('addInfo').innerHTML = ''
}