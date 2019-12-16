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
  				<ShopItem title="Skarpetki" description="Bawełniane w czerwoną kratę" onBuy={this.handleBuy}/>
  				<ShopItem title="Koszula" description="Jedwabna, z kołnierzykiem typu straight, kremowa" onBuy={this.handleBuy}/>
  				<ShopItem title="Krawat" description="Wzorzysty, żakardowy, miodowy" onBuy={this.handleBuy}/>
  				<ShopItem title="Spinka do krawata" description="W formie pióra, ecru" onBuy={this.handleBuy}/>
  				<ShopItem title="Poszetka" description="Jedwabna, gładka, zieleń butelkowa" onBuy={this.handleBuy}/>
  				<ShopItem title="Muszka" description="Średnia, typu pre-tied, bordowa" onBuy={this.handleBuy}/>
  				<ShopItem title="Spinki do mankietów" description="W formie okrętowego koła ratunkowego" onBuy={this.handleBuy}/>
  				<ul> 
    				{this.state.shoppingList.map( (title, idx) => <li key={idx}>{title}</li>)}
  				</ul>     {/*dla każdego przedmiotu (i indeksu) utwórz 'li' z atrybutami*/}
  				
			</div> 
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