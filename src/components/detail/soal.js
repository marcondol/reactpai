import React from 'react';
import { ScrollView } from 'react-native';
import { View, Text, } from 'native-base';

const soal = () => {
    return (<ScrollView>
              <View style={styles.container}>                 
                  <Text style={styles.tittle}>A.	Berilahtandasilang( X) padahuruf a, b, c, d, atau e yang dianggapsebagaijawaban yang paligtepat !h</Text>
                  <Text style={styles.paragraf}>
                      {`1.	Perhatikanpernyataan-pernyataanberikut !
                                a)	Jenazahlaki-lakisebaiknyadibungkusdengantigahelaikainkafan, danwanitadengan lima helai
                                b)	Jikajenazahnyalaki-lakihedaknya orang yang mengafaninyajugalaki-laki
                                c)	Tiaphelaikainkafandihamparkan di atastikardandiberiharum-haruman
                                d)	Jenazahdiletakkan di ataskainkafandenganposisitangandiangkatsepertisedangtakbir ihram
                                e)	Seluruhtubuhjenazahdibalutdengankainkafankecualimukadibiarkanterbuka
                             Dari pernyataantersebut, manapernyataan yang termasukketentuansyari’atdalammengafanijenazah ?
                            a.	( a,bdan d )
                            b.	( b,cdan e )
                            c.	( a,b,ddane )
                            d.	( a,bdanc )
                            e.	( c,ddane )
                        2.	Perhatikanpernyataanberikut.
                                1)	Yang shalatjenazahharus orang muslim
                                2)	Merendahkansuarabacaanketikashalat
                                3)	Shalatjenazahdilakukansetelahjenazahdimandikan
                                4)	Membaca surah setelahal fatihah
                                5)	Letakjenazah di sebelahqiblatdari yang menyalatkan
                        Dari pernyataan-pernyataantersebut, pernyataan yang termasuksyarat-syaratsahshalatjenazahadalah…
                            a.	1,2, dan 3
                            b.	1,3, dan 5
                            c.	3,4, dan 5
                            d.	1,2, dan 4
                            e.	2,3, dan 4
                            3.	Salah satuucapandoadalamshalatjenazahberbunyi :
                        اللهم اغفرله ( ها ) وارحمه ( ها ) وعافه ( ها ) واعف عنه ( ها ) 
                            Artinya…..
                            a.	Gantikanlahrumahnya, dengan yang lebihbaikdarirumahnyaketika di dunia
                            b.	Gantikanlahkaumkeluarganyadarikaumkeluarganyadahulu
                            c.	Ampunilahsegaladosanya yang telahlalu
                            d.	Ya Allah, ampunilahia, kasihinilahia, sejahterakanlahia, maafkanlahkesalahannya.
                            e.	Periharalahdiadarisiksakuburdanazabneraka
                        4.	Perhatikanpernyataan-pernyataanberikut :
                                1)	Seorangmuslimahtidakbolehmenyalatkanjenazahlaki-lakimuslim
                                2)	Bilajenazahnyalaki-laki, letak imam shalatjenazahsejajardengankepalajenazah
                                3)	Laki-lakimuslimtidakbolehmenyalatkanjenazahwanitamuslimah
                                4)	Bilajenazahnyawanita, letak imam salatjenazahsejajardengandenganbagiantengahbadanjenazah
                                5)	Salatjenazahgaibharusmeghadapdimanajenazahitudimakamkan
                            Dari pernyataan-pernyataantersebut, pernyataan yang termasukkedalamketentuansyari’attentangsalatjenazahadalah…
                            a.	1 dan 2
                            b.	2 dan 3
                            c.	3 dan 4
                            d.	2 dan 4
                            e.	1, 3 dan 5
                        5.	Berikutinitermasukperbuatan-perbuatansunahpadawaktupemakaman, kecuali…
                            a.	Meninggikankubursekadarnya
                            b.	Menandaikuburdenganbatuataukayu
                            c.	Menaruhkerikil di ataskubur
                            d.	Menyiramkuburdengan air
                            e.	Penguburanjenazahsebaiknyajangandisegerakan

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

export { soal };

