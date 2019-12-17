class Shop extends React.Component {
	state = { 			// stan początkowy - pusta tablica na nazwy klikniętych towarów
		shoppingList: []
	}
	handleBuy = (title, price) => {
		this.setState({
			shoppingList: [...this.state.shoppingList, title] // dorzucamy do tablicy, tę pustą i nowy element
		})
	}
	emptyBasket = () => {
		this.setState({
			shoppingList: []
		})
	}
	render() {
		return (
			<div>
				<h2>Sugerowane elementy garderoby</h2>
  				<ShopItem title="Skarpetki" description="Bawełniane w czerwoną kratę" price="45" no="244" onBuy={this.handleBuy}/>
  				<ShopItem title="Koszula" description="Jedwabna, z kołnierzykiem typu 'straight', kremowa" price="245" no="444" onBuy={this.handleBuy}/>
  				<ShopItem title="Krawat" description="Wzorzysty, żakardowy, miodowy" price="167" no="432" onBuy={this.handleBuy}/>
  				<ShopItem title="Spinka do krawata" description="W formie pióra, ecru" price="199" no="345" onBuy={this.handleBuy}/>
  				<ShopItem title="Poszetka" description="Jedwabna, gładka, zieleń butelkowa" price="98" no="566" onBuy={this.handleBuy}/>
  				<ShopItem title="Muszka" description="Średnia, typu 'pre-tied', bordowa" price="189" no="765" onBuy={this.handleBuy}/>
  				<ShopItem title="Spinki do mankietów" description="W formie okrętowego koła ratunkowego" price="139" no="443" onBuy={this.handleBuy}/>
  				<h2>Zawartość koszyka</h2>
  				<ul> 
    				{ this.state.shoppingList.length > 0 ? this.state.shoppingList.map( (title, no) => <li key={no}>{title}</li>) : "Twoj koszyk jest pusty" }
  				</ul>     {/* dla każdego przedmiotu (i indeksu) utwórz 'li' z atrybutami */}
  				{ <button className="sumTotal">Razem cena</button> }
  				{ this.state.shoppingList.length > 0 ? <button onClick={this.emptyBasket} className="emptyBasket">Opróżnij koszyk</button> : "" }
			</div>		/* jeśli pojawi się jakikolwiek produkct w koszyku, renderuj przycisk opróżniający listę */
		);
	}
}

class ShopItem extends React.Component {
	handleClick = () => {
		if (typeof this.props.onBuy === "function") {
			this.props.onBuy(this.props.title)
		}
	} 
	render() {
		return (
			<div className="fashionItem">
				<h3>{this.props.title}</h3>
				<p>{this.props.description}</p>
				<span>{this.props.price} zł </span> <span>(Kat. No {this.props.no})</span>
				<button onClick={this.handleClick}>Kupuję</button>
			</div>
		);
	}
}

function App() {
	return <Shop />
}

ReactDOM.render(
	<App />, 
	document.getElementById("root")
);