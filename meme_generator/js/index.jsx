import React from 'react';


class Index extends React.Component {
    /* Index page that searchs for images
     */
  
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div className="index-search">
          <h1 className="meme-text">Meme Generator</h1>
          <form action="/search/" method="get">
            <input type="text" name="q" required />
            <input type="submit" value="Search" />
          </form>
        </div>
      );
    }
}
  
  export default Index;