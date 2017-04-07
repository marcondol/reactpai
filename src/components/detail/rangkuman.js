import React from 'react';
import { ScrollView } from 'react-native';
import { View, Text, } from 'native-base';

const rangkuman = () => {
    return (<ScrollView>
              <View style={styles.container}>
                  <Text style={styles.paragraf}>
                      {`Kita sebagai muslim harus peduli dengan orang lain, terutama yag berada di sekitar kita. Ketika ada orang yang meninggal atau musibah lainnya, selayaknya kita harus memperlihatkan perilaku-perilaku mulia. Perilaku mulia yang dimaksud antara lain seperti berikut :
                      `}
                  </Text>                  
                  <Text style={styles.paragraf}>
                      {`
                        1.	Segera mengunjungi keluarga yag terkena musibah, mendoakan mayat, mengucapkan turut berduka kepada keluarga yang ditinggalkan.
                        \n2.	Membantu persiapan pengurusan jenazah seperti memandikan, mengafani, menyalati dan meguburkan.
                        \n3.	Memberikan bantuhan kepada keluarga korban untuk memperingan bebannya sesuai kemampuan kita.
                        \n4.	Menghibur keluarga korban dengan ungkapan-ungkapan optimistis dan nasihat tentang kesabaran dan ketabahan.
                      `}
                  </Text>
                  <Text style={styles.tittle}>Rangkuman</Text>
                  <Text style={styles.paragraf}>
                      {`
                        1.	Kewajiban kita terhadap jenazah antara lain : memandikan, mengafani, menyalati, dan meguburnya
                        \n2.	Yang berhak memandikan jenazah adalah keluarga terdekat, bapak, ibu, suami, istri dan anak
                        \n3.	Bagi laki-laki disunnahkan tiga helai kain kafan, bagi perempuan lima helai kain kafan
                        \n4.	Tata cara shalat jenazah berbeda dengan shalat biasa. Pada shalat jenazah, tidak ada ruku dan sujud, hanya empat kali takbir dan diselingi doa
                        \n5.	Cara mengingat mati adalah dengan menjeguk atau ber-ta’ziyyah dan berziarah kubur
                        \n6.	Mengurus jenazah hukumnya fardlu kifayah, yaitu kewajiban secara bersama-sama atau gotong royong.
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

export { rangkuman };

