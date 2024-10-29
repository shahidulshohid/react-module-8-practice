
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import {Outlet} from 'react-router-dom'
import {useNavigation, useLocation} from 'react-router-dom'

const Home = () => {
    const navigation = useNavigation()
    const location = useLocation()
    console.log(location)

    return (
        <div>
            <Header></Header>
            {
                navigation.state === 'loading' ? <p>Loading...</p> : 
                <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Home;