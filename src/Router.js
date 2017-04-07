import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import materiList from './components/materiList';
import materiDetail from './components/materiDetail';
import { relungHati, Perawatan, memandikan, mengkafani, menshalatkan, menguburkan, taziah, ziarah, rangkuman, soal } from './components/detail';
import { videoPlayer } from './components/detail/videoplayer';


const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="auth">
                <Scene
                    key="login" 
                    component={LoginForm}
                    title="Please Login"
                />
            </Scene>
            <Scene key="main" initial >
                <Scene 
                    navigationBarStyle={{ backgroundColor: '#d3ffda' }}
                    key="materiList"
                    component={materiList}
                    title="Menu"            
                />
                <Scene 
                    navigationBarStyle={{ backgroundColor: '#d3ffda' }}
                    key="materiDetail"
                    component={materiDetail}
                    title="Materi"            
                />
                <Scene 
                    navigationBarStyle={{ backgroundColor: '#d3ffda' }}
                    key="relungHati"
                    component={relungHati}
                    title="Relung Hati"            
                />
                <Scene 
                    navigationBarStyle={{ backgroundColor: '#d3ffda' }}
                    key="Perawatan"
                    component={Perawatan}
                    title="Merawat"            
                />
                                
                <Scene 
                    navigationBarStyle={{ backgroundColor: '#d3ffda' }}
                    key="memandikan"
                    component={memandikan}
                    title="Memandikan"            
                />
                <Scene 
                    navigationBarStyle={{ backgroundColor: '#d3ffda' }}
                    key="mengkafani"
                    component={mengkafani}
                    title="Mengkafani"            
                />
                <Scene 
                    navigationBarStyle={{ backgroundColor: '#d3ffda' }}
                    key="menshalatkan"
                    component={menshalatkan}
                    title="Menshalatkan"            
                />
                <Scene 
                    navigationBarStyle={{ backgroundColor: '#d3ffda' }}
                    key="mengkuburkan"
                    component={menguburkan}
                    title="Mengkuburkan"            
                />
                <Scene 
                    navigationBarStyle={{ backgroundColor: '#d3ffda' }}
                    key="taziah"
                    component={taziah}
                    title="Taziah"            
                />
                <Scene 
                    navigationBarStyle={{ backgroundColor: '#d3ffda' }}
                    key="ziarah"
                    component={ziarah}
                    title="MenshalatZiarahkan"            
                />
                <Scene 
                    navigationBarStyle={{ backgroundColor: '#d3ffda' }}
                    key="rangkuman"
                    component={rangkuman}
                    title="Rangkuman"            
                />
                <Scene 
                    navigationBarStyle={{ backgroundColor: '#d3ffda' }}
                    key="soal"
                    component={soal}
                    title="Soal"            
                /> 
                <Scene 
                    navigationBarStyle={{ backgroundColor: '#d3ffda' }}
                    key="film"
                    component={videoPlayer}
                    title="Video"
                />               
            </Scene>
            
        </Router>

    );
};

export default RouterComponent;
