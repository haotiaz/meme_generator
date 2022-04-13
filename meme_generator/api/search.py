"""REST API for search."""
import requests
import flask
import meme_generator

def request_images(query, per_page, page):
    """Get images by sending requests to Flickr API."""
    api_key = meme_generator.app.config['FLICKR_API_KEY']
    api_endpoint = meme_generator.app.config['FLICKR_API_ENDPOINT']
    args= {
        'method': 'flickr.photos.search',
        'api_key': api_key,
        'text': query,
        'per_page': per_page,
        'page': page,
        'format': 'json',
        'nojsoncallback': '1'
    }
    res = requests.get(api_endpoint, params = args)
    return res.json()


@meme_generator.app.route('/api/v1/search/', methods=['GET'])
def search_images():
    """
    Return a list of urls of images based on users' queries.

    query: the text used for searching images
    per_page: number of images earch page
    page: the index of the page
    """
    query = flask.request.args.get('query', '')
    per_page = flask.request.args.get('per_page', 100)
    page = flask.request.args.get('page', 1)

    result = request_images(query, per_page, page)
    if result['stat']=='fail':
        response = {
            'message': result['message'],
            'status_code': 400
        }
        return flask.jsonify(**response), 400
    else:
        return flask.jsonify(**result)
