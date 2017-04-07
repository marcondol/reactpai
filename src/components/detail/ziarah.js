import React from 'react';
import { ScrollView } from 'react-native';
import { View, Text, } from 'native-base';

const ziarah = () => {
    return (<ScrollView>
              <View style={styles.container}>
                  <Text style={styles.paragraf}>
                      {`
                        Ziarah artinya berkunjung, kubur artinya kuburan.Ziarah kubur artinya berkunjung ke kuburan. Awalnya Rasulullah saw. melarang umat islam untuk berziarah kubur karena dihawatirkan akan melakukan sesuatu hal yang tidak baik, misalnya menangis diatas kuburan, bersedih, meratapi, bahkan yang lebih berbahaya adalah mengultuskan mayat yang ada di kuburan. Aka tetapi, karena mengingat mati itu penting, dan diantara mengingat mati adalah ziarah kubur, Rasulullah saw.menganjurkan berziarah dengan tujuan megingat mati. Rasulullah saw. bersabda : \n
                        عن أبي بريدة قال قال رسول الله صلى الله عليه وسلم إني كنت نهيتكم عن زيارة القبورفزورها ( رواه النسائ )
                        \nArtinya :Dari Abdullah bin buraidah berkata, Rasulullah saw. bersabda : “ aku pernah melarang kalian berziarah kubur, maka sekarang berziarahlah kalian ke kubur.”( HR. Nasa’i )
                      `}
                  </Text> 
                  <Text style={styles.tittle}>Hikmah Ziarah Kubur</Text>
                  <Text style={styles.paragraf}>
                      {`
                        1.	Mengingat kematian
                       \n 2.	Dapat bersikap zuhud ( menjauhkan diri dari sifat keduniawian )
                       \n 3.	Selalu ingin berbuat baik sebagai bekal kelak di alam kubur dan hari akhir
                       \n 4.	Medoakan si mayat yang muslim agar diampuni dan diberi kesejahteraan di akhirat                        
                      `}
                  </Text> 
                  <Text style={styles.tittle}>Adab Ziarah Kubur</Text>
                  <Text style={styles.paragraf}>
                      {`
                        1.	Ketika mau berziarah, niatkan dengan ikhlas karena Allah swt, tunduk hati dan merasa diawasi oleh Allah.
                       \n 2.	Sesampai di pintu kuburan, ucapkan salam sebagaimana yang diajarkan oleh Rasulullah saw.
                       \n السلام عليكم يا أهل القبور فإنا ان شاء الله بكم لاحقون ( رواه الترميذي )
                       \n 3.	Artinya :“ keselamatansemoga tetap bagimu wahai ahli kubur dan insya Allah kami akan bertemu dengan kamu semua. ( HR. Tarmidzi ) 
                       \n 4.	Tidak banyak bicara mengenai urusan dunia diatas kuburan
                       \n 5.	Berdoa untuk ampunan dan kesejahteraan si mayat di alam barzah dan akhirat kelak
                       \n 6.	Diusahakan tidak berjalan melangkahi kuburan atau menduduki nisan ( tanda kuburan )
                      `}
                  </Text>                   
              </View>
            </ScrollView>
           );
        };

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

export { ziarah };

