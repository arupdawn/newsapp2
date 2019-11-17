import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import grab from './videos/grab2.mp4';
import small from './videos/small.mp4';
import dlp from './videos/dlp.mp4';
import dolby from './videos/dolby.mp4';
import lion from './videos/lion.mp4';
import metaxas from './videos/metaxas.mp4';
import p60 from './videos/p60.mp4';
import page18 from './videos/page18.mp4';
import panasonic from './videos/panasonic.mp4';
import tra from './videos/tra.mp4';

import igrab from './videoImages/grab.PNG';
import ismall from './videoImages/small.PNG';
import idlp from './videoImages/dlp.PNG';
import idolby from './videoImages/dolby.PNG';
import ilion from './videoImages/lion.PNG';
import imetaxas from './videoImages/metaxas.PNG';
import ip60 from './videoImages/p60.PNG';
import ipage18 from './videoImages/page18.PNG';
import ipanasonic from './videoImages/panasonic.PNG';
import itra from './videoImages/tra.PNG';



class VideoPlay extends React.Component {

    
    usdata;

    constructor(props){
        super(props);
    
            this.state = {
                vididdata: localStorage.getItem('vivid2'),
                vidObj : [
                    {   
                        keyid : 0,
                        vidimg : igrab,
                        vidtitle : 'Star Rising',
                        vidviews : 1704,
                        vidsource : grab
                    },
                    {   
                        keyid : 1,
                        vidimg : ismall,
                        vidtitle : 'Toys Playing',
                        vidviews : 1342,
                        vidsource : small
                    },
                    {   
                        keyid : 2,
                        vidimg : idlp,
                        vidtitle : 'Women Speech',
                        vidviews : 'videoviews1',
                        vidviews : 2297
                    },
                    {   
                        keyid : 3,
                        vidimg : idolby,
                        vidtitle : 'Dolby digital prmo',
                        vidviews : 1197,
                        vidsource : dolby
                    },
                    {   
                        keyid : 4,
                        vidimg : ilion,
                        vidtitle : 'Lion speaking',
                        vidviews : 2275,
                        vidsource : lion
                    },
                    {   
                        keyid : 5,
                        vidimg : imetaxas,
                        vidtitle : 'Interview Metxas',
                        vidviews : 1154,
                        vidsource : metaxas
                    },
                    {   
                        keyid : 6,
                        vidimg : ip60,
                        vidtitle : 'Crowd performnce',
                        vidviews : 1244,
                        vidsource : p60
                    },
                    {   
                        keyid : 7,
                        vidimg : ipage18,
                        vidtitle : 'Eye details',
                        vidviews : 987,
                        vidsource : page18
                    },
                    {   
                        keyid : 8,
                        vidimg : ipanasonic,
                        vidtitle : 'School playgrpund',
                        vidviews : 334,
                        vidsource : panasonic
                    },
                    {   
                        keyid : 9,
                        vidimg : itra,
                        vidtitle : 'Ola Cab services',
                        vidviews : 1007,
                        vidsource : tra
                    },

                ],

                mainvidsource: dlp
            }
            
            this.VidClick = this.VidClick.bind(this);
            
      } 
      
      VidClick(e){
        localStorage.setItem('vivid2', e.target.alt);
        console.log(e.target.alt);
        
        this.componentDidMount();
        window.history.go();
      }

    componentWillUpdate(){
        
    }
 

  componentDidMount(){

    //if(this.state.vididdata == 0){
     //   this.setState({
    //        mainvidsource: this.state.vidObj[this.state.vididdata].vidsource
    //    })
    //}
    //else if(this.state.vididdata == 1){
    //    this.setState({
    //        mainvidsource: this.state.vidObj[1].vidsource
    //    })
    //}

    let i=this.state.vididdata;
    this.setState({
        mainvidsource: this.state.vidObj[i].vidsource
    })
    
    ///console.log(this.state.vididdata);

  }

  logout(){
    this.props.history.push('/');
  }

  render() {
    this.usdata = JSON.parse(localStorage.getItem('user'));

    let styles = {
        width: '160px',
        height: '105px',
        borderRadius :'5px'
    };

    return (
      <div >
          <nav> 
            <ul>   
                <li>
                        <Link to="/videolist/">   
                            HomePage
                        </Link>   
                </li>
                
                <li><a >Contact</a></li>
                

                <li className="floatright">
                        <a href="#" className="buttonlogout active" onClick={this.logout.bind(this)}>Logout</a>
                        {" "}                   
                </li>
                <li className="floatright"><a>Welcome {this.usdata.email}</a></li>
            </ul>
            
           </nav>
           
          
          <div className="VidPlayer row">

          <div className="col-sm-8">
          <h3></h3>
          <video className="video-js vjs-theme-city" preload="auto" width="700" height="450" controls>
            <source src={this.state.mainvidsource} type="video/mp4" />
          </video>
          </div>
        
          <div className="col-sm-4">

          <div className=" thumbnail2">
                    <br></br>
                    <div className = "row">

                        <div className="caption col-sm-6">
                        <Link to="/videoplay/">
                        <a onClick={this.VidClick}>
                        <img style={styles} className="vidimg" src={this.state.vidObj[0].vidimg} 
                            alt={this.state.vidObj[0].keyid} />
                        </a>
                        </Link>
                        </div>
                    
                        <div className="caption col-sm-6">
                            <h5>Watch: {this.state.vidObj[0].vidtitle}</h5>
                            <hr></hr>
                            <p>{this.state.vidObj[0].vidviews} <strong>views</strong></p>
                        </div>
                    </div>
          </div>

          <div className=" thumbnail2">
                    
                    <div className = "row">

                        <div className="caption col-sm-6">
                        <Link to="/videoplay/">
                        <a onClick={this.VidClick}>
                        <img style={styles} className="vidimg" src={this.state.vidObj[1].vidimg} 
                            alt={this.state.vidObj[1].keyid} />
                        </a>
                        </Link>
                        </div>
                    
                        <div className="caption col-sm-6">
                            <h5>Watch: {this.state.vidObj[1].vidtitle}</h5>
                            <hr></hr>
                            <p>{this.state.vidObj[1].vidviews} <strong>views</strong></p>
                        </div>
                    </div>
          </div>

          <div className=" thumbnail2">
                    
                    <div className = "row">

                        <div className="caption col-sm-6">
                        <Link to="/videoplay/">
                        <a onClick={this.VidClick}>
                        <img style={styles} className="vidimg" src={this.state.vidObj[2].vidimg} 
                            alt={this.state.vidObj[2].keyid} />
                        </a>
                        </Link>
                        </div>
                    
                        <div className="caption col-sm-6">
                            <h5>Watch: {this.state.vidObj[2].vidtitle}</h5>
                            <hr></hr>
                            <p>{this.state.vidObj[2].vidviews} <strong>views</strong></p>
                        </div>
                    </div>
          </div>

          <div className=" thumbnail2">
                    
                    <div className = "row">

                        <div className="caption col-sm-6">
                        <Link to="/videoplay/">
                        <a onClick={this.VidClick}>
                        <img style={styles} className="vidimg" src={this.state.vidObj[3].vidimg} 
                            alt={this.state.vidObj[3].keyid} />
                        </a>
                        </Link>
                        </div>
                    
                        <div className="caption col-sm-6">
                            <h5>Watch: {this.state.vidObj[3].vidtitle}</h5>
                            <hr></hr>
                            <p>{this.state.vidObj[3].vidviews} <strong>views</strong></p>
                        </div>
                    </div>
          </div>

          <div className=" thumbnail2">
                    
                    <div className = "row">

                        <div className="caption col-sm-6">
                        <Link to="/videoplay/">
                        <a onClick={this.VidClick}>
                        <img style={styles} className="vidimg" src={this.state.vidObj[4].vidimg} 
                            alt={this.state.vidObj[4].keyid} />
                        </a>
                        </Link>
                        </div>
                    
                        <div className="caption col-sm-6">
                            <h5>Watch: {this.state.vidObj[4].vidtitle}</h5>
                            <hr></hr>
                            <p>{this.state.vidObj[4].vidviews} <strong>views</strong></p>
                        </div>
                    </div>
          </div>

          <div className=" thumbnail2">
                    
                    <div className = "row">

                        <div className="caption col-sm-6">
                        <Link to="/videoplay/">
                        <a onClick={this.VidClick}>
                        <img style={styles} className="vidimg" src={this.state.vidObj[5].vidimg} 
                            alt={this.state.vidObj[5].keyid} />
                        </a>
                        </Link>
                        </div>
                    
                        <div className="caption col-sm-6">
                            <h5>Watch: {this.state.vidObj[5].vidtitle}</h5>
                            <hr></hr>
                            <p>{this.state.vidObj[5].vidviews} <strong>views</strong></p>
                        </div>
                    </div>
          </div>

          <div className=" thumbnail2">
                    
                    <div className = "row">

                        <div className="caption col-sm-6">
                        <Link to="/videoplay/">
                        <a onClick={this.VidClick}>
                        <img style={styles} className="vidimg" src={this.state.vidObj[6].vidimg} 
                            alt={this.state.vidObj[6].keyid} />
                        </a>
                        </Link>
                        </div>
                    
                        <div className="caption col-sm-6">
                            <h5>Watch: {this.state.vidObj[6].vidtitle}</h5>
                            <hr></hr>
                            <p>{this.state.vidObj[6].vidviews} <strong>views</strong></p>
                        </div>
                    </div>
          </div>

          <div className=" thumbnail2">
                    
                    <div className = "row">

                        <div className="caption col-sm-6">
                        <Link to="/videoplay/">
                        <a onClick={this.VidClick}>
                        <img style={styles} className="vidimg" src={this.state.vidObj[7].vidimg} 
                            alt={this.state.vidObj[7].keyid} />
                        </a>
                        </Link>
                        </div>
                    
                        <div className="caption col-sm-6">
                            <h5>Watch: {this.state.vidObj[7].vidtitle}</h5>
                            <hr></hr>
                            <p>{this.state.vidObj[7].vidviews} <strong>views</strong></p>
                        </div>
                    </div>
          </div>

          <div className=" thumbnail2">
                    
                    <div className = "row">

                        <div className="caption col-sm-6">
                        <Link to="/videoplay/">
                        <a onClick={this.VidClick}>
                        <img style={styles} className="vidimg" src={this.state.vidObj[8].vidimg} 
                            alt={this.state.vidObj[8].keyid} />
                        </a>
                        </Link>
                        </div>
                    
                        <div className="caption col-sm-6">
                            <h5>Watch: {this.state.vidObj[8].vidtitle}</h5>
                            <hr></hr>
                            <p>{this.state.vidObj[8].vidviews} <strong>views</strong></p>
                        </div>
                    </div>
          </div>

          <div className=" thumbnail2">
                    
                    <div className = "row">

                        <div className="caption col-sm-6">
                        <Link to="/videoplay/">
                        <a onClick={this.VidClick}>
                        <img style={styles} className="vidimg" src={this.state.vidObj[9].vidimg} 
                            alt={this.state.vidObj[9].keyid} />
                        </a>
                        </Link>
                        </div>
                    
                        <div className="caption col-sm-6">
                            <h5>Watch: {this.state.vidObj[9].vidtitle}</h5>
                            <hr></hr>
                            <p>{this.state.vidObj[9].vidviews} <strong>views</strong></p>
                        </div>
                    </div>
          </div>

          </div>

          </div>

          
          
          <br></br>

      </div>
    );
  }
}

export default VideoPlay;