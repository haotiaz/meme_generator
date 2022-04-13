"""
Meme Generator index, search results and editing image views.
"""
import flask
import meme_generator


@meme_generator.app.route('/', methods=['GET'])
@meme_generator.app.route('/search/', methods=['GET'])
@meme_generator.app.route('/edit/', methods=['GET'])
def get_template():
    """Send the template to the react frontend."""
    return flask.render_template("react_template.html")
