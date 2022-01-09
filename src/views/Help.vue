<template>
  <div class="about">
    <img alt="Pokeball Logo" width="200" src="../assets/pokeball.png">
    <h1>Das Pokémon Team Tool</h1>
    <h4> Willkommen in der Welt der Pokémon! <br> <br>

      Verwalte deine Pokémon Teams in diesem Online Tool. <br> <br>

      Von der Homepage aus gelangst du über den Button "Los geht's!" zur <br>
      Seite About. Hier wird dir die Nutzung des Tools schnell und einfach erklärt: <br> <br>

      Über den Button "Team erstellen" gelangst du zum TeamDex. Hier kannst du deine <br>
      eigenen Teams erstellen. Füge dabei nützliche Informationen wie einen Team Namen, <br>
      das Spiel, für welches das Team erstellt wird und den Haupttyp des Teams hinzu. <br>
      Alle erstellten Teams mit den dazugehörigen PokéDexNummern lassen sich hier einsehen. <br>
      Jede PokéDexNummer steht dabei für ein dazugehöriges Pokémon. <br>
      Betrachte nicht nur deine eigenen, sondern bewundere auch die Teams anderer Spieler. <br> <br>

      Wählst du auf der Seite About den Button "Pokémon hinzufügen" landest du im PokéDex. <br>
      Hier kannst du deiner Sammlung Pokémon hinzufügen. Diese zeichnen sich durch verschiedene <br>
      Daten aus, welche du eintragen kannst: Den Namen des Pokémon, die TeamDexNummer, die <br>
      Herkunftsregion, das Level, den Typ und die Wahl, ob das Pokémon entwickelt wurde. <br>
      Die TeamDexNummer bestimmt dabei das Team, welchem du das Pokémon hinzufügst. <br>
      Nach dem Erstellen kannst du deine Pokémon im PokéDex einsehen - ebenso wie die Pokémon <br>
      anderer Spieler aus aller Welt! <br>

      Zum Wechseln zwischen den Seiten Home, About, dem TeamDex und dem PokéDex lässt sich die <br>
      vorhandene Navbar nutzen. Ebenso besteht die Möglichkeit, sich von den Buttons auf der <br>
      Homepage und der Seite About als Option zum einfachen Einstieg in das Tool leiten zu lassen. <br> <br>
      Alternativ steht dir diese Help-Page als Hilfe zur Seite. <br> <br>
      Nun steht der Kreation deiner eigenen Teams nichts mehr im Weg! <br>
      Die Welt der Pokémon wartet schon auf dich.</h4> <br>
    <h3>Nutze jetzt das Pokémon Team Tool!</h3> <br>
    <a class="btn btn-success" href="https://pokemon-team-tool-frontend.herokuapp.com/teams"
       style="border-radius:30px; padding-left: 40px; padding-right: 40px; margin-bottom: 30px" role="button"> <b> Team erstellen </b> </a> &nbsp;
    <a class="btn btn-success" href="https://pokemon-team-tool-frontend.herokuapp.com/pkmn"
       style="border-radius:30px; margin-bottom: 30px" role="button"> <b> Pokémon hinzufügen </b> </a>
  </div>
</template>

<style>
.about {
  padding-top: 20px;
  color: whitesmoke;
}
</style>
