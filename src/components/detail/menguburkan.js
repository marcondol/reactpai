import React from 'react';
import { ScrollView } from 'react-native';
import { Icon, View, Text, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

const vidkubur = require('../raw/kubur.mp4');

class menguburkan extends React.Component {
    presEvent() {
        Actions.film({ loc: vidkubur });
    }

    render() {
        return (<ScrollView>
              <View style={styles.container}>
                  <Text style={styles.tittle}>Adab Menguburkan Jenazah</Text>
                  <Text style={styles.paragraf}>
                      {`1.	Perihal mengubur jenazah ada beberapa penjelasan sebagai berikut :
                        Rasulullah saw. Menganjurkan agar jenazah segera dikuburkan, sesuai sabdanya :
                        عن أبي هريرة رضي الله عنه عن النبي صلى الله عليه وسلم قال أسرعوا بالجنازة ( روه البخاري ومسلم )
                        Artinya :“ dari abu hurairoh ra. Dari Nabi Muhammad saw.bersabda :segerakanlah menguburkan jenazah… “ (H.R. Bukhari dan Muslim )
                        \n2.	Sebaiknya mennguburkan jenazah pada siang hari. Megubur jenazah pada malam hari diperbolehkan apabila dalam keadaan terpaksa seperti bau yang sangat menyengat meskipun sudah diberi wangi-wangian atau karena sesuatu hal lain yang harus disegerakan untuk dikubur.
                        \n3.	Anjuran meluaskan lubag kubur. Rasulullah saw. pernah mengantar jenazah sampai di kuburnya. Lalu beliau duduk di tepi lubang kubur, dan bersabda, Luaskanlah pada bagian kepala, dan luaskanlah pula pada bagian kaki, ada beberapa kurma baginya di surge( HR. Ahmad dan Abu Dawud ).
                        \n4.	Boleh meguburkan dua/tiga jenazah dalam satu liang kubur. Hal itu dilakukan sewaktu selesai perang uhud.  Rasulullah saw. bersabda : “ galilah dan dalamkanlah. Baguskanlah dan masukkanlah dua atau tiga orang di dalam satu liang kubur. Dahulukalah orang yang paling banyak hafal al qur’an ( H.R. Nasai dan Tirmidzi dan Hisyam bin Amir ra ).
                        \n5.	Bacaan meletakkan mayit dalam kubur. Apabila meletakkan mayyit dalam kubur, Rasulullah saw. membaca :
                        بسم الله وعلى ملة رسول الله
                        Artinya :Dengan nama Allah dan agama Rasulullah.

                        بسم الله وعلى ملة رسول الله وعلى سنة رسول الله
                        Artinya :Dengan nama Allah dan agama Rasulullah dan atas nama sunnah Rasulullah”. ( HR. Lima ahli hadits kecuali Nasai dan Ibu Umar ra ).
                        \n6.	Larangan memperindah kuburan. Jabir ra. menerangkan, “ Rasulullah saw. melarang mengecat kuburan, duduk, dan membuat bangunan di atasnya. “ ( HR. Muslim )
                        \n7.	Sebelum dikubur, ahli waris atau keluarga hendaklah bersedia menjadi penjamin atau menyelesaikan atas hutang hutang si mayat jika ada, baik dari harta yang ditinggalkannya atau dari sumbangan keluarganya. Nabi Muhammad saw. bersabda :“  diri orang mu’min itu tergantung ( tidak sampai ke hadirat Tuhan ) karena hutangnya, sampai dibayar dulu hutangnya itu ( oleh keluarganya ).” ( HR. Ahmad dan Tirmidzi dari Abu Hurairah ra. )

                `}
                  </Text>                  
                  
              </View>
              <View>
                <Button iconLeft info block onPress={this.presEvent}>
                  <Icon active name='film' />
                  <Text>Menguburkan Jenazah</Text>
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

export { menguburkan };

