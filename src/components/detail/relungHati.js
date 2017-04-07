import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';

const relungHati = () => {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.header} >
                    Membuka relung hati
                </Text>
                <Text style={styles.paragraf} >
                    { '\n \n' }Hidup di dunia ini tidaklah selamanya.Akan datang masanya kita berpisah dengan dunia berikut isinya.Perpisahan itu terjadi saat kematian menjemput. Kematian adalah pintu dan setiap manusia akan memasuki pintu itu, tanpa ada seorang pun yang dapat menghindar darinya.
                </Text>
            </View>
            <View>
                <Image                
                    style={{ position: 'relative' }} 
                    source={require('../raw/3_185.png')}
                />
            </View>
            <View>
                <Text style={styles.paragraf} >
                    { '\n \n' }Artinya :Tiap-tiap yang bernyawa akan merasakan mati. ( QS. Ali Imran/3:185 )
                </Text>
                <Text style={styles.paragraf} >
                    { '\n \n' }Ayat di atas menjelaskan bahwa setiap yang bernyawa pasti akan mati. Kita juga akan mati sebab kita ini manusia yang memiliki nyawa. Kematian datang tidak pernah pilih-pilih.Apabila ajal datang, tidak ada satu kekuatan pun yang mempercepat atau memperlambat.Ada kalanya kematian itu mejemput saat masih bayi, kanak-kanak, remaja, dewasa bahkan orang yang sudah tua renta.
                </Text>
                <Text style={styles.paragraf} >
                    { '\n \n' }Kadang ia menjemputnya saat manusia sedang tidur, terjaga, sedang sedih, sednag bahagia, sedang sendiri dan sedang bersama. Kematian datang tidak pernah ada yang tahu. Oleh karena itu, mengigat mati harus sering dilakukan agar manusia menyadari bahwa dirinya tidak akan hidup kekal. Salah satu cara untuk mengigat mati adalah sering-sering ber-ta’ziyyah, mengurus jenazah, mulai dari memandikan, mengafani, menyalati sampai menguburnya.
                </Text>
                <Text style={styles.paragraf} >
                    { '\n \n' }Seorang putra dari sahabat yang mulia Abdullah bin Umar ra. mengabarkan, aku sedang duduk bersama Rasulullah saw. Tatkala datang seorang laki-laki dari kalangan Anshar.Ia mengucapkan salam kepada Rasulullah saw. lalu berkata, “ Ya Rasulullah, mu’min manakah yang paling utama ?” Beliau menjawab, yag paling baik akhlaknya di antara mereka.”, ”mu’min manakah yang paling cerdas ?” tanya lelaki itu lagi. Beliau mejawab : “ orang yang paling banyak mengingat mati dan paling baik persiapannya untuk kehidupan setelah mati. Mereka itulah orang-orang yang cerdas.”( HR. Ibnu Majah )
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
    container: {
        flex: 1,
        marginLeft: 15,
        marginRight: 13
    },
    paragraf: {
        flex: 1,
        fontSize: 15, 
        marginTop: 0
    }

};

export { relungHati };
