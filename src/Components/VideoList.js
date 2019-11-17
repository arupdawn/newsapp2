import React, { Component } from 'react';
import {Link} from 'react-router-dom';

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

class VideoList extends React.Component {
  usdata;
  vidusdata;
  position;

  constructor(props){
    super(props);
        this.position = -1;

        this.state = {
            vidObj : [
                {   
                    keyid : 0,
                    vidimg : igrab,
                    vidtitle : 'Star Rising',
                    vidviews : 1704
                },
                {   
                    keyid : 1,
                    vidimg : ismall,
                    vidtitle : 'Toys Playing',
                    vidviews : 1342
                },
                {   
                    keyid : 2,
                    vidimg : idlp,
                    vidtitle : 'Women Speech',
                    vidviews : 2297
                },
                {   
                    keyid : 3,
                    vidimg : idolby,
                    vidtitle : 'Dolby digital prmo',
                    vidviews : 1197
                },
                {   
                    keyid : 4,
                    vidimg : ilion,
                    vidtitle : 'Lion speaking',
                    vidviews : 2275
                },
                {   
                    keyid : 5,
                    vidimg : imetaxas,
                    vidtitle : 'Interview Metxas',
                    vidviews : 1154
                },
                {   
                    keyid : 6,
                    vidimg : ip60,
                    vidtitle : 'Crowd performnce',
                    vidviews : 1244
                },
                {   
                    keyid : 7,
                    vidimg : ipage18,
                    vidtitle : 'Eye details',
                    vidviews : 987
                },
                {   
                    keyid : 8,
                    vidimg : ipanasonic,
                    vidtitle : 'School playgrpund',
                    vidviews : 334
                },
                {   
                    keyid : 9,
                    vidimg : itra,
                    vidtitle : 'Ola Cab services',
                    vidviews : 1007
                },
            ],

            searchKey :'',
            searchKeyText :''

        }

        this.VidClick = this.VidClick.bind(this);
  }

  logout(){
    this.props.history.push('/');
  }

  componentDidMount(){
    
  }

  componentWillUpdate(nextProps,nextState){
    
  }

  onSearch(e){
    this.setState({
        searchKey: this.state.searchKeyText
    })
  }

  onChangeSearch(e){
    this.setState({
      searchKeyText: e.target.value
    })
  }

  VidClick(e){
    localStorage.setItem('vivid2', e.target.alt);
    console.log(e.target.alt);
  }

  refresh(){
        window.history.go();
  }

  render() {
    this.usdata = JSON.parse(localStorage.getItem('user'));
    this.usdata.vidid = 1;

    let styles = {
        height: '150px',
    };

    if(this.state.searchKey == ''){
        return (
            <div className="">
              <nav>
                  
                  <ul>
                      
                      <li>
                              <Link to="/videolist/">   
                                  HomePage
                              </Link>
                          
                      </li>

                        <li>
                            <a href="#">Contact</a>                         
                        </li>
                     
 
                      
                      <li className="floatright">
                              <a href="#" className="buttonlogout active" onClick={this.logout.bind(this)}>Logout</a>
                              {" "}                   
                      </li>
                      <li className="floatright"><a>Welcome {this.usdata.email}</a></li>
      
                      <li className="floatright">
                          <button className ="searchbtn" type="submit" onClick={this.onSearch.bind(this)}>
                                <i className="fa fa-search"></i>
                          </button>
                      </li>
      
                      <li className="floatright">
                          <input className ="searchbar" type="text" value={this.state.searchKeyText} 
                          onChange={this.onChangeSearch.bind(this)}
                             placeholder="Search.." name="search" />
                      </li>
                      
      
                  </ul>
                  
              </nav>
      
                <h3></h3>
      
              <div>
      
                  <div className="container" id="tourpackages-carousel">
            
                  <div className="row">
                      
                      <div className="col-xs-18 col-sm-6 col-md-3">
                      
                      <div className="thumbnail">
                              
                              <Link to="/videoplay/#">
                              <a onClick={this.VidClick}>
                              <img style={styles} className="vidimg" src={this.state.vidObj[0].vidimg} alt={this.state.vidObj[0].keyid} />
                              </a>
                              </Link>
                          
                          
                          <div className="caption">
                              <h4>Watch: {this.state.vidObj[0].vidtitle}</h4>
                              <hr></hr>
                              {this.state.vidObj[0].vidviews} views
                          </div>
                      </div>
                      
                      
                      </div>
      
                      <div className="col-xs-18 col-sm-6 col-md-3">
                      
                      <div className="thumbnail">
      
                          <Link to="/videoplay/">
                          <a onClick={this.VidClick}>
                          <img style={styles} className="vidimg" src={this.state.vidObj[1].vidimg} alt={this.state.vidObj[1].keyid} />
                          </a>
                          </Link>
      
                          <div className="caption">
                              <h4>Watch: {this.state.vidObj[1].vidtitle}</h4>
                              <hr></hr>
                              {this.state.vidObj[1].vidviews} views
                          </div>
                      </div>
                      
                      
                      </div>  
      
                      <div className="col-xs-18 col-sm-6 col-md-3">
                      
                      <div className="thumbnail">
      
                          <Link to="/videoplay/">
                          <a onClick={this.VidClick}>
                          <img style={styles} className="vidimg" src={this.state.vidObj[2].vidimg} alt={this.state.vidObj[2].keyid} />
                          </a>
                          </Link>
      
                          <div className="caption">
                              <h4>Watch: {this.state.vidObj[2].vidtitle}</h4>
                              <hr></hr>
                              {this.state.vidObj[2].vidviews} views
                          </div>
                      </div>
                      
                      
                      </div>   
      
                      <div className="col-xs-18 col-sm-6 col-md-3">
                      
                      <div className="thumbnail">
      
                          <Link to="/videoplay/">
                          <a onClick={this.VidClick}>
                          <img style={styles} className="vidimg" src={this.state.vidObj[3].vidimg} alt={this.state.vidObj[3].keyid} />
                          </a>
                          </Link>
      
                          <div className="caption">
                              <h4>Watch: {this.state.vidObj[3].vidtitle}</h4>
                              <hr></hr>
                              {this.state.vidObj[3].vidviews} views
                          </div>
                      </div>
                      
                      
                      </div>    
      
                      <div className="col-xs-18 col-sm-6 col-md-3">
                      
                      <div className="thumbnail">
      
                          <Link to="/videoplay/">
                          <a onClick={this.VidClick}>
                          <img style={styles} className="vidimg" src={this.state.vidObj[4].vidimg} alt={this.state.vidObj[4].keyid} />
                          </a>
                          </Link>
      
                          <div className="caption">
                              <h4>Watch: {this.state.vidObj[4].vidtitle}</h4>
                              <hr></hr>
                              {this.state.vidObj[4].vidviews} views
                          </div>
                      </div>
                      
                      
                      </div> 
      
                      <div className="col-xs-18 col-sm-6 col-md-3">
                      
                      <div className="thumbnail">
      
                          <Link to="/videoplay/">
                          <a onClick={this.VidClick}>
                          <img style={styles} className="vidimg" src={this.state.vidObj[5].vidimg} alt={this.state.vidObj[5].keyid} />
                          </a>
                          </Link>
      
                          <div className="caption">
                              <h4>Watch: {this.state.vidObj[5].vidtitle}</h4>
                              <hr></hr>
                              {this.state.vidObj[5].vidviews} views
                          </div>
                      </div>
                      
                      
                      </div> 
      
                      <div className="col-xs-18 col-sm-6 col-md-3">
                      
                      <div className="thumbnail">
      
                          <Link to="/videoplay/">
                          <a className="vidimg" onClick={this.VidClick}>
                          <img style={styles} src={this.state.vidObj[6].vidimg} alt={this.state.vidObj[6].keyid} />
                          </a>
      
                          </Link>
      
                          <div className="caption">
                              <h4>Watch: {this.state.vidObj[6].vidtitle}</h4>
                              <hr></hr>
                              {this.state.vidObj[6].vidviews} views
                          </div>
                      </div>
                      
                      
                      </div>
      
                      <div className="col-xs-18 col-sm-6 col-md-3">
                      
                      <div className="thumbnail">
      
                          <Link to="/videoplay/">
                          <a className="vidimg" onClick={this.VidClick}>
                          <img  style={styles} src={this.state.vidObj[7].vidimg} alt={this.state.vidObj[7].keyid} />
                          </a>
                          </Link>
      
                          <div className="caption">
                              <h4>Watch: {this.state.vidObj[7].vidtitle}</h4>
                              <hr></hr>
                              {this.state.vidObj[7].vidviews} views
                          </div>
                      </div>
                      
                      
                      </div>
      
                      <div className="col-xs-18 col-sm-6 col-md-3">
                      
                      <div className="thumbnail">
      
                          <Link to="/videoplay/">
                          <a className="vidimg"onClick={this.VidClick}>
                          <img style={styles} src={this.state.vidObj[8].vidimg} alt={this.state.vidObj[8].keyid} />
                          </a>
                          </Link>
      
                          <div className="caption">
                              <h4>Watch: {this.state.vidObj[8].vidtitle}</h4>
                              <hr></hr>
                              {this.state.vidObj[8].vidviews} views
                          </div>
                      </div>
                      
                      
                      </div>   
      
                      <div className="col-xs-18 col-sm-6 col-md-3">
                      
                      <div className="thumbnail">
      
                          <Link to="/videoplay/">
                          <a className="vidimg"onClick={this.VidClick}>
                          <img style={styles} src={this.state.vidObj[9].vidimg} alt={this.state.vidObj[9].keyid} />
                          </a>
                          </Link>
      
                          <div className="caption">
                              <h4>Watch: {this.state.vidObj[9].vidtitle}</h4>
                              <hr></hr>
                              {this.state.vidObj[9].vidviews} views
                          </div>
                      </div>
                      
                      
                      </div> 
      
      
      
                      
                  </div>
                  
                  </div>
      
              </div>
                
                
            </div>
          );
    }

    else if(this.state.searchKey != ''){
        let i,ano='';

        for(i=0; i<10 ; i++){
            if(this.state.searchKey == this.state.vidObj[i].vidtitle){
                this.position=i;
            }
        }

        console.log(this.position);
        

        if(this.position>=0){
            return(
                <div className="">

                        <nav>
                    
                        <ul>
                            
                            <li>
                                <a href="#" onClick={this.refresh.bind(this)}>HomePage</a>
                            </li>

                            <li>
                                <a href="#">Contact</a>                         
                            </li>

                            
                            <li className="floatright">
                                    <a href= "#" className="buttonlogout active" onClick={this.logout.bind(this)}>Logout</a>
                                    {" "}                   
                            </li>
                            <li className="floatright"><a>Welcome {this.usdata.email}</a></li>

                            <li className="floatright">
                                <button className ="searchbtn" type="submit">
                                    <i className="fa fa-search"></i>
                                </button>
                            </li>

                            <li className="floatright">
                                <input className ="searchbar" type="text" value={this.state.searchKeyText} 
                                onChange={this.onChangeSearch.bind(this)} placeholder="Search.." name="search" />
                            </li>
                            

                        </ul>
                    
                        </nav>
                
                        <div className="container" id="tourpackages-carousel">

                        <div className = "row">
                        <div className = "col-xs-18 col-sm-6 col-md-3">

                        <div className="thumbnail">

                            <Link to="/videoplay/">
                            <a className="vidimg"onClick={this.VidClick}>
                            <img style={styles} src={this.state.vidObj[this.position].vidimg} alt={this.state.vidObj[this.position].keyid} />
                            </a>
                            </Link>

                            <div className="caption">
                                <h4>Watch: {this.state.vidObj[this.position].vidtitle}</h4>
                                <hr></hr>
                                {this.state.vidObj[this.position].vidviews} views
                            </div>
                        </div>

                        </div>
                        </div>
                </div>
                </div>
            );
        }
        else{
            return(
                <div>
                        <div className="">

                    <nav>

                    <ul>
                        
                        <li>
                            <a href="#" onClick={this.refresh.bind(this)}>HomePage</a>                         
                        </li>

                        <li>
                            <a href="#" >Contact</a>                         
                        </li>
                        

                        
                        <li className="floatright">
                                <a href="#" className="buttonlogout active" onClick={this.logout.bind(this)}>Logout</a>
                                {" "}                   
                        </li>
                        <li className="floatright"><a>Welcome {this.usdata.email}</a></li>

                        <li className="floatright">
                            <button className ="searchbtn" type="submit">
                                <i className="fa fa-search"></i>
                            </button>
                        </li>

                        <li className="floatright">
                                <input className ="searchbar" type="text" value={this.state.searchKeyText} 
                                onChange={this.onChangeSearch.bind(this)} placeholder="Search.." name="search" />
                        </li>
                        

                    </ul>

                    </nav>

                    <div className="container App" id="tourpackages-carousel">
                            <strong>Video Not found</strong>
                    </div>

                    </div>

                </div>


            );
        }

        
    }

  }
}

export default VideoList;