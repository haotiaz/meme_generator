import React from 'react';


class Index extends React.Component {
    /* Index page that searchs for images
     */
  
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <div>Meme Generator</div>
          <form action="/search/" method="get">
            <input type="text" name="q" required />
            <input type="submit" value="Search" />
          </form>
        </div>
      );
    }
}
  
  export default Index;