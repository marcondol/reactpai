import React from 'react';
import { Container, Content, ListItem, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

class MateriList extends React.Component {
  constructor() {
    super();
    this.state = { header: [{ id: 1, judul: 'Membuka Relung Hati', componen: 'relungHati' },
                  { id: 2, judul: 'Perawatan Jenazah' }, 
                  { id: 3, judul: 'Memandikan Jenazah' }, 
                  { id: 4, judul: 'Mengkafani Jenazah' }, 
                  { id: 5, judul: 'Menyalati Jenazah' }, 
                  { id: 6, judul: 'Menguburkan Jenazah' },
                  { id: 7, judul: 'Taziah' }, 
                  { id: 8, judul: 'Ziarah Kubur' }, 
                  { id: 9, judul: 'Rangkuman' },
                  { id: 10, judul: 'Soal-soal' }
                  ],
                   detail: 0 };
  }

  componentDidUpdate() {
    if (this.state.detail !== 0) {
      switch (this.state.detail) {
        case 1:
          Actions.relungHati();
          break;
        case 2:
          Actions.Perawatan();
          break;
        case 3:
          Actions.memandikan();
          break;
        case 4:
          Actions.mengkafani();
          break;
        case 5:
          Actions.menshalatkan();
          break;
        case 6:
          Actions.mengkuburkan();
          break;
        case 7:
          Actions.taziah();
          break;
        case 8:
          Actions.ziarah();
          break;
        case 9:
          Actions.rangkuman();
          break;
        case 10:
          Actions.soal();
          break;
        default:
          console.log(this.state.detail);
      }
    }
  }

  listItems() {    
    const listItems = this.state.header.map((item) => {
      return (  
              <ListItem key={item.id} button onPress={() => this.setState({ detail: item.id })}>
                <Text>{item.judul}</Text>
              </ListItem>
             );
    });

    return listItems;
  }

  render() {
    return (<Container>
                <Content>                  
                  { this.listItems() }
                </Content>   
           </Container>);
  }

}

export default MateriList;
