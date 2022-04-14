import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ImagePreview from './search_components/imagePreview';
import Navigation from './navagation';

class Search extends React.Component {
  /* Display the search results
   */

  constructor(props) {
    super(props);
    let search = window.location.search;
    let params = new URLSearchParams(search);
    this.state = {query: params.get('q') || "", 
                  images: [],
                  hasMore: true,
                  currentPage: 0
                 };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  buildImageUrl(serverId, id, secret, size) {
    // Return the URL of image
    return `https://live.staticflickr.com/${serverId}/${id}_${secret}_${size}.jpg`;
  }

  fetchData() {
    // Call REST API to add the images to the list
    this.setState((prevState) => ({
      currentPage: prevState.currentPage+1
    }));
    const { query, currentPage } = this.state;
    const perPage = 50;
    let api_url = `/api/v1/search/?q=${query}&per_page=${perPage}&page=${currentPage}`;
    fetch(api_url, { credentials: 'same-origin' })
      .then((response) => {
        if (!response.ok) {
          this.setState({
            hasMore: false
          });
          throw Error(response.statusText);
        } 
        return response.json();
      }).then((data) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...data.photos.photo]
        }));
        if(data.photos.photo.length < perPage){
          this.setState({
            hasMore: false
          });
        }

      }).catch((error) => console.log(error));
  }

  render() {
    let { query, images, hasMore } = this.state;
    let imageItems = images.map((image, index) => (
      <ImagePreview key={index} id={image.id} server={image.server} secret={image.secret} title={image.title}/>
    ));

    return (
      <div>
        {/* <Navigation searchText={ query } /> */}
        <InfiniteScroll
          dataLength = { imageItems.length }
          next = { this.fetchData }
          hasMore = { hasMore }
          loader = { <h4>Loading...</h4> }
          endMessage = {
            <p style = { { textAlign: 'center' } }>
              <b>You have seen it all</b>
            </p>
          }
        >
          <div>{ imageItems }</div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default Search;