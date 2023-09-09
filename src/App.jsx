// import React, { Component } from 'react'
// import Header from './components/Header'
// import Footer from './components/Footer'
// import Items from  './components/Items'
// import Categories from './components/Categories'
// import ShowFullItem from './components/ShowFullItem'


// export class App extends React.Component {
//   constructor(props){
//     super(props)
//     this.state={
//       orders: [],
//       currentItems: [],
//       items: [
//         {
//           id:1,
//           title: 'Буйдан',
//           img:'sofas.jpg',
//           decs: 'Lorem ipsum dolor sit amet',
//           category: 'chairs',
//           price:"10'000'000₮"
//         },
//         {
//           id:2,
//           title: 'Сандал',
//           img:'chair.jpg',
//           decs: 'Lorem ipsum dolor sit amet',
//           category: 'chairs',
//           price:"450'000"
//         },
//         {
//           id:3,
//           title: 'Гэрэл',
//           img:'polar-black-table-lamp.jpg',
//           decs: 'Lorem ipsum dolor sit amet',
//           category: 'chairs',
//           price:"500'000₮"
//         },
//         {
//           id:4,
//           title: 'Ширээ',
//           img:'desk.jpg',
//           decs: 'Lorem ipsum dolor sit amet',
//           category: 'chairs',
//           price:"1'200'000₮"
//         },
//         {
//           id:5,
//           title: 'Цагаан байшин',
//           img:'max.jpg',
//           decs: 'Lorem ipsum dolor sit amet',
//           category: 'chairs',
//           price:"450'000'000₮"
//         },
//         {
//         id:6,
//         title: 'Шүүгээ',
//         img:'shugee.jpg',
//         decs: 'Lorem ipsum dolor sit amet',
//         category: 'chairs',
//         price:"20'000'000₮"
//       },
//       ],
//       ShowFullItem: false,
//       fullItem: {},
//     }
//     this.state.currentItems = this.state.items
//     this.chooseCategory = this.chooseCategory.bind(this)
//     this.addToOrder = this.addToOrder.bind(this)
//     this.deleteOrder = this.deleteOrder.bind(this)
//     this.onShowItem = this.onShowItem.bind(this)
//   }
//   render() {
//     return (
//       <div className='wrapper'>
//         <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
//         <Categories chooseCategory={this.chooseCategory} 
//         />
//         <Items
//         //  items={this.state.items}
//         items={this.state.currentItems}
//         onadd={this.addToOrder}
//         onShowItem={this.onShowItem}
//         />
//         {this.state.ShowFullItem && (
//           <ShowFullItem
//             onShowItem={this.onShowItem}
//             onadd={this.addToOrder}
//             item={this.state.fullItem}
//           />
//         )}
//         <Footer/>
//       </div>
//     )
//   }


//   onShowItem(item) {
//     this.setState({ fullItem: item})
//     this.state({ ShowFullItem: !this.state.ShowFullItem})
//   }

//   chooseCategory(category) {
//     if (category === 'all') {
//       this.setState({ currentItems: this.state.items })
//       return
//     }

//     this.setState({
//       currentItems: this.state.items.filter((el) => el.category === category),
//     })
//   }

//   deleteOrder(id) {
//     this.setState({ orders:this.state.orders.filter((el) => el.id !== id) })
//   }

//   addToOrder(item) {
//     let isInArray = false 
//     this.state.orders.array.forEach( (el)=> {
//       if (el.id === item.id) isInArray = true
//     })
//     if (!isInArray) this.setState({ orders: [...this.state.orders, item]})
//   }
// }

// export default App

import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Items from './components/Items'
import Categories from './components/Categories'
import ShowFullItem from './components/ShowFullItem'

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id:1,
          title: 'Буйдан',
          img:'sofas.jpg',
          decs: 'Lorem ipsum dolor sit amet',
          category: 'chairs',
          price:"10000000"
        },
        {
          id:2,
          title: 'Сандал',
          img:'chair.jpg',
          decs: 'Lorem ipsum dolor sit amet',
          category: 'chairs',
          price:"450000"
        },
        {
          id:3,
          title: 'Гэрэл',
          img:'polar-black-table-lamp.jpg',
          decs: 'Lorem ipsum dolor sit amet',
          category: 'chairs',
          price:"500000"
        },
        {
          id:4,
          title: 'Ширээ',
          img:'desk.jpg',
          decs: 'Lorem ipsum dolor sit amet',
          category: 'chairs',
          price:"1200000"
        },
        {
          id:5,
          title: 'Цагаан байшин',
          img:'max.jpg',
          decs: 'Lorem ipsum dolor sit amet',
          category: 'chairs',
          price:"450000000"
        },
        {
        id:6,
        title: 'Шүүгээ',
        img:'shugee.jpg',
        decs: 'Lorem ipsum dolor sit amet',
        category: 'chairs',
        price:"20000000"
      },
      ],
      showFullItem: false,
      fullItem: {},
    }
    this.state.currentItems = this.state.items
    this.chooseCategory = this.chooseCategory.bind(this)
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          items={this.state.currentItems}
          onAdd={this.addToOrder}
          onShowItem={this.onShowItem}
        />
        {this.state.showFullItem && (
          <ShowFullItem
            onShowItem={this.onShowItem}
            onAdd={this.addToOrder}
            item={this.state.fullItem}
          />
        )}
        <Footer />
      </div>
    )
  }

  onShowItem(item) {
    this.setState({ fullItem: item })
    this.setState({ showFullItem: !this.state.showFullItem })
  }

  chooseCategory(category) {
    // console.log(category)
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
    }

    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    })
  }

  deleteOrder(id) {
    // console.log(id)
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) })
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true
    })
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App
