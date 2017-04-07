import React from 'react';
import { ScrollView } from 'react-native';
import { View, Text, } from 'native-base';

const taziah = () => {
    return (<ScrollView>
              <View style={styles.container}>
                  <Text style={styles.paragraf}>
                      {`Ta’ziyyah atau melayat adalah mengunjungi orang yang sedang tertimpa musibah kematian salah seorang keluarganya dalam rangka menghibur atau memberi semangat. Para mu’azziyin( orang laki-laki yag ber-ta’ziyyah ) atau mu’aziyyat ( orang perempuan yang ber-ta’ziyyah ) hedaknya memberikan dorongan kekuatan mental atau menasihati agar orang yang tertimpa musibah tetap sabar dan tabah menghadapi musibah ini. Umayah ra.mengatakan ini bahwa anak perempua Rasulullah saw.menyuruh seseorang untuk memanggil dan memberi tahu beliau bahwa anaknya dalam keadaan hampir mati. Lalu beliau bersabda, kembalilah engkau kepadanya. Katakan bahwa segala yag diambil dan yang diberikan, bahkan apapun yang ada dihadapan kita kepunyaan Allah. Dialah yang menentukan ajalnya, maka suruhlah ia sabar dan tunduk kepada perintah.”(HR. Bukhari Muslim )`}
                  </Text> 
                  <Text style={styles.tittle}>Adab Ber taziah</Text>
                  <Text style={styles.paragraf}>
                      {`1.	Menyampaikan do’a untuk kebaikan dan ampunan terhadap orang yang meninggal serta kesabaran bagi orang yang ditinggal.
                        \n2.	Hindarilah pembicaraan yang menambah sedih keluarga yang ditimpa musibah
                        \n3.	Hindarilah canda tawa apalagi sampai terbahak bahak
                        \n4.	Usahakan turut menyalati mayat dan turut mengantarkan ke pemakaman sampai selesai penguburan
                        \n5.	Membuatkan makanan bagi keluarga yang ditimpa musibah
                        \nDemikian diperintahkan Rasulullah saw. kepada keluarganyasewaktu keluarga Ja’far ditimpa kematian ( HR. Lima ahli hadits kecuali Nasai )
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

export { taziah };

