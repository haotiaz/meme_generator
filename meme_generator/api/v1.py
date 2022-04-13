"""REST API for posts."""
import flask
import meme_generator


@meme_generator.app.route('/api/v1/')
def get_api():
    """Return all APIs."""
    context = {
        "search": "/api/v1/search/",
        "url": "/api/v1/"
    }
    return flask.jsonify(**context)
