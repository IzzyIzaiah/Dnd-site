function myFunction() {
  var x = document.getElementById('mySelect').selectedIndex
  if (x == 0) {
    document.getElementById('demo').innerHTML = 'You selected d20'
    var dex = Math.floor(Math.random() * 20) + 1
    var dexmod = (dex - 10) / 2
    var charis = Math.floor(Math.random() * 20) + 1
    var charmod = (charis - 10) / 2
    var intel = Math.floor(Math.random() * 20) + 1
    var intelmod = (intel - 10) / 2
    var wisd = Math.floor(Math.random() * 20) + 1
    var wisdmod = (wisd - 10) / 2
    var str = Math.floor(Math.random() * 20) + 1
    var strmod = (str - 10) / 2
    var con = Math.floor(Math.random() * 20) + 1
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
    document.getElementById('demo').style.display = 'block'
  }
  if (x == 1) {
    document.getElementById('demo').innerHTML = 'You selected 4d6'
    document.getElementById('demo').style.display = 'block'
  }
}
