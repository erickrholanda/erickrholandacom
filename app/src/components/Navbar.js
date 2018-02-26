import React, {Component} from 'react';
import profile from '../profile.jpg';

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: true,
            style: {
                transform: 'translateX(-17rem)',
                transition: 'transform .6s ease-out'
            }
        };

        this.mountStyle = this.mountStyle.bind(this);
        this.unMountStyle = this.unMountStyle.bind(this);
    }
    componentWillReceiveProps(newProps) {
        if (!newProps.mounted) {
            return this.unMountStyle();
        }
        this.setState({
            show: true
        });
        setTimeout(this.mountStyle, 10);
    }
    mountStyle() {
        this.setState({
            style : {
                transform: 'translateX(0)',
                transition: 'transform .6s ease-out'
            }
        });
    }
    unMountStyle() {
        this.setState({
            style : {
                transform: 'translateX(-17rem)',
                transition: 'transform .6s ease-out'
            }
        });
    }
    componentDidMount() {
        setTimeout(this.mountStyle, 10) //call the into animiation
    }
    render() {
        let classes = "navbar navbar-expand-lg navbar-dark bg-primary fixed-top";
        
        return (
            <nav className={classes} id="sideNav" style={this.state.style}>
                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                    <span className="d-block d-lg-none"></span>
                    <span className="d-none d-lg-block">
                    <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profile} alt="" />
                    </span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#about">Sobre mim</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#experience">Experiência</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#education">Educação</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#skills">Habilidades</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#interests">Interesses</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#awards">Prêmios</a>
                    </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;