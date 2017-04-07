import React from 'react';
import { ScrollView } from 'react-native';
import { Icon, View, Text, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

const vidkafani = require('../raw/mengkafani.mp4');

class mengkafani extends React.Component {
    presEvent() {
        Actions.film({ loc: vidkafani });
    }

    render() {
        return (<ScrollView>
              <View style={styles.container}>
                  <Text style={styles.tittle}>Cara Mengkafani</Text>
                  <Text style={styles.paragraf}>
                      {`Pembelian kain kafan diambilkan dari uang si mayat sendiri, apabila tidak ada, orang yang selama ini yang menghidupinya yang membelikan kain kafan. Bila ia tidak mampu boleh diambilkan dari uang kas masjid, atau kas RT/RW, atau yang lainnya secara sah. Apabila tidak ada sama sekali, maka wajib atas orang muslim lain yang mampu untuk membiayainya.
                        \nKain kafan paling tidak satu lapis. Sebaiknya 3 lapis bagi mayat laki-laki dan lima lapis bagi mayat perempuan. Setiap satu lapis diantaranya merupakan kain basahan.Abu Salamah ra. Menceritakan, bahwa ia pernah bertanya kepada ‘Aisyah ra. “ Berapa lapiskah kain kafan Rosululloh saw. “ tiga lapis kain putih “ jawab ‘Aisyah. ( HR. Muslim ).
                        \nCara membungkusnya adalah hamparkan kain kafan helai demi helai dengan menaburkan kapur barus pada tiap lapisnya.Kemudian si mayat diletakkan di atasnya.Kedua tangannya dilipat di atas dada dengan tangan kanan di atas tangan kiri.Mengafaninya pun tidak boleh asal-asalan.“ Apabila kalian mengafani mayat saudara kalian, kafanilah sebaik-baiknya. “ ( HR. Muslim dari Jabir Abdullah ra. )
                      `}
                  </Text> 
              </View>
              <View>
                <Button iconLeft info block onPress={this.presEvent}>
                  <Icon active name='film' />
                  <Text>Mengkafani Jenazah</Text>
                </Button>
              </View>
            </ScrollView>
           );
    }
}

const styles = {
    header: {
        fontSize: 18,
        flex: 1,
        alignSelf: 'center'
    },
    tittle: {
        fontSize: 18,
        flex: 1,
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 10
    },
    container: {
        flex: 1,
        marginLeft: 15,
        marginRight: 13,
        marginBottom: 20
    },
    paragraf: {
        flex: 1,
        fontSize: 15, 
        marginTop: 0
    }

};

export { mengkafani };

