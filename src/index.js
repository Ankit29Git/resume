import Intro from './content/intro';
import Info from './content/info';
import Footer from './content/footer';
import './content/style.scss';

class Welcome extends React.Component {
    render() {
        return (
            <div>
                <Intro />
                <Info />
                <Footer />
            </div>

        )
    }
}
ReactDOM.render(<Welcome />, document.getElementById("root"));

module.hot.accept(); // This added the Hot Reload functionality 