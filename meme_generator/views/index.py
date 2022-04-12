"""
Meme Generator index (main) view.

URLs include:
/
"""
import flask
import meme_generator


@meme_generator.app.route('/', methods=['GET'])
def show_index():
    """Display / route."""
    return flask.render_template("index.html")
