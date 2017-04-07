import React from 'react';
import { View, Text } from 'native-base';

const Perawatan = () => {
    return (<View style={styles.container}>
                <Text style={styles.tittle}>Perawatan jenazah</Text>
                <Text style={styles.paragraf}>
                    {`Apabila seseorang telah dinyatakan positif meninggal dunia, ada beberapa hal yang harus disegerakan dalam pengurusan jenazah oleh keluarganya.Yaitu memandikan, mengafani, menyalati dan menguburkannya. Namun sebelum mayat itu dimandikan, ada beberapa hal yang harus diperhatikan terhadap kondisi jenazah, yaitu seperti berikut :
                    \n 1.	Pejamkanlah matanya dan mohonkanlah ampun kepada Allah SWT atas segala dosanya.
                    \n 2.	Tutuplah seluruh badannya dengan kain sebagai penghormatan dan agar tidak kelihatan auratnya.
                    \n 3.	Ditempatkan di tempat yang aman dari jangkauan binatang.`}
                </Text>
            </View>
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

export { Perawatan };

