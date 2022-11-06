function createGame(player1, hour, player2) {
	return `
<li>
	<img src="./assets/icon-${player1}.svg" alt="" />
			<strong>${hour}</strong>
	<img src="./assets/icon-${player2}.svg" alt="" />
						</li>
  `
}
let delay = -0.5
function createCard(date, day, games) {
	delay = delay + 0.5
	return `
<div class="card" style="animation-delay: ${delay}s">

					<h2>${date} <span>${day}</span></h2>
					<ul>
						${games}
					</ul>
				</div>
`
}

document.querySelector("#app").innerHTML = `

<header>
 <img src="./assets/logo.svg" alt="" />
</header>

			<main id="cards">
				${createCard(
					"24/11",
					"segunda",
					createGame("brasil", "08:00", "cameroon") +
						createGame("hungary", "13:00", "argentina") +
						createGame("colombia", "20:00", "japan")
				)}


        ${createCard(
					"28/11",
					"quinta",
					createGame("britishcolumbia", "08:00", "cameroon") +
						createGame("india", "13:00", "armenia") +
						createGame("comoros", "20:00", "jordan")
				)} 
   
			</main>
`
