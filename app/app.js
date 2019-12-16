class Shop extends React.Component {
	state = { 			// stan początkowy - pusta tablica
		shoppingList: []
	}
	handleBuy = title => {
		this.setState({
			shoppingList: [...this.state.shoppingList, title] // dorzucamy do tablicy, tę pusta i nowe elementy
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
				<h2>Elementy garderoby wg Twoich upodobań</h2>
  				<ShopItem title="Skarpetki" description="Bawełniane w czerwoną kratę" price="45" onBuy={this.handleBuy}/>
  				<ShopItem title="Koszula" description="Jedwabna, z kołnierzykiem typu straight, kremowa" price="245" onBuy={this.handleBuy}/>
  				<ShopItem title="Krawat" description="Wzorzysty, żakardowy, miodowy" price="167" onBuy={this.handleBuy}/>
  				<ShopItem title="Spinka do krawata" description="W formie pióra, ecru" price="199" onBuy={this.handleBuy}/>
  				<ShopItem title="Poszetka" description="Jedwabna, gładka, zieleń butelkowa" price="98" onBuy={this.handleBuy}/>
  				<ShopItem title="Muszka" description="Średnia, typu pre-tied, bordowa" price="189" onBuy={this.handleBuy}/>
  				<ShopItem title="Spinki do mankietów" description="W formie okrętowego koła ratunkowego" price="139" onBuy={this.handleBuy}/>
  				<h2>Zawartość koszyka</h2>
  				<ul> 
    				{this.state.shoppingList.map( (title, idx, price) => <li key={idx}>{title}</li>)}
  				</ul>     {/*dla każdego przedmiotu (i indeksu) utwórz 'li' z atrybutami*/}
  				{ this.state.shoppingList.length > 0 ? <button onClick={this.emptyBasket}>Opróżnij koszyk</button> : "" }
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
			<div>
				<h3>{this.props.title}</h3>
				<p>{this.props.description}</p>
				<span>{this.props.price} zł </span>
				<button onClick={this.handleClick}>KUP</button>
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