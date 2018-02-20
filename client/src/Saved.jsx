import React from 'react';
import axios from 'axios';

class Saved extends React.Component {
  constructor() {
    super();

    this.state = {

    };

    this.handleRemove = this.handleRemove.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);  
  }

  handleUpdate(article) {

  }

  handleRemove(article) {

  }

  componentWillMount() {
    axios.get('/api/articles', )
  }

  render() {
    return(
      <div>
        <section className='section'>
          <div className='container'>
            <nav className="panel">
              <p className="panel-heading">
                Search For Articles
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'right' }} className="panel-block">
                <label className="label">Search Term</label>
                <input 
                  className="input" 
                  type="text" 
                  placeholder="NASA" 
                  onChange={this.handleChange}
                  name={'search'}
                  value={this.state.search}
                />
                <label className="label">Start Year</label>
                <input 
                  className="input" 
                  type="text" 
                  placeholder="2001" 
                  onChange={this.handleChange} 
                  name={'startYear'}                
                  value={this.state.startYear}
                />
                <label className="label">End Year</label>              
                <input 
                  className="input" 
                  type="text" 
                  placeholder="2002" 
                  onChange={this.handleChange}
                  name={'endYear'}                
                  value={this.state.endYear}
                />              
                <div className="field" style={{ marginTop: 10 }}>
                  <p className="control">
                    <button className="button is-success" onClick={this.handleSearch}>
                      SEARCH
                    </button>
                  </p>
                </div>
              </div>
            </nav>
          </div>
        </section>
        {this.state.articlesReturned && 
          <SearchResults
            articles={this.state.articlesReturned}
          />
        }
      </div>
    );
  }
}

export default Saved;