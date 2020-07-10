import React from 'react';

class Item extends React.Component{
  render() {
    return (
      <div className="Item">
        <div className="overlay">
          <div className="title"></div>
          <div className="rating"></div>
          <div className="plot"></div>
          <ListToggle />
        </div>
      </div>
    );
  }
};

class ListToggle extends React.Component{
  constructor(props) {
    super(props);
    this.state = { toggled: false };
  }

  handleClick() {
    if(this.state.toggled === true) {
      this.setState({ toggled: false });
    } else {
      this.setState({ toggled: true }); 
    }
    
  }
  render() {
    return (
      <div onClick={this.handleClick} data-toggled={this.state.toggled} className="ListToggle">
        <div>
          <i className="fa fa-fw fa-plus"></i>
          <i className="fa fa-fw fa-check"></i>
        </div>
      </div>
    );
  }
};

class TitleList extends React.Component{
  render() {
    return (
      <div ref="titlecategory" className="TitleList" data-loaded='true'>
        <div className="Title">
          <h1>{this.props.title}</h1>
          <div className="titles-wrapper">
            <Item key='1' title='' score='' overview='' backdrop='' />
            <Item key='2' title='' score='' overview='' backdrop='' />
            <Item key='3' title='' score='' overview='' backdrop='' />
          </div>
        </div>
      </div>
    );
  }
};

/*
var TitleList = React.createClass({
  apiKey: '87dfa1c669eea853da609d4968d294be',
  getInitialState: function() {
    return {data: [], mounted: false};
  },
  loadContent: function() {
    var requestUrl = 'https://api.themoviedb.org/3/' + this.props.url + '&api_key=' + this.apiKey;
    fetch(requestUrl).then((response)=>{
        return response.json();
    }).then((data)=>{
        this.setState({data : data});
    }).catch((err)=>{
        console.log("There has been an error");
    });
  },
  componentWillReceiveProps : function(nextProps){
    if(nextProps.url !== this.props.url && nextProps.url !== ''){
      this.setState({mounted:true,url:nextProps.url},()=>{
        this.loadContent();
      });
      
    }
  },
  componentDidMount: function() {
    if(this.props.url !== ''){
      this.loadContent();
      this.setState({mounted:true});
    }
    
  },
  render: function() {
    var titles ='';
    if(this.state.data.results) {
      console.log(this.state.data.results);
      titles = this.state.data.results.map(function(title, i) {
        if(i < 3) {
          var name = '';
          var backDrop = 'http://image.tmdb.org/t/p/original' + title.backdrop_path;
          if(!title.name) {
            name = title.original_title;
          } else {
            name = title.name;
          }
          console.log('1');
          return (
            <Item key={title.id} title={name} score={title.vote_average} overview={title.overview} backdrop={backDrop} />
          );  

        }else if(i === 3){
          console.log('2');
          return (<div key={title.id}></div>);
        }
        console.log('return null');
        return null
      });
    } 
    
    return (
      <div ref="titlecategory" className="TitleList" data-loaded={this.state.mounted}>
        <div className="Title">
          <h1>{this.props.title}</h1>
          <div className="titles-wrapper">
            {titles}
          </div>
        </div>
      </div>
    );
  }
});*/

export default TitleList;