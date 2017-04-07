import React from 'react';
import { ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Icon, View, Text, Button } from 'native-base';

const mandiPria = require('../raw/memandikan.mp4');
// const mandiWanita = require('../raw/mandiWanita.mp4');
const mandiWanita = require('../raw/memandikan.mp4');

class memandikan extends React.Component {

  presEventPria() {
    Actions.film({ loc: mandiPria });
  }

  presEventWanita() {
    Actions.film({ loc: mandiWanita });
  }

  render() {
    return (<ScrollView>
              <View style={styles.container}>
                  <Text style={styles.tittle}>Syarat Memandikan Jenazah</Text>
                  <Text style={styles.paragraf}>
                      {`a.	Jenazah itu orang islam. Apa pun alirannya, madzhab, ras, suku dan profesinya.
                        \nb.	Didapati tubuhnya walaupun sedikit
                        \nc.	Bukan mati syahid ( mati dalam peperangan untuk membela agama islam seperti yang terjadi pada masa Nabi Muhammad saw. ) 
                      `}
                  </Text>                  
                  <Text style={styles.tittle}>Yang Berhak memandikan jenazah</Text>
                  <Text style={styles.paragraf}>
                      {`a.	Apabila jenazahnya laki-laki, yang memandikannya hendaknya laki-laki. Perempuan tidak boleh memandikan jenazah laki-laki, kecuali istri dan mahramnya.
                        \nb.	Apabila jenazah itu perempuan, hendaklah dimandikan oleh perempuan. Laki-laki tidak boleh memandikan kecuali suami atau mahramnya.
                        \nc.	Apabila jenazah itu seorang istri, sementara suami dan mahramnya ada semua, suami lebih berhak untuk memandikan istrinya.
                        \nd.	Apabila jenazah itu seorang suami, sementara istri dan mahramnya ada semua, istri lebih berhak untuk memandikan suaminya.
                      `}
                  </Text>
                  <Text>
                    Kalau jenazah anak laki-laki masih kecil, perempuan boleh memandikannya.Begitu juga kalau jenazah perempuan masih kecil, laki-laki boleh memandikannya.
                  </Text>
                  <Text style={styles.tittle}>Tata cara memandikan jenazah</Text>
                  <Text style={styles.paragraf}>
                      {`1.	Di tempat tertutup agar yang melihatnya hanya orang-orang yang memandikan dan yang mengurusnya saja.
                        \n2.	Jenazah diletakkan di tempat yang tinggi seperti dipan.
                        \n3.	Dipakaikan kain basahan seperti sarung agar auratnya tidak terbuka
                        \n4.	Jenazah disandarkan pada sesuatu, lantas disapu perutnya sambil ditekan pelan-pelan agar semua kotorannya keluar, lantas dibersihkan dengan tangan kirinya. Dianjurkan mengenakan sarung tangan. Dalam hal ini boleh memakai wangi-wangian agar tidak terganggu bau kotoran si mayyit/jenazah.
                        \n5.	Setelah itu hendaklah mengganti sarung tangan untuk membersihkan mulut dan gigi jenazah
                        \n6.	Membersihkan semua kotoran dan najis
                        \n7.	Mewudhukan, setelah itu membasuh seluruh badannya
                        \n8.	Disunnahkan membasuh 3 sampai 5 kali.
                      `}
                  </Text>
                  <Text>
                    Air untuk memandikan jenazah sebaiknya dingin.Kecuali udara sangat dingin atau ada kotoran yang sulit dihilangkan, boleh menggunakan air hangat.
                  </Text>
              </View>
              <View>
                <Button iconLeft info block onPress={this.presEventPria}>
                  <Icon active name='film' />
                  <Text>Memandikan Jenazah Pria</Text>
                </Button>
              </View>
              <View>
                <Button iconLeft info block onPress={this.presEventWanita}>
                  <Icon active name='film' />
                  <Text>Memandikan Jenazah Wanita</Text>
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

export { memandikan };

