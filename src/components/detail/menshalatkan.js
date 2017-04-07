import React from 'react';
import { ScrollView } from 'react-native';
import { View, Text, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
 
const vidshalat = require('../raw/sholat.mp4');

class menshalatkan extends React.Component {
    presEvent() {
        Actions.film({ loc: vidshalat });
    }

    render() {
         return (<ScrollView>
              <View style={styles.container}>
                  <Text style={styles.paragraf}>
                      {`Orang yang meninggal dunia dalam keadaan islam berhak untuk di-shalatkan. Sabda Rasulullah saw. “ Shalatkanlah orang-orang yang telah mati.”( HR. Ibnu Majah ). Shalatkanlah olehmu orang-orang yang mengucapkan :“ Lailaaha Illallah “( HR. Daruqutni ). Dengan demikian,  jelaslah bahwa orang yang berhak dishalati ialah orang yang meninggal dunia dalam keadaan beriman kepada Allah swt. Adapun orang yang telah murtad dilarang untuk dishalati.
                      `}
                  </Text> 
                  <Text style={styles.tittle}>Untuk bisa dishalati, keadaan si mayat haruslah</Text>
                  <Text style={styles.paragraf}>
                      {`1.	Suci, baik badan, tempat dan pakaian
                        \n2.	Sudah dimandikan dan dikafani
                        \n3.	Jenazah sudah berada di depan orang yang menyalatkan atau sebelah kiblat. 
                      `}
                  </Text>
                  <Text style={styles.tittle}>Tata cara pelaksanaan shalat jenazah adalah sebagai berikut :</Text>
                  <Text style={styles.paragraf}>
                      {`1.	Jenazah diletakkan paling muka. Apabila mayat laki-laki, hendaknya imam berdiri menghadap dekat kepala mayat. Jika mayat wanita, imam menghadap dekat perutnya.
                        \n2.	Letak imam paling muka diikuti oleh para makmum. Jika yang menyalati sedikit, usahakan dibuat 3 baris/saf.
                        \n3.	Mula-mula semua jamaah berdiri dengan berniat melakukan shalat jenazah dengan empat takbir.
                        Niat tersebut jika dilafalkan sebagai berikut :\n
                        أصلي على هذا الميت ( هذه الميتة ) اربع تكبيرات فرض كفاية مأموما لله تعالى
                        Artinya :“ Aku berniat salat atas jenazah ini empat takbir fardlu kifayah sebagai makmum karena Allah ta’ala”.
                        \n4.	Kemudian takbirotul ihram yang pertama, dan setelah takbir pertama itu selanjutnya membaca surat al-fatihah.
                        \n5.	Takbir yang kedua, dan setelah itu, membaca shalawat atas Nabi Muhammad saw.\n

                            اللهم صل على سيدنا محمد وعلى ال سيدنا محمد

                        \n6.	Takbir yang ketiga kemudian membaca doa untuk jenazah. Bacaan doa bagi jenazah adalah sebagai berikut :\n

                             اللهم اغفرله ( ها ) وارحمه ( ها ) وعافه ( ها ) واعف عنه ( ها ) 

                        Artinya :“ ya Allah, ampunilah ia, kasihanilah ia, sejahterakanlah ia, maafkanlah kesalahannya. “
                        \n7.	Takbir keempat, dilanjutkan dengan membaca doa sebagai berikut :\n
                        اللهم لاتحرمنا أجره ( ها ) ولاتفتنا بعده ( ها ) واغفر له ( ها ) 
                        Artinya : “ ya Allah, janganlah engkau menjadikan kami penghalang dari mendapatkan pahalanya dan janganlah engkau beri kami fitnah sepeninggalnya, dan ampunilah kami dan dia.” ( HR. Hakim )

                        \n8.	Membaca salam sambil menoleh ke kanan dan ke kiri. 
                      `}
                  </Text>   
              </View>
              <View>
                <Button iconLeft info block onPress={this.presEvent}>
                  <Icon active name='film' />
                  <Text>Menshalatkan Jenazah</Text>
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

export { menshalatkan };

